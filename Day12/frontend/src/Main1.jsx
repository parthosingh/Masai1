import React from "react";
import BottomMain from "./BottomMain";

const Main1 = ({ name }) => {
  return (
    <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
      <h3>Main Component</h3>
      <BottomMain name={name} />
    </div>
  );
};

export default Main1;
