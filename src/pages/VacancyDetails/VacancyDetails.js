import React from "react";
import { DetailsPage, DetailsContainer } from "./VacancyDetailsStyles";
import Header from "../../components/Header/Header";

const VacancyDetails = () => {
  return (
    <DetailsPage>
      <Header />
      <DetailsContainer></DetailsContainer>
    </DetailsPage>
  );
};

export default VacancyDetails;
