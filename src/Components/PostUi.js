import React from "react";
import "./PostUi.css";

function PostUi({ imageAdd }) {
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
            <div className="user__info">
              <div>
                <p className="username">
                  <strong>Montonika</strong> @montonika
                </p>
                <p className="date">26 Dec</p>
              </div>
              <ion-icon
                class="icon"
                name="ellipsis-horizontal-outline"
              ></ion-icon>
            </div>
            <p className="post__text">
              lore jshdkjashd kjashdkashdsak sajhdkasjhdkasjdh jakshdkjashdkas
              hjkashdksajhd sadhaskdh jsdaksjh kajsdhaskjdh sadjhkas asjdh
              asshjd sdh asdsjd hssjd hssd sjdh ssd sjhd ssjd hssjdh ssjd h
            </p>
            {imageAdd ? <img src={imageAdd} className='post__img' alt="Post" /> : ""}
            <div className="postform__media">
              <div className="media__icon">
                <ion-icon class="icon" name="heart-outline"></ion-icon>
                <ion-icon class="icon" name="git-compare-outline"></ion-icon>
                <ion-icon class="icon" name="arrow-redo-outline"></ion-icon>
                <p className="media__icon__like">9.2k</p>
              </div>
              <div className="media__btn">
                <p className="media__icon__comment">50 comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostUi;
