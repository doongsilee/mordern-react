import React from "react";

function Greeting() {
  // Get the current hour
  const currentHour = new Date().getHours();

  console.log(currentHour);

  // Determine the greeting using a ternary operator
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div style={styles.container}>
      <h1>{greeting}</h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    color: 'white'
  },
};

export default Greeting;
