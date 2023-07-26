import axios from "axios";
import { useEffect, useState } from "react";

function ListGroup() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

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
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
