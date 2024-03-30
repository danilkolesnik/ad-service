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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoWrapper href="/">
        <HeaderLogo src={Logo} alt="logo" />
        <HeaderCaption>Dream Job</HeaderCaption>
      </HeaderLogoWrapper>
      <HeaderMenu>
        <HeaderMenuElement>
          <HeaderIcon src={notification} alt="" />
          Notifications
        </HeaderMenuElement>
        <HeaderMenuElement>
          <HeaderIcon src={categories} alt="" />
          Categories
        </HeaderMenuElement>
        <HeaderMenuElement>
          <HeaderIcon src={vacancies} alt="" />
          Vacancies
        </HeaderMenuElement>
        <HeaderMenuElement unique>
          <HeaderIcon src={profile} alt="" />
          My profile
        </HeaderMenuElement>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
