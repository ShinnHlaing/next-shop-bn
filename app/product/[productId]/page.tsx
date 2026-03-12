import React from "react";
//using pageprops
async function ProductId(props: PageProps<"/product/[productId]">) {
  const { productId } = await props.params;
  return <div>ProductId - {productId}</div>;
}

export default ProductId;
