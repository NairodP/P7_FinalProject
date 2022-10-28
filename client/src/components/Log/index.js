import React, { useState } from "react";
import Connexion from "./Connexion";
import Inscription from "./Inscription";

const SecurePage = () => {
  const [inscriptionModal, setInscriptionModal] = useState(false);
  const [connexionModal, setConnexionModal] = useState(true);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setInscriptionModal(true);
      setConnexionModal(false);
    } else if (e.target.id === "login") {
      setInscriptionModal(false);
      setConnexionModal(true);
    }
  };

  return (
    <div className="form-container">
      <ul>
        <li onClick={handleModals} id="register">
          S'inscrire
        </li>
        <li onClick={handleModals} id="login">
          Se connecter
        </li>
      </ul>
      {connexionModal && <Connexion />}
      {inscriptionModal && <Inscription />}
    </div>
  );
};

export default SecurePage;
