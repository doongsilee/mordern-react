import React from "react";

function GuessNumberButton() {
  const handleClick = () => {
    // Generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Get user input using prompt
    const userGuess = prompt("Guess the number between 1 and 3:");

    // Check if the user's guess matches the random number
    if (parseInt(userGuess) === randomNumber) {
      alert("🎉 Correct! The number was " + randomNumber);
    } else {
      alert("❌ Wrong! The number was " + randomNumber);
    }
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      Guess the number between 1 and 3
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default GuessNumberButton;
