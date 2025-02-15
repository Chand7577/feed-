import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cardbody from "./components/Cardbody";

function App() {
  const [data, updateData] = useState([]);
  useEffect(() => {
    // API CALL

    axios
      .get("https://randomuser.me/api?results=10")
      .then((response) => {
        const data = response.data.results;
        updateData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect will render only one time
  return (
    <div className="App">
      <h1
        style={{
          color: "rgba(255, 255, 255, 0.87);",
          boxShadow: "0px 4px 10px rgba(98, 123, 199, 0.87)",
          position: "sticky",
          top: "0",
        }}
      >
        Welcome to simple feed in{" "}
        <span style={{ color: "darkblue" }}>React </span>
        by Amrit
      </h1>
      {data.map((user, index) => {
        return <Cardbody user={user} key={index} />;
      })}
    </div>
  );
}

export default App;
