import React from "react";
import "./Trends.css";

function Trends() {
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
        <div className="trends">
          <div className="hashtag">
            <p className="hashtags__text">#girls</p>
            <p className="hashtags__number">5.5m tweets</p>
          </div>
          <ion-icon class="icon" name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div className="trends">
          <div className="hashtag">
            <p className="hashtags__text">#DKPOPA</p>
            <p className="hashtags__number">4.5m tweets</p>
          </div>
          <ion-icon class="icon" name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div className="trends">
          <div className="hashtag">
            <p className="hashtags__text">#yezzy</p>
            <p className="hashtags__number">1m tweets</p>
          </div>
          <ion-icon class="icon" name="ellipsis-horizontal-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}

export default Trends;
