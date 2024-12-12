import React, { useState } from "react";

const ProfileContext = React.createContext();

const ProfileProvider = ({ children }) => {
  // const children = props.children;

  const [profile, setProfile] = useState({
    name: "Hyunwoo Lee",
    age: "Top Secret",
    email: "ryanleehw@gmail.com",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider, ProfileContext };
