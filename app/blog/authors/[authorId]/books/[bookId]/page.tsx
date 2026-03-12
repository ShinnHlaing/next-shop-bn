import React from "react";

async function BookId({
  params,
}: {
  params: Promise<{ bookId: string; authorId: string }>;
}) {
  const { bookId, authorId } = await params;
  return (
    <div>
      BookId : {bookId} <br /> AuthorId : {authorId}
    </div>
  );
}

export default BookId;
