import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Connexion from "../../pages/Log";
import Profil from "../Profil";

const RoutesApp = () => {

  return (
      <Routes>
        <Route path="/log" element={<Connexion />} />
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
};

export default RoutesApp;
