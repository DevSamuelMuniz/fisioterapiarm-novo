import React from "react";

//css
import "./footerComponent.css";

//img
import Brasil from "../../../assets/footer/Português do Brasil.png";
import Logo from "../../../assets/footer/logo.png";
import Whatsapp from "../../../assets/footer/WhatsApp.png";
import Instagram from "../../../assets/footer/instagram.png";

//component

function footerComponent() {
  return (
    <main className="content-footer">
      <div className="col-1">
        <img src={Brasil} alt="portugues brasil" />
        <h2 className="crefito">CREFITO: 357918-F</h2>
        <p>Recife, Pernambuco, Brasil</p>
        <p>
          Copyright © 2023 Fisioterapeuta Rayssa Muniz. All rights reserved.
        </p>
      </div>

      <div className="col-2">
        <img src={Logo} alt="logo" />
        <h2 className="slogan">Movimento é vida & vida é movimento</h2>
      </div>

      <div>
        <div className="ctn-redes">
          <a
            className="redes-link"
            href="https://wa.me/5581984428537?text=Ol%C3%A1%2C+Dra.+Rayssa+Muniz%2C+Quero+saber+mais+sobre+as+consultas+e+agendamentos%21%21"
          >
            <div>
              <img src={Whatsapp} alt="" />
            </div>
            Whatsapp
          </a>

          <a
            className="redes-link"
            href="https://www.instagram.com/fisiorayssamuniz/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <div>
              <img src={Instagram} alt="" />
            </div>
            Instagram
          </a>
        </div>
        <br/>
        <p className="meritos">Website created by DevSamuelMuniz & DevAnaAndrade</p>
      </div>
    </main>
  );
}

export default footerComponent;
