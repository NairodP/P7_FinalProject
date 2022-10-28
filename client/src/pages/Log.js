import React from "react";
import SecurePage from "../components/Log/index";

const Log = () => {
  return (
    <div className="screen-container log-screen">
      <div className="log-container">
        <img
          className="site-title"
          src="./img/icon-left-font-monochrome-white.png"
          alt="website logo"
        />
        <SecurePage />
      </div>
    </div>
  );
};

export default Log;
