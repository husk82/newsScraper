import axios from "axios";
import { useEffect, useState } from "react";

function ListGroup() {
  const [loading, setLoading] = useState<boolean>(true)
  const [listOfPosts, setListOfPosts] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setListOfPosts(res.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false)
    }
  };

    useEffect(() => {
    fetchPosts();
  }, []);


  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (loading) return <h1>Loading...</h1>
  else return (
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
