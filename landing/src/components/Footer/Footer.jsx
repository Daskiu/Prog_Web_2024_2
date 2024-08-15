import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footerLogo.png"
import appStore from "../../assets/appstore.png"
import playStore from "../../assets/playstore.png"

export function Footer() {
  return (
    <main className="footerContainer">
      <div className="kfc">
        <ul>
          <li>
            <img className="footerLogo" src={footerLogo} />
          </li>
          <li>
            <h1>
              KFC tiene la receta secreta del mejor pollo frito - KFC Colombia
            </h1>
          </li>
          <li>
            <p>
              Disfruta de nuestro delicioso pollo frito, popcorn, alitas
              picantes, sándwiches originales, postres, y más. Conoce aquí
              nuestro menú KFC aquí.
            </p>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul>
            <li><h1>Contáctanos</h1></li>
            <li><p>Inversiones INT Colombia S.A.S, NIT: 900</p></li>
            <li><p>439 301 -2</p></li>
            <li><a href="">Sé parte de KFC</a></li>
            <li><p>Calle 86a 13-42</p></li>
            <li><p>Bogotá, Colombia</p></li>
            <li><p>Llamanos: 3009120963</p></li>
            <li><a href="">Contactenos Aquí</a></li>
            <li><a href="">Superintendencia de Industria y Comercio</a></li>
            <li><a href="">SIC</a></li>
        </ul>
      </div>
      <div className="policies">
        <ul>
            <li><h1>Políticas</h1></li>
            <li><a href="">Llamanos: 3009120963</a></li>
            <li><a href="">Términos y Condiciones de Promociones</a></li>
            <li><a href="">Términos y Condiciones</a></li>
            <li><a href="">Políticas de Privacidad</a></li>
        </ul>
      </div>
      <div className="download">
        <ul>
            <li><h1>Descarga nuestra APP</h1></li>
            <ul className="downloadImgs">
              <li><a href=""><img className="appStore" src={appStore}/></a></li>
              <li><a href=""><img className="playStore" src={playStore}/></a></li>
            </ul>
        </ul>
      </div>
    </main>
  );
}
