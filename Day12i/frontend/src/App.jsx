import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import NestedComponent from "./NestedComponent";

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "40px",
    transition: "0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h2>🌗 Theme Context Example</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <NestedComponent />
    </div>
  );
}

export default App;
