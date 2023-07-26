import { useState } from "react";

type Post = {
  headline: string;
  link: string;
};

function ListGroup({ posts }: { posts: Post[] }) {
  const [listOfPosts] = useState(posts ?? []);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {listOfPosts.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active ?"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item?.headline}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
