import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Inscription = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/register`,
      withCredentials: true,
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })
      .then((res) => {
        // navigate("/log");
        window.location.href = 'http://localhost:3000/home';
      })
      .catch((err) => {
        if (err.response.data.errors) {
          setEmailError(err.response.data.errors.email);
          setPasswordError(err.response.data.errors.password);
        }
      });
  };

  return (
    <form onSubmit={handleRegister} id="sign-in-form">
      <div className="informations">
        <h1>Inscription</h1>
        <br />
        <div className="inputs">
          <input
            type="text"
            placeholder="Nom"
            aria-label="Nom"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {!!emailError && <div className="firstName error">{emailError}</div>}
          <input
            type="text"
            placeholder="Prénom"
            aria-label="Prénom"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {!!emailError && <div className="lastName error">{emailError}</div>}
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!!emailError && <div className="email error">{emailError}</div>}
          <input
            type="password"
            placeholder="Mot de passe"
            aria-label="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!!passwordError && (
            <div className="password error">{passwordError}</div>
          )}
        </div>
        <input
          type="submit"
          id="submit-log"
          aria-label="S'inscrire"
          value="S'inscrire"
        />
      </div>
    </form>
  );
};

export default Inscription;
