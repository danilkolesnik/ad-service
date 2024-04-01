import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  HomePage,
  MiddleHomeContainer,
  HomeVacanciesContainer,
  HomeFiltersContainer,
  FiltersHeaderWrapper,
  HomeFiltersCaption,
  HomeFiltersIcon,
  FiltersOptions,
} from "./HomeStyles";
import Vacancies from "./../../components/HomeVacancies/Vacancies";
import arrow from "../../assets/icons/expand-arrow.svg";

const Home = () => {
  //todo: redux saving
  const [isFilterOpened, setFilterOpened] = useState(false);

  return (
    <HomePage>
      <Header></Header>
      <MiddleHomeContainer>
        <HomeVacanciesContainer>
          <Vacancies />
        </HomeVacanciesContainer>
        <HomeFiltersContainer $opened={isFilterOpened}>
          <FiltersHeaderWrapper
            onClick={() => setFilterOpened(!isFilterOpened)}
          >
            <HomeFiltersCaption>Filters</HomeFiltersCaption>
            <HomeFiltersIcon
              $opened={isFilterOpened}
              src={arrow}
              alt="expand"
            />
          </FiltersHeaderWrapper>
          <FiltersOptions></FiltersOptions>
        </HomeFiltersContainer>
      </MiddleHomeContainer>
    </HomePage>
  );
};

export default Home;
