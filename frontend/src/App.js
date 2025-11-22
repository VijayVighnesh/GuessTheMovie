import React, { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleButtonClick = async () => {
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("http://127.0.0.1:5001/api/message");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMsg(data.message || "No message field in response");
    } catch (error) {
      console.error("Fetch error:", error);
      setErr("Failed to fetch from backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <p className="Title1"> Guess It! </p>

      <p className="Description1">
        Guess Today's Mystery Telugu movie in 5 chances
      </p>

      <div className="InfoContainer">
        <div className="InfoText">
          <p> A new telugu movie to guess every day with challenging hints</p>
          <p>Try to guess the movie with as few hints as possible </p>
          <p>Share your results with friends</p>
        </div>
      </div>

      <div className="ButtonContainer">
        <button className="StartButton"> Start Game </button>
      </div>

      <div>
        <button onClick={handleButtonClick} disabled={loading}>
          {loading ? "Loading..." : "Click Me"}
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        {err && <div style={{ color: "red" }}>{err}</div>}
        {msg && <div>Response: {msg}</div>}
      </div>
    </div>
  );
}

export default App;
