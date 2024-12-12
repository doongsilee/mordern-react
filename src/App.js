import "./App.css";
import { useContext } from "react";
import { ProfileProvider, ProfileContext } from "./context/profileContext";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </ProfileProvider>
    </div>
  );
}

export default App;
