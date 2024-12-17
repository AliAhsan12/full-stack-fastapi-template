import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the FastAPI backend
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React + FastAPI</h1>
      <p>Message from Backend: {message || "Loading...."}</p>
    </div>
  );
}

export default App;
