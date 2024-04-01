import styled from "styled-components";
import { font_cera_bold } from "../../assets/style/fonts.variables";
import { fontColor } from "../../assets/style/colors.variables";

const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MiddleHomeContainer = styled.div`
  display: flex;
  margin: 3% 10%;
  gap: 5%;
`;

const HomeVacanciesContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 20px;
  width: 50%;
`;

const HomeFiltersContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #fff;
  box-shadow: rgba(53, 54, 78, 0.25) 0px 0px 10px;
  border-radius: 30px;
  height: ${(props) => (props.$opened ? "50vh" : "55px")};
  overflow: hidden;
`;

const FiltersHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 55px;
  flex-shrink: 0;
  align-items: center;
  cursor: pointer;
`;

const HomeFiltersCaption = styled.h1`
  font-family: ${font_cera_bold};
  color: ${fontColor};
  font-size: 20px;
  text-align: center;
`;

const HomeFiltersIcon = styled.img`
  max-width: 25px;
  position: absolute;
  right: 20px;
  ${(props) => props.$opened && "transform: rotate(180deg)"}
`;

const FiltersOptions = styled.ul`
  margin-top: 20px;
`;

export {
  HomePage,
  MiddleHomeContainer,
  HomeVacanciesContainer,
  HomeFiltersContainer,
  FiltersHeaderWrapper,
  HomeFiltersCaption,
  HomeFiltersIcon,
  FiltersOptions,
};
