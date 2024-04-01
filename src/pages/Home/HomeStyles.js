import styled from "styled-components";

const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  min-height: 100vh;
  width: 30%;
`;

export { HomePage, HomeVacanciesContainer, HomeFiltersContainer };
