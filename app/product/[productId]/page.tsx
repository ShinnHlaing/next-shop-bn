"use client";
//import { use } from "react"; //use in client component
import { useParams } from "next/navigation";

// function ProductId(props: PageProps<"/product/[productId]">) {
//   //const { productId } = props.params;
//   const { productId } = use(props.params);

//   return <div>ProductId - {productId}</div>;
// }

function ProductId() {
  //const { productId } = props.params;
  const { productId } = useParams<{ productId: string }>();

  return <div>ProductId - {productId}</div>;
}

export default ProductId;
