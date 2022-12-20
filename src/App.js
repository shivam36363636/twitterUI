import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Postform from "./Components/Postform";
import PostUi from "./Components/PostUi";
import Trends from "./Components/Trends";
import Gallery from "./Components/Gallery";
import Follow from "./Components/Follow.js";
import Profile from "./Components/Profile";
function App() {
  return (
    <div className="App">
      <div className="first">
        <Navbar />
      </div>
      <div className="second">
        <Trends />
        <Follow />
      </div>
      <div className="third">
        <Postform />
        <PostUi />
        <PostUi imageAdd="./Images/pic1.jpg" />
        <PostUi imageAdd="./Images/pic2.jpg" />
        <PostUi imageAdd="./Images/pic3.jpg" />
        <PostUi imageAdd="./Images/pic4.jpg" />
      </div>
      <div className="four">
        <Profile />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
