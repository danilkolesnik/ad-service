import React from "react";
import {
  VacancySearchBar,
  SearchInput,
  SearchButton,
  HomeVacancyCard,
  VacancyCardCaption,
  VacancyCardPrice,
  VacancyCardCompany,
  CardSecondaryInfoWrapper,
  VacancyIcon,
  CardDecorativeLine,
  VacancyDescription,
  DescriptionWrapper,
  СardBottomContainer,
  CardBottomButtonWrapper,
  BottomActionsContainer,
} from "./VacanciesStyle";
import salary from "../../assets/icons/salary.svg";
import company from "../../assets/icons/company.svg";
import gotowork from "../../assets/icons/gotowork.svg";
import house from "../../assets/icons/house.svg";
import heartUnfilled from "../../assets/icons/heart-unfilled.svg";
// import heartFilled from "../../assets/icons/heart-filled.png";
import hide from "../../assets/icons/hided.svg";

const Vacancies = () => {
  const shortenDescription = (text) => {
    if (text.length <= 240) {
      return text;
    } else {
      return text.slice(0, 237) + "...";
    }
  };

  return (
    <>
      <VacancySearchBar>
        <SearchInput placeholder="Vacancy..."></SearchInput>
        <SearchButton>Find!</SearchButton>
      </VacancySearchBar>

      <HomeVacancyCard>
        <VacancyCardCaption>Front-End Developer</VacancyCardCaption>
        <CardSecondaryInfoWrapper>
          <VacancyIcon src={salary} alt="salary" />
          <VacancyCardPrice>1500 - 2000 $</VacancyCardPrice>
        </CardSecondaryInfoWrapper>
        <CardSecondaryInfoWrapper>
          <VacancyIcon src={company} alt="salary" />
          <VacancyCardCompany>HighTec Commerce</VacancyCardCompany>
        </CardSecondaryInfoWrapper>
        <CardSecondaryInfoWrapper>
          <VacancyIcon src={gotowork} alt="salary" />
          <VacancyCardCompany>Locally/in the office</VacancyCardCompany>
        </CardSecondaryInfoWrapper>
        <CardDecorativeLine />
        <DescriptionWrapper>
          <VacancyDescription>
            {shortenDescription(`We are WOP lab!
              A young, ambitious and promising company in the IT field. Our story began in 2017.
              What do we do? We help in the development of businesses and startups in the European and US markets. We already have more than 200 successful projects to our credit, and we are not going to stop.
              What are we cool about? First — Technologies! We listen to the idea and realize it with the help of modern and innovative solutions. Secondly, Web development! We help in the implementation of web projects with all the details in the new site. Thirdly — Technical support! We ensure a long and healthy life for our projects. Our website: https://wop-lab.company/
              We are actively looking for a Front end developer (Vue.js).
              If you want to develop and get better every day, then you should definitely come to us!`)}
          </VacancyDescription>
        </DescriptionWrapper>
        <СardBottomContainer>
          <VacancyDescription $date>2 days ago</VacancyDescription>

          <BottomActionsContainer>
            <CardBottomButtonWrapper>
              <VacancyIcon src={hide} alt="save" />
              <VacancyCardCompany>Hide</VacancyCardCompany>
            </CardBottomButtonWrapper>
            <CardBottomButtonWrapper>
              <VacancyIcon src={heartUnfilled} alt="save" />
              <VacancyCardCompany>Save</VacancyCardCompany>
            </CardBottomButtonWrapper>
          </BottomActionsContainer>
        </СardBottomContainer>
      </HomeVacancyCard>

      <HomeVacancyCard>
        <VacancyCardCaption>
          Strong Middle Full-Stack Developer
        </VacancyCardCaption>
        <CardSecondaryInfoWrapper>
          <VacancyIcon src={salary} alt="salary" />
          <VacancyCardPrice>2100 - 2300 $</VacancyCardPrice>
        </CardSecondaryInfoWrapper>
        <CardSecondaryInfoWrapper>
          <VacancyIcon src={company} alt="salary" />
          <VacancyCardCompany>SLAN</VacancyCardCompany>
        </CardSecondaryInfoWrapper>
        <CardSecondaryInfoWrapper>
          <VacancyIcon src={house} alt="salary" />
          <VacancyCardCompany>Remote</VacancyCardCompany>
        </CardSecondaryInfoWrapper>
        <CardDecorativeLine />
        <DescriptionWrapper>
          <VacancyDescription>
            {shortenDescription(`We are looking for a strong Middle/Senior Shopify Full-Stack
            developer to join our team and help us create innovative and
            efficient solutions for our clients using the Shopify platform.
            Required skills At least 3 years of solid experience developing the
            Shopify/ Shopify Plus platform and maintaining it Fundamental
            Skills: HTML/CSS JavaScript Responsive Design Cross-Browser
            Compatibility Version Control/Git Shopify-Specific Skills: Liquid
            Templating Language Shopify Theme Development and Customization
            Shopify APIs (qraphql, storefront, rest) Understanding of Shopify’s
            Admin and Theme Settings Headless Commerce Skills: Understanding of
            Headless Architecture API Consumption JAMstack (JavaScript, APIs,
            and Markup) Hydrogen and Oxygen React Skills: React Basics Hooks
            Context API/Redux for State Management React Router Next.js Other
            Desirable Skills: CSS Preprocessing SEO Best Practices Accessibility
            Performance Optimization Shopify certifications will be a plus Good
            communication skills in both written and verbal English
            (Intermediate and higher)`)}
          </VacancyDescription>
        </DescriptionWrapper>
        <СardBottomContainer>
          <VacancyDescription $date>6 days ago</VacancyDescription>

          <BottomActionsContainer>
            <CardBottomButtonWrapper>
              <VacancyIcon src={hide} alt="save" />
              <VacancyCardCompany>Hide</VacancyCardCompany>
            </CardBottomButtonWrapper>
            <CardBottomButtonWrapper>
              <VacancyIcon src={heartUnfilled} alt="save" />
              <VacancyCardCompany>Save</VacancyCardCompany>
            </CardBottomButtonWrapper>
          </BottomActionsContainer>
        </СardBottomContainer>
      </HomeVacancyCard>
    </>
  );
};

export default Vacancies;
