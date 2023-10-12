import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import routes from "./routes/routes"
import { Routes } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("test");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/greetings`
      );
      setMessage(data?.message || "");
    })();
  }, []);
  return (
    <div>
    <Routes>{routes.map((value) => value)}</Routes>    
    </div>

  );
}

export default App;
