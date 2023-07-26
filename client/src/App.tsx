import ListGroup from "./components/ListGroup";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <ListGroup />
    </div>
  );
}

export default App;
