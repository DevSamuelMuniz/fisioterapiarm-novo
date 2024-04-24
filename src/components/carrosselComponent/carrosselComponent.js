import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requer um carregador
import "./carrosselComponent.css"; // Arquivo de estilo personalizado

// Importe suas imagens
import Foto1 from "../../assets/carrossel/auriculoterapia.png";
import Foto2 from "../../assets/carrossel/liberação.png";
import Foto3 from "../../assets/carrossel/massagem.png";
import Foto4 from "../../assets/carrossel/motora.png";
import Foto5 from "../../assets/carrossel/poscovid.png";
import Foto6 from "../../assets/carrossel/preventiva.png";
import Foto7 from "../../assets/carrossel/respiratoria.png";
import Foto8 from "../../assets/carrossel/ventosaterapia.png";

function CarrosselComponent() {
  // Divida as imagens em grupos de quatro
  const itemsGrouped = [
    {
      img: Foto1,
      title: "Auriculoterapia",
      price: "R$ 80,00",
    },
    {
      img: Foto2,
      title: "Liberação Miofascial",
      price: "R$ 100,00",
    },
    {
      img: Foto3,
      title: "Massagem Relaxante",
      price: "R$ 80,00",
    },
    {
      img: Foto4,
      title: "Fisioterapia Motora",
      price: "R$ 150,00",
    },
    {
      img: Foto5,
      title: "Fisioterapia Pós-COVID",
      price: "R$ 150,00",
    },
    {
      img: Foto6,
      title: "Fisioterapia Preventiva",
      price: "R$ 150,00",
    },
    {
      img: Foto7,
      title: "Fisioterapia Respiratória",
      price: "R$ 150,00",
    },
    {
      img: Foto8,
      title: "Ventosaterapia",
      price: "R$ 80,00",
    },
  ];

  // Defina a quantidade de itens exibidos com base na largura da tela
  let itemsPerSlide = 4;
  if (window.innerWidth < 1440) {
    itemsPerSlide = 3;
  }
  if (window.innerWidth < 1096) {
    itemsPerSlide = 2;
  }
  if (window.innerWidth < 700) {
    itemsPerSlide = 1;
  }

  // Divida as imagens em grupos com base na quantidade de itens por slide
  const slides = itemsGrouped.reduce((acc, curr, index) => {
    if (index % itemsPerSlide === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <main className="Content-carrossel">
      <Carousel
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        swipeable={true}
      >
        {slides.map((group, index) => (
          <div className="item-carrossel" key={index}>
            {group.map((item, i) => (
              <div className="item" key={i}>
                <img className="imgcarousel" src={item.img} alt={item.title} />
                <h1 className="h1carousel">{item.title}</h1>
                <h2 className="h2carousel">{item.price}</h2>
                <a
                  target="_blank"
                  className="buttoncarousel"
                  href="https://calendly.com/fisioterapiarm/agendamento"
                  rel="noreferrer"
                >
                  AGENDAR
                </a>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </main>
  );
}

export default CarrosselComponent;
