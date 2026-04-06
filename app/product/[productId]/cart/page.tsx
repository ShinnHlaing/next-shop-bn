"use client";
import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>cart</h2>
      <p>Items in cart: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add to Cart</button>
    </div>
  );
}

export default Cart;
