import styled from "styled-components";
import { font_cera_bold, font_cera } from "../../assets/style/fonts.variables";
// import { mainColor } from "../../assets/style/colors.variables";

const ProfilePage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MiddleInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3% 10%;
`;

const ProfileLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const ProfileRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

const ProfileBlock = styled.section`
  background-color: #fff;
  box-shadow: rgba(53, 54, 78, 0.25) 0px 0px 10px;
  box-shadow: ${(props) =>
    props.$actions ? "none" : "rgba(53, 54, 78, 0.25) 0px 0px 10px"};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 10px;
`;

const ProfileWindowCaption = styled.h1`
  color: black;
  font-family: ${font_cera_bold};
  font-size: 25px;
  text-align: center;
  padding: 15px;
`;

const ProfileActionCard = styled.a`
  display: flex;
  align-items: center;
  box-shadow: rgba(53, 54, 78, 0.25) 0px 0px 10px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    ${(props) => console.log(props)}
    box-shadow: ${(props) =>
      props.$logout
        ? "rgba(226, 3, 3, 1) 0px 0px 5px"
        : "rgba(78, 62, 222, 1) 0px 0px 5px"};
  }
`;

const CardText = styled.p`
  color: #242424;
  font-size: ${(props) => (props.$logout ? "19px" : "22px")};
  font-family: ${(props) => (props.$logout ? font_cera_bold : font_cera)};
  padding-left: 10px;
`;

const CardIcon = styled.img`
  max-width: 35px;
  margin-left: 20px;
`;

export {
  ProfilePage,
  MiddleInfoContainer,
  ProfileBlock,
  ProfileLeftContainer,
  ProfileRightContainer,
  ProfileWindowCaption,
  ProfileActionCard,
  CardText,
  CardIcon,
};
