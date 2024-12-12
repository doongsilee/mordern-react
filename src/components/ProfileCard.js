import CatImage from "../assets/catImage.jpeg";
import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

function ProfileCard() {
  const { profile } = useContext(ProfileContext);
  return (
    <div className="card">
      <img src={CatImage} alt="Cat" width={"150px"} />
      <ul>
        <li>
          <strong>{"name : " + profile.name}</strong>
        </li>
        <li>{"age : " + profile.age}</li>
        <li>{"email : " + profile.email}</li>
      </ul>
    </div>
  );
}

export default ProfileCard;
