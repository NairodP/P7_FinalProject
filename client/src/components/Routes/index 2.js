import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Connexion from "../../pages/Log";
// import { UidContext } from "../AppContext";
import Profil from "../Profil";
// import PubliUploader from "../PubliUploader";

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
