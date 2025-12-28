import { Routes, Route } from "react-router-dom";

import Footer from "../component/footer/footer";
import Home from "../pages/home/home";
import Branding from "../pages/branding/branding";
import UiUx from "../pages/uiux/uiux";
import CaseStudies from "../pages/cases/cases";
import Crosia from "../pages/branding/crosia/crosia";
import GMP from "../pages/branding/gmp/gmp";
import VacationV from "../pages/branding/vacationv/vacationv";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/uiux" element={<UiUx />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="branding/crosia" element={<Crosia />} />
        <Route path="branding/gmp" element={<GMP />} />
        <Route path="branding/vacationv" element={<VacationV />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
