import { useState } from "react";

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  function themeToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      style={{
        background: darkMode ? "white" : "black",
        color: darkMode ? "black" : "white",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <button
        onClick={themeToggle}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          background: darkMode ? "#ddd" : "#444",
          color: darkMode ? "#000" : "#fff",
          fontWeight: "600",
          fontSize: "14px",
          outline: "none",
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default ThemeToggler;
