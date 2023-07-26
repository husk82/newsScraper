import ListGroup from "./components/ListGroup";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Post = {
  headline: string;
  link: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((response: AxiosResponse<Post[]>) => {
      setPosts([...response.data]);
    });
  }, []);

  return (
    <div>
      <ListGroup posts={posts} />
    </div>
  );
}

export default App;

