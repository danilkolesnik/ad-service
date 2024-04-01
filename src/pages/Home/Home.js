import React from "react";
import Header from "../../components/Header/Header";
import {
  HomePage,
  HomeVacanciesContainer,
  HomeFiltersContainer,
} from "./HomeStyles";
import { MiddleInfoContainer } from "../MyProfile/MyProfileStyles";
import Vacancies from "./../../components/HomeVacancies/Vacancies";

const Home = () => {
  return (
    <HomePage>
      <Header></Header>
      <MiddleInfoContainer>
        <HomeVacanciesContainer>
          <Vacancies />
        </HomeVacanciesContainer>
        <HomeFiltersContainer></HomeFiltersContainer>
      </MiddleInfoContainer>
    </HomePage>
  );
};

export default Home;
