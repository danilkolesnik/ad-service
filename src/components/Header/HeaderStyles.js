import styled from "styled-components";
import { font_cera, font_cera_bold } from "../../assets/style/fonts.variables";
import { mainColor } from "../../assets/style/colors.variables";

const HeaderContainer = styled.div`
  background-color: ${mainColor};
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

const HeaderLogo = styled.img`
  max-width: 50px;
  user-select: none;
`;

const HeaderCaption = styled.h1`
  font-family: ${font_cera_bold};
  margin-top: 3px;
`;

const HeaderIcon = styled.img`
  max-width: 20px;
  margin-right: 5px;
`;

const HeaderLogoWrapper = styled.a`
  display: flex;
  gap: 10px;
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
  font-size: 20px;
  color: ${(props) => (props.unique ? mainColor : "#fff")};
  background-color: ${(props) => (props.unique ? "#fff" : mainColor)};
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
`;

// ${(props) => (props.unique ? "25px" : "20px")};

export {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuElement,
  HeaderLogoWrapper,
  HeaderCaption,
  HeaderLogo,
  HeaderIcon,
};
