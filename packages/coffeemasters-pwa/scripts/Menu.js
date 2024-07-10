import API from "./API.js";

const objectStores = [
  { name: "categories", keyPath: "name" },
  { name: "products", keyPath: "name" },
];

const Menu = {
  data: null,
  openDB: async () => {
    return await idb.openDB("cm-menu", 2, {
      upgrade(db) {
        objectStores.forEach((store) => {
          if (!db.objectStoreNames.contains(store.name)) {
            db.createObjectStore(store.name, { keyPath: store.keyPath });
          }
        });
      },
    });
  },
  /** Cache First Pattern for loading data from the cache, before making a network request */
  loadCacheFirst: async () => {
    // Will use the cache FIRST if it exists, even when the server has new data
    const db = await Menu.openDB();
    if ((await db.count("categories")) == 0) {
      const categories = await API.fetchMenu();
      categories.forEach((c) => db.add("categories", c));
    }

    Menu.data = await db.getAll("categories");
    Menu.render();
  },
  /** Network first pattern for loading data from the network, and if it's not read it from the cache */
  load: async () => {
    const db = await Menu.openDB();
    try {
      // Try to fetch from the network (NETWORK FIRST...)
      const data = await API.fetchMenu();
      Menu.data = data;
      console.log("Data loaded from the network");

      // If succeeded, also update the cached version
      db.clear("categories");
      data.forEach((c) => db.add("categories", c));
    } catch (e) {
      // Network error, we go to the cache
      if ((await db.count("categories")) == 0) {
        Menu.data = await db.getAll("categories");
        console.log("Data from the cache");
      } else {
        // No cached data is available :(
        console.log("No data available");
      }
    }

    Menu.render();

    // Cache all images that are stored in our product(s)
    if (Menu.data) {
      // Like "opening" a folder so the browser knows where to store the images
      const imageCache = await caches.open("cm-images");
      // Pre-cache all our images
      Menu.data.forEach((c) => imageCache.addAll(c.products.map((p) => `/data/images/${p.image}`)));
    }
  },
  getProductById: async (id) => {
    if (Menu.data == null) {
      await Menu.load();
    }
    for (let c of Menu.data) {
      for (let p of c.products) {
        if (p.id == id) {
          return p;
        }
      }
    }
    return null;
  },
  render: () => {
    let html = "";
    for (let category of Menu.data) {
      html += `
                <li>
                    <h3>${category.name}</h3>
                    <ul class='category'>
                        ${category.products
                          .map(
                            (p) => `
                                <li>
                                    <article>
                                        <a href="#" 
                                            onclick="Router.go('/product-${p.id}');event.preventDefault()">
                                            <img src="/data/images/${p.image}">
                                            <h4>${p.name}</h4>
                                            <p class="price">$${p.price.toFixed(2)}<p>
                                        </a>
                                    </article>
                                </li>
                            `
                          )
                          .join("")}
                    </ul>
                </li>`;
    }
    document.querySelector("#menu").innerHTML = html;
  },
  renderDetails: async (id) => {
    const product = await Menu.getProductById(id);
    if (product == null) {
      console.log(`Product ${id} not found`);
      return;
    }
    document.querySelector("#details article").innerHTML = ` 
            <header>   
                <a href="#" onclick="Router.go('/'); event.preventDefault()">&lt; Back</a>
                <h2>${product.name}</h2>
                <a></a>
            </header>
            <img src="/data/images/${product.image}">
            <p class="description">${product.description}</p>
            <p class="price">$ ${product.price.toFixed(2)} ea</p>
            <button onclick="Order.add(${product.id}); Router.go('/order')">Add to cart</button>
        `;
  },
};

export default Menu;
