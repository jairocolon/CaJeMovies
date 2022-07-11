import React from "react";

import "./footer.scss";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/cajemovies.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <a href="#home">CaJe Movies</a>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <a href="/" id="home">
              Inicio
            </a>
            {/* <a href="https://jairocolon.netlify.app/#contact" target="blank">
              Contacto
            </a> */}
            {/* <Link to="/">Term of services</Link> */}
          </div>
          <div className="footer__content__menu">
            <a href="/movie">Películas</a>
            <a href="/tv">Tv Series</a>
            {/* <a
              href="https://jairocolon.netlify.app/services/websites/dise%C3%B1o-web.html"
              target="blank"
            >
              Premium Websites
            </a> */}
            {/* <a
              href="https://jairocolon.netlify.app/services/websites/dise%C3%B1o-ecommerce.html"
              target="blank"
            >
              Premium Ecommerce Movies
            </a> */}
          </div>
          <div className="footer__content__menu">
            {/* <a
              href="https://jairocolon.netlify.app/services/websites/desarrollo-appsmobile.html"
              target="blank"
            >
              Apps Movies
            </a> */}
            {/* <a
              href="https://jairocolon.netlify.app/services/websites/desarrollo-web-a-la-medida.html"
              target="blank"
            >
              Measure Movies
            </a> */}
            {/* <a
              href="https://jairocolon.netlify.app/services/more-services/smm.html"
              target="blank"
            >
              Movies SMM
            </a> */}
            <a href="https://jaicodigital.com" target="blank">
              Diseñado y Desarrollado por JaiCo Digital ®
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
