import React from "react";

function ProductDetailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-900">
      <h1>Product Detail Header</h1>
      {children}
    </div>
  );
}

export default ProductDetailLayout;
