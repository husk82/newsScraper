import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroupTitles({ items, heading }: Props) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{heading}</h1>
      <div className="grid gap-4 grid-cols-2">
        {items.map((item) => (
          <p className="text-gray-800">{item}</p>
        ))}
      </div>
    </div>
  );
}

export default ListGroupTitles;
