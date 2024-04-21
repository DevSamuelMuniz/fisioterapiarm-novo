import React from "react";
import Logo from "../../../assets/img/logo.png";

//css
import "./headerComponent.css"

// Header component

function headerComponent() {
  return (
    <main className="content-header">
      <div className="img-logo-header">
        <a href="/"><img className="logo-header" src={Logo} alt=""></img></a>
      </div>

      <div className="title-logo-header">
        <h1 className="title-header">Movimento é vida & vida é movimento</h1>
      </div>
    </main>
  );
}

export default headerComponent;
