import Menu from "./Menu.js";

const Order = {
  cart: [],
  openDB: async () => {
    return await idb.openDB("cm-storage", 1, {
      async upgrade(db) {
        // Create an Object store
        await db.createObjectStore("order");
      },
    });
  },
  load: async () => {
    const db = await Order.openDB();
    const cart = await db.get("order", "cart");

    if (cart) {
      try {
        Order.cart = JSON.parse(cart);
        Order.render();
      } catch (e) {
        console.error(e);
        Order.cart = [];
      }
    }
  },
  save: async () => {
    const db = await Order.openDB();
    await db.put("order", JSON.stringify(Order.cart), "cart");
  },
  add: async (id) => {
    const product = await Menu.getProductById(id);
    const results = Order.cart.filter((prodInCart) => prodInCart.product.id == id);
    if (results.length == 1) {
      results[0].quantity++;
    } else {
      Order.cart.push({ product, quantity: 1 });
    }
    Order.render();
  },
  remove: (id) => {
    Order.cart = Order.cart.filter((prodInCart) => prodInCart.product.id != id);
    Order.render();
  },
  place: () => {
    alert("Your order will be ready under the number " + parseInt(Math.random() * 100));
    Order.cart = [];
    Order.render();
  },
  exportCart: async () => {
    const handle = await window.showSaveFilePicker({
      types: [
        {
          description: "JSON CoffeeMasters Cart File",
          accept: {
            "application/json": [".json", ".txt", ".cart"],
          },
        },
      ],
    });
    const file = await handle.getFile(); // for read-only
    const writable = await handle.createWritable(); // for write-only
    await writable.write(JSON.stringify(Order.cart)); // write the (current) cart as a JSON string
    await writable.close();
  },
  importCart: async () => {
    const [handle] = await window.showOpenFilePicker();
    const file = await handle.getFile(); // "handle" is basically a pointer to the file, where the permission "lives"

    try {
      const text = await file.text(); // read the file as text
      const json = JSON.parse(text); // parse the text as JSON
      console.log(json);

      if (json instanceof Array && json.length > 0) {
        // "Should" check the schema of the Object as-well, but... let's keep it simple
        Order.cart = json;
        Order.render();
      } else {
        alert("File is not a valid CoffeeMasters Cart file.");
      }
    } catch (e) {
      alert("Error reading the file");
    }
  },
  render: () => {
    Order.save(); // Save the cart to "cart" IndexedDB Object Store

    if (Order.cart.length == 0) {
      document.querySelector("#order").innerHTML = `
                <p class="empty">Your order is empty</p>
            `;
    } else {
      let html = `
                <h2>Your Order</h2>
                <ul>
            `;
      let total = 0;
      for (let prodInCart of Order.cart) {
        html += `
                    <li>
                        <p class='qty'>${prodInCart.quantity}x</p>
                        <p class='name'>${prodInCart.product.name}</p>
                        <p class='price'>$${prodInCart.product.price.toFixed(2)}</p>
                        <p class='toolbar'>
                            <span class="navlink material-symbols-outlined" onclick="Order.remove(${prodInCart.product.id})">
                                delete
                            </span>
                        </p>
                    </li>
                `;
        total += prodInCart.quantity * prodInCart.product.price;
      }
      html += `
                        <li>
                            <p class='total'>Total</p>
                            <p class='price-total'>$${total.toFixed(2)}</p>
                        </li>
                    </ul>
                     <button onclick="Order.place()">Place Order</button>
                    `;
      if (window.showOpenFilePicker) {
        html += `
                      <a class="navlink material-symbols-outlined" 
                          href="javascript:Order.importCart()" style="color: var(--primaryColor")>
                          file_upload
                      </a>
                      <a class="navlink material-symbols-outlined"  
                          href="javascript:Order.exportCart()" style="color: var(--primaryColor")>
                          file_download
                      </a>
                  `;
      }

      document.querySelector("#order").innerHTML = html;
    }
  },
};

Order.load();
window.Order = Order; // make it "public"
export default Order;
