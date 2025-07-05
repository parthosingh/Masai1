import React, { useState } from "react";
import Main1 from "./Main";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Prop Drilling Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Main1 name={name} />
    </div>
  );
};

export default App;
