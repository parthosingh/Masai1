// ThemeApp.jsx
import React, { useState, useEffect } from "react";

// Reusable ThemedBox component
const ThemedBox = ({ theme, children }) => {
  const boxStyle = {
    backgroundColor: theme === "dark" ? "#333" : "#f2f2f2",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    transition: "all 0.3s ease"
  };

  return <div style={boxStyle}>{children}</div>;
};

// Main App component
const ThemeApp = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Store theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const appStyle = {
    backgroundColor: theme === "dark" ? "#121212" : "#eaeaea",
    minHeight: "100vh",
    padding: "40px",
    transition: "background 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <ThemedBox theme={theme}>Box 1 - Reusable component</ThemedBox>
      <ThemedBox theme={theme}>Box 2 - Same styling logic</ThemedBox>
      <ThemedBox theme={theme}>Box 3 - Based on theme: {theme}</ThemedBox>
    </div>
  );
};

export default ThemeApp;
