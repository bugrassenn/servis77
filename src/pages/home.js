import React from "react";
import Article from "../components/Article";
import servis77 from "../img/Servis77.gif";
import picture3 from "../img/gocuk1.PNG";
import mehmet from "../img/mehmet.jpeg";
import haydar from "../img/haydar.jpeg";

function home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <img src={servis77} alt="" className="gif" />
        </div>
        <div>
          <hr />
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center pt-5 pb-2">Misyonumuz</h1>
              <p className="pb-3 pt-3">
                Kusursuz hizmet sağlayarak aradığınız tek adres olmak ve
                gerçekleştirdiğimiz  her işte en mükemmeline ulaşma arzumuzu
                hissettirerek İlk karşılamadan uğurlamaya kadar geçen her
                süreçte müşterilerimize her daim güler yüz ile hizmet veriyor,
                çözüm odaklı çalışma ilkemiz çerçevesinde her müşterimizin mutlu
                bir şekilde Servis 77’ den ayrılmasını sağlamaya çalışıyoruz.
              </p>
              <h6>Kalite Hedeflerimiz</h6>
              <ul>
                <li>
                  * Herkese eşit ve bütüncül yaklaşımla yüksek kalitede hizmet
                  sunmak.
                </li>
                <li>
                  * Hizmet verdiğimiz tüm insanlara yüksek konfor kalitesi
                  sağlamak.
                </li>
                <li>
                  * Sevgi ve saygının yoğun olduğu ve tüm çalışanların sunduğu
                  hizmetten tatmin olduğu bir çalışma ortamı yaratmak.
                </li>
              </ul>
              <h6>Değerlerimiz</h6>
              <ul>
                <li>* Güvenilir çalışma alanı ve hizmet alanı</li>
                <li>* Yeniliklere açıklık</li>
                <li>* Takım ruhuna sahip bir çalışma ortamı</li>
                <li>* Verimli, etkili, etkin ve sürekli bir hizmet sunumu</li>
              </ul>
            </div>
            <hr />
          </div>
          <h1 className="text-center pt-3">Kurucularımız</h1>
          <div className="galeri pt-5">
            <div className="galeri">
              <div className="row">
                <div className="col-lg-3">
                  <div className="img-services">
                    <h3 className="text-center">Haydar Özkan</h3>
                    <img src={haydar} alt="" className="borderekle" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="img-services">
                    <h3 className="text-center">Mehmet Özkan</h3>
                    <img src={mehmet} alt="" className="borderekle" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="img-services">
                    <h3 className="text-center">Hayri Özkan</h3>
                    <img src={picture3} alt="" className="borderekle" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="img-services">
                    <h3 className="text-center">Fatih Özkan</h3>
                    <img src={picture3} alt="" className="borderekle" />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <Article />
      </div>
    </div>
  );
}

export default home;
