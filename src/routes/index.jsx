import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import AutoPart from "../pages/autopart";
import OilFilter from "../pages/oil-filter";

const AppRoutes = () => {
  useEffect(() => {
    function setContainerHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    // Call the function when the window is resized
    window.addEventListener("resize", setContainerHeight);

    // Initial call to set the container height
    setContainerHeight();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/oilfilter" element={<OilFilter />} />
        <Route exact path="/autopart" element={<AutoPart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
