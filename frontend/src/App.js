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
      <p>This is the Basic frontend setup</p>

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
