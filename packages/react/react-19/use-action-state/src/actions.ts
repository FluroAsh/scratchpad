"use server";

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID");

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemID}`);
  const data: { title: string } = await res.json();
  console.log(data);

  return data.title;
}
