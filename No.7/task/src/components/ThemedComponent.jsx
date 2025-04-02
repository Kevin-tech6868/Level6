import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
          background: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
