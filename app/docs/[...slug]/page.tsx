import React from "react";

async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <>
      <h1>
        Docs Page -
        {slug.length === 2 ? (
          <p>
            Title - {slug[0]} & Subtitle - {slug[1]}
          </p>
        ) : (
          <p>Title - {slug[0]}</p>
        )}
      </h1>
    </>
  );
}

export default Docs;
