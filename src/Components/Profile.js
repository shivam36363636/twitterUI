import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="profile__box">
        <img
          className="background__img"
          src="./Images/leave.jpg"
          alt="backgroundImg"
        />
        <div className="profile__detail">
          <div className="profile__bio">
            <img
              className="avatar__profile"
              src="./Images/asaram.jpg"
              alt="face"
            />
            <p className="user__name">Baba Kasipur Wale</p>
            <p className="social__handle">@babajanemankibaat</p>
            <p className="location">
              <ion-icon name="location-outline"></ion-icon> Kasipur, U.K
            </p>
          </div>
          <div className="follower__info">
            <div className="follower__count">
              <p>Followers</p>
              <p>5m</p>
            </div>
            <div className="follower__count">
              <p>Tweets</p>
              <p>50m</p>
            </div>
            <div className="follower__count">
              <p>Following</p>
              <p>0</p>
            </div>
          </div>
          <ion-icon
            class="profile__dots"
            name="ellipsis-horizontal-outline"
          ></ion-icon>
        </div>
      </div>
    </>
  );
}

export default Profile;
