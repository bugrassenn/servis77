import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import logo1 from "../img/servis77_logo.png";

function Footer() {
  return (
    <div class="footer">
      <div>
        <div class="row">
          <div class="col-lg-4">
            <div className="img">
              <img src={logo1} alt="" className="footer-logo" />
            </div>
          </div>
          <div class="col-lg-4 work">
            <div>
              <h4>Çalışma Saatleri</h4>
              <p>Pazartesi 08:00 - 18:00</p>
              <p>Pazartesi 08:00 - 18:00</p>
              <p>Pazartesi 08:00 - 18:00</p>
              <p>Pazartesi 08:00 - 18:00</p>
              <p>Pazartesi 08:00 - 18:00</p>
              <p>Pazartesi 08:00 - 18:00</p>
              <p>Pazartesi 08:00 - 18:00</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div>
              <h4>İletişim</h4>
              <p>
                <AiFillPhone className="footer-icons" /> Fatih Özkan : 0555 555
                55 55
              </p>
              <p>
                <AiFillPhone className="footer-icons" /> Hayri Özkan : 0555 555
                55 55
              </p>
              <p>
                <BsFillHouseDoorFill className="footer-icons" /> İLKADIM/SAMSUN
                - Gülsan Sanayi
              </p>
              <div className="row mt-4">
                <div className="col-lg-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/groups/servis77.com.tr/"
                    className="social-link"
                  >
                    <FaFacebook className="social-icons" />
                  </a>
                </div>
                <div className="col-lg-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/servis77automotive/"
                    className="social-link"
                  >
                    <FaInstagram className="social-icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
