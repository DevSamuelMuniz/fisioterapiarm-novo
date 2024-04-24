import React from "react";

//img
import Seta from "../../../assets/img/arrasteparaolado.png"

//components
import Banner from "../../../assets/img/banner.png";
import CarrosselComponent from "../../carrosselComponent/carrosselComponent";

import "./contentComponent.css";

function contentComponent() {
  return (
    <main>
      <div className="banner-content">
        <img
          className="img-banner-content"
          src={Banner}
          alt="Banner fisioterapia"
        ></img>
      </div>

      <div className="content-consulta">
        <div>
          <svg
            id="iconCalendly"
            xmlns="http://www.w3.org/2000/svg"
            width="107"
            height="107"
            viewBox="0 0 107 107"
          >
            <path
              d="M24.0063 93.6249C22.2931 93.6249 20.8359 93.0244 19.6348 91.8234C18.4338 90.6224 17.8333 89.1652 17.8333 87.4519V27.4359C17.8333 25.7225 18.4338 24.2653 19.6348 23.0642C20.8359 21.8632 22.2931 21.2627 24.0063 21.2627H33.2231V12.3461H37.2099V21.2627H70.133V12.3461H73.8626V21.2627H82.9936C84.7069 21.2627 86.1641 21.8632 87.3651 23.0642C88.5661 24.2653 89.1666 25.7225 89.1666 27.4359V87.4519C89.1666 89.1652 88.5661 90.6224 87.3651 91.8234C86.1641 93.0244 84.7069 93.6249 82.9936 93.6249H24.0063ZM24.0063 90.1955H82.9936C83.6795 90.1955 84.3082 89.9097 84.8798 89.3382C85.4514 88.7665 85.7372 88.1378 85.7372 87.4519V46.8124H21.2628V87.4519C21.2628 88.1378 21.5486 88.7665 22.1201 89.3382C22.6917 89.9097 23.3205 90.1955 24.0063 90.1955ZM21.2628 43.3829H85.7372V27.4359C85.7372 26.7499 85.4514 26.1212 84.8798 25.5497C84.3082 24.978 83.6795 24.6922 82.9936 24.6922H24.0063C23.3205 24.6922 22.6917 24.978 22.1201 25.5497C21.5486 26.1212 21.2628 26.7499 21.2628 27.4359V43.3829ZM53.5 63.1025C52.5797 63.1025 51.7781 62.761 51.095 62.0779C50.412 61.3949 50.0705 60.5933 50.0705 59.6731C50.0705 58.7528 50.412 57.9511 51.095 57.2681C51.7781 56.585 52.5797 56.2435 53.5 56.2435C54.4202 56.2435 55.2219 56.585 55.9049 57.2681C56.5879 57.9511 56.9294 58.7528 56.9294 59.6731C56.9294 60.5933 56.5879 61.3949 55.9049 62.0779C55.2219 62.761 54.4202 63.1025 53.5 63.1025ZM35.6666 63.1025C34.7464 63.1025 33.9447 62.761 33.2617 62.0779C32.5787 61.3949 32.2372 60.5933 32.2372 59.6731C32.2372 58.7528 32.5787 57.9511 33.2617 57.2681C33.9447 56.585 34.7464 56.2435 35.6666 56.2435C36.5869 56.2435 37.3886 56.585 38.0716 57.2681C38.7546 57.9511 39.0961 58.7528 39.0961 59.6731C39.0961 60.5933 38.7546 61.3949 38.0716 62.0779C37.3886 62.761 36.5869 63.1025 35.6666 63.1025ZM71.3333 63.1025C70.413 63.1025 69.6114 62.761 68.9284 62.0779C68.2454 61.3949 67.9039 60.5933 67.9039 59.6731C67.9039 58.7528 68.2454 57.9511 68.9284 57.2681C69.6114 56.585 70.413 56.2435 71.3333 56.2435C72.2536 56.2435 73.0552 56.585 73.7382 57.2681C74.4213 57.9511 74.7628 58.7528 74.7628 59.6731C74.7628 60.5933 74.4213 61.3949 73.7382 62.0779C73.0552 62.761 72.2536 63.1025 71.3333 63.1025ZM53.5 80.2499C52.5797 80.2499 51.7781 79.9084 51.095 79.2254C50.412 78.5423 50.0705 77.7407 50.0705 76.8205C50.0705 75.9002 50.412 75.0986 51.095 74.4155C51.7781 73.7325 52.5797 73.3909 53.5 73.3909C54.4202 73.3909 55.2219 73.7325 55.9049 74.4155C56.5879 75.0986 56.9294 75.9002 56.9294 76.8205C56.9294 77.7407 56.5879 78.5423 55.9049 79.2254C55.2219 79.9084 54.4202 80.2499 53.5 80.2499ZM35.6666 80.2499C34.7464 80.2499 33.9447 79.9084 33.2617 79.2254C32.5787 78.5423 32.2372 77.7407 32.2372 76.8205C32.2372 75.9002 32.5787 75.0986 33.2617 74.4155C33.9447 73.7325 34.7464 73.3909 35.6666 73.3909C36.5869 73.3909 37.3886 73.7325 38.0716 74.4155C38.7546 75.0986 39.0961 75.9002 39.0961 76.8205C39.0961 77.7407 38.7546 78.5423 38.0716 79.2254C37.3886 79.9084 36.5869 80.2499 35.6666 80.2499ZM71.3333 80.2499C70.413 80.2499 69.6114 79.9084 68.9284 79.2254C68.2454 78.5423 67.9039 77.7407 67.9039 76.8205C67.9039 75.9002 68.2454 75.0986 68.9284 74.4155C69.6114 73.7325 70.413 73.3909 71.3333 73.3909C72.2536 73.3909 73.0552 73.7325 73.7382 74.4155C74.4213 75.0986 74.7628 75.9002 74.7628 76.8205C74.7628 77.7407 74.4213 78.5423 73.7382 79.2254C73.0552 79.9084 72.2536 80.2499 71.3333 80.2499Z"
              fill="#285c52"
            />
          </svg>
        </div>

        <div>
          <h2 className="title-consulta">Faça o agendamento de sua consulta</h2>
          <p className="title-servico">Conheça os nossos serviços</p>
        </div>
      </div>

      <div className="content-carrossel">
        <CarrosselComponent/>
      </div>

      <div className="arraste">
        <h2 className="title-arraste">
          Arraste para o lado
        </h2>

        <img className="img-arraste" src={Seta} alt="seta para o lado"/>
      </div>
    </main>
  );
}

export default contentComponent;
