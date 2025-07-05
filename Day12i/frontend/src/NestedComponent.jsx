import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const NestedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    borderRadius: "8px",
  };

  return <div style={boxStyle}>I follow the {theme} theme!</div>;
};

export default NestedComponent;
