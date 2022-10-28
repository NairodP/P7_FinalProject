import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        // navigate("/");
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
    <form onSubmit={handleLogin} id="sign-up-form">
      <div className="informations">
        <h1>Connexion</h1>
        <br />
        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            aria-label="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!!emailError && <div className="email error">{emailError}</div>}
          <input
            type="password"
            placeholder="Mot de passe"
            aria-label="email"
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
          aria-label="se connecter"
          value="Se Connecter"
        />
      </div>
    </form>
  );
};

export default Connexion;
