import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderCaption,
  HeaderLogoWrapper,
  HeaderMenuElement,
  HeaderIcon,
} from "./HeaderStyles";
import Logo from "../../assets/icons/logo.png";
import notification from "../../assets/icons/message.svg";
import categories from "../../assets/icons/categories.svg";
import vacancies from "../../assets/icons/vacancies.svg";
import profile from "../../assets/icons/profile.svg";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Извлечение конечного пути
  const extractFinalPath = () => {
    const parts = pathname.split("/");
    return parts[parts.length - 1];
  };

  const currentPath = extractFinalPath();

  return (
    <HeaderContainer>
      <HeaderLogoWrapper href="/">
        <HeaderLogo src={Logo} alt="logo" />
        <HeaderCaption>Dream Job</HeaderCaption>
      </HeaderLogoWrapper>
      <HeaderMenu>
        <NavLink to="/notifications">
          <HeaderMenuElement>
            <HeaderIcon src={notification} alt="" />
            Notifications
          </HeaderMenuElement>
        </NavLink>
        <NavLink to="/categories">
          <HeaderMenuElement>
            <HeaderIcon src={categories} alt="" />
            Сhat
          </HeaderMenuElement>
        </NavLink>
        <NavLink to="/vacancies">
          <HeaderMenuElement>
            <HeaderIcon src={vacancies} alt="" />
            Vacancies
          </HeaderMenuElement>
        </NavLink>
        <NavLink to="/profile">
          <HeaderMenuElement $unique $path={currentPath}>
            <HeaderIcon src={profile} alt="" />
            My profile
          </HeaderMenuElement>
        </NavLink>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
