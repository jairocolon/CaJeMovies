import React from "react";
import "./footer.scss";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/cajemovies.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
          </div>
          <div className="footer__content__menu">
            <a href="/movie">Películas</a>
            <a href="/tv">Tv Series</a>
          </div>
          <div className="footer__content__menu">
            <a
              className="byJairoColon"
              href="https://jairocolon.com"
              target="blank"
            >
              Diseñado y Desarrollado por Jairo Colón ®
            </a>
          </div>
        </div>
        <div className="copyright-footer">
          <span>
            © 2022 - {currentYear} Todos los derechos reservados{" "}
            <a
              className="byJairoColon"
              href="https://jairocolon.com"
              target="blank"
            >
              Jairo Colón
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
