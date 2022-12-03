import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../img/servis77_logo.png";
function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-3 logo-div">
          <img src={logo1} alt="" className="logo" />
        </div>
        <div className="col-lg-4 header-div">
          <h1 className="title">Servis 77</h1>
        </div>
        <div className="col-lg-5 link-div">
          <Link to="/" data-replace="Anasayfa">
            <span>Anasayfa</span>
          </Link>
          &nbsp;
          <Link to="/services" data-replace="Hizmetlerimiz" className="links">
            <span>Hizmetlerimiz</span>
          </Link>
          &nbsp;
          <Link to="/contact" data-replace="İletişim" className="links">
            <span>İletişim</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
