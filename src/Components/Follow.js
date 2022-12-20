import React from "react";
import "./Follow.css";

function Follow() {
  return (
    <>
      <div className="trend__box">
        <a href="ww" className="showbtn">
          Show more
        </a>
        <div className="trends__tab">
          <p>Trends for you</p>
          <ion-icon class="icon" name="refresh-outline"></ion-icon>
        </div>
        <div className="trends follow">
          <div className="profile__pic">
            <img className="avatar" src="./Images/netlogo.jpg" alt="face" />
            <div className="hashtag">
              <p className="hashtags__text">Netflix</p>
              <p className="hashtags__number">@netflix</p>
            </div>
          </div>

          <button className="follow__btn">Follow</button>
        </div>

        <div className="trends follow">
          <div className="profile__pic">
            <img className="avatar" src="./Images/elon.jpg" alt="face" />
            <div className="hashtag">
              <p className="hashtags__text">Netflix</p>
              <p className="hashtags__number">@netflix</p>
            </div>
          </div>

          <button className="follow__btn">Follow</button>
        </div>

        <div className="trends follow">
          <div className="profile__pic">
            <img className="avatar" src="./Images/virat.jpg" alt="face" />
            <div className="hashtag">
              <p className="hashtags__text">Netflix</p>
              <p className="hashtags__number">@netflix</p>
            </div>
          </div>

          <button className="follow__btn">Follow</button>
        </div>
      </div>
    </>
  );
}

export default Follow;
