import React from "react";
// async function ProductDetailLayout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{ productId: string }>;
// }>)
//using layout props route helper
async function ProductDetailLayout(props: LayoutProps<"/product/[productId]">) {
  const { productId } = await props.params;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-900">
      <h1>Product Detail Header</h1>
      <h3> ProductId - {productId}</h3>
      {props.children}
    </div>
  );
}

export default ProductDetailLayout;
