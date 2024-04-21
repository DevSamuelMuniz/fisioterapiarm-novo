import React from "react";

//components
import HeaderComponent from "../../components/homeComponets/headerComponent/headerComponent";
import ContentComponent from "../../components/homeComponets/contentComponent/contentComponent";
import FooterComponent from "../../components/homeComponets/footerComponent/footerComponent";

function homePage() {
  return (
    <main>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </main>
  );
}

export default homePage;
