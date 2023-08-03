import axios from "axios";
import { useEffect, useState } from "react";

function AllTitlesGroup() {
  const [loading, setLoading] = useState<boolean>(true);
  const [listOfPosts, setListOfPosts] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setListOfPosts(res.data.globalTitles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  else
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">List of Posts</h1>
        <div className="grid gap-4 grid-cols-2">
          {listOfPosts.map((item) => (
            <p className="text-gray-800">{item}</p>
          ))}
        </div>
      </div>
    );
}

export default AllTitlesGroup;
