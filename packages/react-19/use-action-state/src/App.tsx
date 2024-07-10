import { useActionState } from "react";
import { addToCart } from "./actions.js";

function AddToCartForm({ itemID, itemTitle }: { itemID: string; itemTitle: string }) {
  const [title, formAction, isPending] = useActionState(addToCart, null);

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit" disabled={isPending}>
        Add to Cart
      </button>
      {isPending ? "Loading..." : title}
    </form>
  );
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </>
  );
}
