import React from "react";

function MyFoodCard(props) {

  const {foodName, foodDescription, imageUrl } = props;

  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={foodName} style={styles.image} />
      <h2 style={styles.title}>{foodName}</h2>
      <p style={styles.description}>{foodDescription}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "3px solid #aaa",
    borderRadius: "10px",
    padding: "16px",
    width: "250px",
    textAlign: "center",
    margin: "16px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "1.5rem",
    margin: "12px 0",
    color: "#fff",
  },
  description: {
    fontSize: "1rem",
    color: "#ddd",
    marginBottom: "16px",
  },
};

export default MyFoodCard;
