import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <div className="gallery__card">
        <img className="pic" src="./Images/pic1.jpg" alt="one face pic" />
        <img className="pic" src="./Images/pic2.jpg" alt="Two face pic" />
        <img className="pic" src="./Images/pic3.jpg" alt="Three face pic" />
        <img className="pic" src="./Images/pic4.jpg" alt="Four face pic" />
      </div>
    </>
  );
}

export default Gallery;
