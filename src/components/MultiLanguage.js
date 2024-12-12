import React from "react";

function MultiLanguageText({ language, messages }) {
  // Retrieve the message based on the language prop
  const message = messages[language] || "Language not supported";

  return (
    <div style={styles.container}>
      <p>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "10px",
    fontSize: "24px",
    fontFamily: "SF Mono, monospace",
    color: "white",
  },
};

// // Example usage:
// const messages = {
//   en: "Hello, World!",
//   fr: "Bonjour le monde!",
// };

// // same!
// const message1 = {}
// message1.en = "Hello, World!";
// message1.fr = "Bonjour le monde!";

//  <MultiLanguageText language={"en"} messages={message1} />;


export default MultiLanguageText;
