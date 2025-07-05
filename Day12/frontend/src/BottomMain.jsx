import React from "react";
import BottomMainRight from "./BottomMainRight";

const BottomMain = ({ name }) => {
  return (
    <div style={{ marginTop: "10px", border: "1px dashed gray", padding: "10px" }}>
      <h4>BottomMain Component</h4>
      <BottomMainRight name={name} />
    </div>
  );
};

export default BottomMain;
