import React from "react";
import "./Postform.css";

function Postform() {
  return (
    <>
      <div className="postform">
        <div className="postform__input">
          <img
            className="face__image"
            src="./Images/face.jpg"
            alt="Face of a baby"
          />
          <div className="input__field">
            <input
              type="text"
              className="input__form"
              placeholder="What's Happening ?"
            />
            <div className="postform__media">
              <div className="media__icon">
                <ion-icon class="icon" name="images-outline"></ion-icon>
                <ion-icon class="icon" name="play-circle-outline"></ion-icon>
                <ion-icon class="icon" name="logo-closed-captioning"></ion-icon>
                <ion-icon class="icon" name="list-outline"></ion-icon>
              </div>
              <div className="media__btn">
                <ion-icon class="icon" name="happy-outline"></ion-icon>
                <button className="tweet__btn">Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postform;
