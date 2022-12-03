import React from "react";
import { AiFillPhone } from "react-icons/ai";

function contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=13falla9E3hOhi4kCizzTtUy6qUnJ0KM&ehbc=2E312F"
                width="640"
                height="480"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h1>İletişim Bilgileri</h1>
              <h4>Adres</h4>
              <p>
                Yenimahalle, 40. Sk. No:6, 55080 Gülsan Sanayi Sitesi
                Canik/Samsun
              </p>
              <h4>Telefon</h4>
              <p>
                <AiFillPhone className="footer-icons me-3" />
                +90 362 238 29 88
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default contact;
