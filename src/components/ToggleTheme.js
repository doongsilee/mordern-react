import React, { useState } from "react";

function ToggleTheme() {
  // State to track the mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the mode
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Styles for light and dark mode
  const styles = {
    container: {
      backgroundColor: isDarkMode ? "#000000" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: isDarkMode ? "#ffffff" : "#000000",
      color: isDarkMode ? "#000000" : "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button style={styles.button} onClick={toggleMode}>
        Toggle Mode
      </button>
    </div>
  );
}

export default ToggleTheme;
