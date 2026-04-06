"use client";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Items in cart: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add to Cart</button>
    </>
  );
}

export default Count;
