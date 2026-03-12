import React from "react";

async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <div>ProductId - {productId}</div>;
}

export default ProductId;
