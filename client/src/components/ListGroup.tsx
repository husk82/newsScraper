import axios from "axios";
import { useEffect, useState } from "react";

function ListGroup() {
  const [loading, setLoading] = useState<boolean>(true)
  const [listOfPosts, setListOfPosts] = useState<{similarity: number, title1: string, title2: string}[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setListOfPosts(res.data);
      console.log(res.data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false)
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
          {listOfPosts.map((item, index) => (
            <div
              className="flex bg-white p-2 rounded shadow-sm"
              key={index}
            >
              <div className="mr-4">
                <h2 className="text-lg font-semibold text-blue-600">
                  Global News
                </h2>
                <p className="text-gray-800">{item.title1}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-red-600">
                  CNN
                </h2>
                <p className="text-gray-800">{item.title2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ListGroup;
