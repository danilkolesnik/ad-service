import { Route, Routes } from "react-router-dom";
import {
  MAIN_ROUTE,
  PROFILE_ROUTE,
  VACANCY_DETAILS_ROUTE,
} from "./utils/constants/routes.constants";
import Home from "./pages/Home/Home";
import MyProfile from "./pages/MyProfile/MyProfile";
import VacancyDetails from "./pages/VacancyDetails/VacancyDetails";

function App() {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<Home />} />
      <Route path={PROFILE_ROUTE} element={<MyProfile />} />
      <Route path={VACANCY_DETAILS_ROUTE} element={<VacancyDetails />} />
    </Routes>
  );
}

export default App;
