import styled from "styled-components";
import { font_cera_bold, font_cera } from "../../assets/style/fonts.variables";

const InfoContainer = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
`;

const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px #a8a8a8 dashed;
  background-color: #f5f5f5;
  position: relative;
`;

const PickedPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameCaption = styled.h3`
  font-family: ${font_cera_bold};
  font-size: 25px;
  color: #242424;
`;

const InfoCaption = styled.p`
  font-family: ${font_cera};
  font-size: 20px;
  color: #242424;
`;

export {
  InfoContainer,
  InfoWrapper,
  PhotoContainer,
  PickedPhoto,
  NameCaption,
  InfoCaption,
};
