import axios from "axios";
import { useEffect, useState } from "react";
import ListGroupTitles from "../components/ListGroupTitles";

function Titles() {
  const [loading, setLoading] = useState<boolean>(true);
  const [listGlobalNews, setlistGlobalNews] = useState<string[]>([]);
  const [listCNN, setlistCNN] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setlistGlobalNews(res.data.globalTitles);
      setlistCNN(res.data.cnn);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="pt-16">
        <h1>Loading...</h1>
      </div>
    );
  else
    return (
      <div className="pt-16">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="flex flex-col">
            <ListGroupTitles items={listGlobalNews} heading="Global News" />
          </div>
          <div className="flex flex-col gap-4">
            <ListGroupTitles items={listGlobalNews} heading="CNN News" />
          </div>
        </div>
      </div>
    );
}

export default Titles;
