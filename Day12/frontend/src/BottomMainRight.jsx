import React from "react";

const BottomMainRight = ({ name }) => {
  return (
    <div style={{ marginTop: "10px", background: "#f9f9f9", padding: "10px" }}>
      <strong>BottomMainRight Component:</strong> Hello, {name || "Guest"}!
    </div>
  );
};

export default BottomMainRight;
