import { Route, Routes } from "react-router-dom";
import { MAIN_ROUTE, PROFILE_ROUTE } from "./utils/constants/routes.constants";
import Home from "./pages/Home/Home";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<Home />} />
      <Route path={PROFILE_ROUTE} element={<MyProfile />} />
    </Routes>
  );
}

export default App;
