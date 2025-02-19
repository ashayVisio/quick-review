import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import AR from "../pages/ar";
import Chair from "../pages/chair";
import Leaf from "../pages/leaf";

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
        <Route exact path="/ar" element={<AR />} />
        <Route exact path="/chair" element={<Chair />} />
        <Route exact path="/leaf" element={<Leaf />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
