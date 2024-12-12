import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

function Banner() {
  const { profile } = useContext(ProfileContext);
  return (
    <div
      style={{
        display: "flex",
        // backgroundColor: "lightblue",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
        }}
      >
        Gracias por asistir a la conferencia sobre desarrollo web moderno.
        <br />
        <br />
        Espero que esto les sea de ayuda para convertirse en excelentes
        <br />
        <br />
        desarrolladores en el futuro. Muchas gracias.
        <br />
        <br />
        - Doongilsee
      </h1>
    </div>
  );
}

export default Banner;
