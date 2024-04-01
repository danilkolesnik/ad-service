import React from "react";
import Header from "../../components/Header/Header";
import ProfileInformation from "../../components/ProfileInformation/ProfileInformation";
import {
  ProfilePage,
  MiddleInfoContainer,
  ProfileBlock,
  ProfileLeftContainer,
  ProfileRightContainer,
  ProfileWindowCaption,
  ProfileActionCard,
  CardText,
  CardIcon,
} from "./MyProfileStyles";
import heart from "../../assets/icons/heart.svg";
import history from "../../assets/icons/history.svg";
import hided from "../../assets/icons/hided.svg";
import savedSearch from "../../assets/icons/savedSearch.svg";
import logout from "../../assets/icons/logout.svg";

const MyProfile = () => {
  return (
    <ProfilePage>
      <Header />
      <MiddleInfoContainer>
        <ProfileLeftContainer>
          <ProfileWindowCaption>My information</ProfileWindowCaption>
          <ProfileBlock>
            <ProfileInformation />
          </ProfileBlock>
        </ProfileLeftContainer>
        <ProfileRightContainer>
          <ProfileWindowCaption>Activity</ProfileWindowCaption>
          <ProfileBlock $actions>
            <ProfileActionCard>
              <CardIcon src={history} alt="heart" />
              <CardText>Responce history</CardText>
            </ProfileActionCard>
            <ProfileActionCard>
              <CardIcon src={heart} alt="heart" />
              <CardText>Saved vacancies</CardText>
            </ProfileActionCard>
            <ProfileActionCard>
              <CardIcon src={savedSearch} alt="heart" />
              <CardText>Saved searches</CardText>
            </ProfileActionCard>
            <ProfileActionCard>
              <CardIcon src={hided} alt="heart" />
              <CardText>Hided vacancies</CardText>
            </ProfileActionCard>
            <ProfileActionCard $logout>
              <CardIcon src={logout} alt="heart" />
              <CardText $logout>Log out</CardText>
            </ProfileActionCard>
          </ProfileBlock>
        </ProfileRightContainer>
      </MiddleInfoContainer>
    </ProfilePage>
  );
};

export default MyProfile;
