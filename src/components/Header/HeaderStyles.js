import styled from "styled-components";
import { font_cera_bold } from "../../assets/style/fonts.variables";
import { mainColor } from "../../assets/style/colors.variables";

const HeaderContainer = styled.header`
  background-color: ${mainColor};
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  user-select: none;
`;

const HeaderLogo = styled.img`
  max-width: 45px;
`;

const HeaderCaption = styled.h1`
  font-family: ${font_cera_bold};
  font-size: 30px;
  margin-top: 3px;
`;

const HeaderIcon = styled.img`
  max-width: 18px;
  margin-right: 5px;
`;

const HeaderLogoWrapper = styled.a`
  display: flex;
  gap: 5px;
  color: #fff;
  text-decoration: none;
`;

const HeaderMenu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;
`;

const HeaderMenuElement = styled.li`
  display: flex;
  align-items: center;
  font-family: ${font_cera_bold};
  font-size: 18px;
  color: ${(props) => (props.$unique ? mainColor : "#fff")};
  background-color: ${(props) => (props.$unique ? "#fff" : mainColor)};
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  display: ${(props) => (props.$path === "profile" ? "none" : "block")};
`;

export {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuElement,
  HeaderLogoWrapper,
  HeaderCaption,
  HeaderLogo,
  HeaderIcon,
};
