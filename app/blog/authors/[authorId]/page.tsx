import React from "react";

async function AuthorDetail({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  const { authorId } = await params;
  return <div className="text-bold">AuthorDetail - {authorId}</div>;
}

export default AuthorDetail;
