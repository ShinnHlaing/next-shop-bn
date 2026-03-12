import React from "react";

function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-mist-700">
      {children}
    </div>
  );
}

export default BlogLayout;
