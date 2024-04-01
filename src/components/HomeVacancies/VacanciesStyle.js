import styled from "styled-components";
import { font_cera_bold, font_cera } from "../../assets/style/fonts.variables";
import {
  mainColor,
  fontColor,
  hoverColor,
} from "../../assets/style/colors.variables";

const HomeVacancyCard = styled.article`
  background-color: #fff;
  box-shadow: rgba(53, 54, 78, 0.25) 0px 0px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 4%;
  cursor: pointer;
`;

const VacancyCardCaption = styled.h1`
  font-family: ${font_cera_bold};
  font-size: 38px;
  color: ${fontColor};
  padding-bottom: 5px;
`;

const CardSecondaryInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
`;

const DescriptionWrapper = styled.article`
  height: 85px;
  overflow: hidden;
  margin-top: 10px;
`;

const VacancyDescription = styled.p`
  font-family: ${(props) => (props.$date ? font_cera_bold : font_cera)};
  ${(props) => (props.$date ? "" : "padding-top: 10px;")}
  font-size: ${(props) => (props.$date ? "18px" : "20px")};
  color: ${fontColor};
  opacity: 0.9;
`;

const VacancyCardPrice = styled.h1`
  font-family: ${font_cera_bold};
  font-size: 20px;
  color: ${fontColor};
`;

const VacancyCardCompany = styled.h1`
  font-family: ${font_cera_bold};
  font-size: 17px;
  color: ${fontColor};
  opacity: 0.8;
`;

const CardDecorativeLine = styled.span`
  background-color: ${mainColor};
  height: 1px;
  width: 100%;
  margin-top: 20px;
`;

const VacancyIcon = styled.img`
  max-width: 25px;
  user-select: none;
`;

const СardBottomContainer = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
`;

const BottomActionsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const CardBottomButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
  padding: 8px;
  border-radius: 15px;
  &:hover {
    background-color: ${hoverColor};
  }
`;

const VacancySearchBar = styled.section`
  background-color: #fff;
  box-shadow: rgba(53, 54, 78, 0.25) 0px 0px 10px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0% 2% 0% 3%;
`;

const SearchInput = styled.input`
  font-family: ${font_cera};
  color: ${fontColor};
  font-size: 17px;
  border: none;
  width: 100%;
`;

const SearchButton = styled.button`
  font-family: ${font_cera_bold};
  color: ${fontColor};
  font-size: 17px;
  background-color: #ed1a41;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 0px 15px;
  height: 42px;
`;

export {
  VacancySearchBar,
  SearchInput,
  SearchButton,
  HomeVacancyCard,
  VacancyCardCaption,
  CardSecondaryInfoWrapper,
  VacancyCardPrice,
  VacancyCardCompany,
  VacancyIcon,
  CardDecorativeLine,
  DescriptionWrapper,
  VacancyDescription,
  СardBottomContainer,
  CardBottomButtonWrapper,
  BottomActionsContainer,
};
