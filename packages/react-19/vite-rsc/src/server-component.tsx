type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

async function fetchProducts({ limit = 20 }: { limit: number }): Promise<Product[]> {
  const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  const data = await response.json();
  return data;
}

export async function ServerComponent() {
  const products = await fetchProducts({ limit: 10 });
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}
