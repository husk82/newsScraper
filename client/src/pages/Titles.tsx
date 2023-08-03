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

  if (loading) return <h1>Loading...</h1>;
  else
    return (
      <>
        <ListGroupTitles items={listGlobalNews} heading="Global News" />
        <ListGroupTitles items={listGlobalNews} heading="CNN News" />
      </>
    );
}

export default Titles;
