import React, { useState } from "react";
import {
  InfoContainer,
  InfoWrapper,
  PhotoContainer,
  PickedPhoto,
  NameCaption,
  InfoCaption,
} from "./ProfileInformationStyles";
import plus from "../../assets/icons/photo-plus.svg";
import "./style.css";

const ProfileInformation = () => {
  const [pickedPhoto, setPickedPhoto] = useState(false);
  const changeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setPickedPhoto(photoURL);
    }
  };
  return (
    <InfoContainer>
      <PhotoContainer>
        {!pickedPhoto ? (
          <div>
            <label htmlFor="upload-photo" className="round-element"></label>
            <input
              type="file"
              name="file"
              onChange={changeHandler}
              className="round-element"
              id="upload-photo"
            />
            <img src={plus} alt="add" className="add-photo-vector"></img>
          </div>
        ) : (
          <PickedPhoto src={pickedPhoto} alt="profilePic" />
        )}
      </PhotoContainer>
      <InfoWrapper>
        <NameCaption>Javenko Vasilii Petrovich</NameCaption>
        <br />
        <InfoCaption>
          <b>Email:</b> petrovich234@gmail.com
        </InfoCaption>
        <br />
        <InfoCaption>
          <b>Phone:</b> 042 621 6641
        </InfoCaption>
        <br />
        <InfoCaption>
          <b>Country:</b> Ukraine
        </InfoCaption>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default ProfileInformation;
