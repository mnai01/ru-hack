import React from "react";
import Header from "./components/Header/Header";
import UserInfo from "./components/UserInfo/userinfo";
import LandingPage from "./components/LandingPage/LandingPage";
import SearchPage from "./components/SearchPage/SearchPage";
import UserTile from "./components/UserTiles/UserTile/UserTile";
function App() {
  return (
    <div className="App">
      <Header />
      <UserTile />
    </div>
  );
}

export default App;
