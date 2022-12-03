import React from "react";
import picture1 from "../img/wwgocuk.png";
import picture2 from "../img/wwgocuk2.PNG";
import picture3 from "../img/gocuk1.PNG";
import picture4 from "../img/gocuk2.PNG";
import picture5 from "../img/gocuk3.PNG";
import picture6 from "../img/gocuk4.PNG";
import picture7 from "../img/gocuk5.PNG";
import picture8 from "../img/gocuk6.PNG";
function services() {
  return (
    <div className="services">
      <hr />
      <div className="container div-services">
        <div className="row">
          <div className="boyasiz-gocuk">
            <h1>Boyasız Göçük İşlemi</h1>
            <p>
              Boyasız Kaporta Göçük Düzeltme , dış darbeler sonucu araç kaporta
              aksamı üzerinde meydana gelen, boyanın zarar görmediği, aracın
              orjinalliği korunarak ve herhangi bir boyama işlemi yapmaksızın
              düzeltilerek eski haline getirilme tekniği ve sanatıdır. Boyasız
              kaporta göçük düzeltme işlemi, aracın kaporta aksamları üzerinde
              meydana gelen ve boyanın zarar görmediği durumlardaki hasarların,
              geleneksel yöntemler olan kaporta düzeltme ve boya uygulaması
              yapılmadan giderilmesidir.Küçük ve büyük ölçekli park hasarları,
              aracın orjinal boyasına zarar vermediği takdirde, özel onarım
              teknikleri ile düzeltilerek eski haline getirilir.
            </p>
            <h6>
              Boyasız Kaporta Göçük Düzeltme İşleminin Faydaları Nelerdir?
            </h6>
            <ul>
              <li>
                * Boyasız göçük düzeltme tekniği aracın orjinal görüntüsüne
                yeniden dönmesini sağlar.
              </li>
              <li>
                * Oto göçük düzeltme ikinci el satışında değer kaybına uğratmaz.
              </li>
              <li>
                * Araç göçük düzeltme işlemi sürücülerin, ilerleyen süreçlerde
                oluşabilecek yüksek maliyetlerden korunmalarını sağlar.
              </li>
            </ul>
            <h2>Boyasız Göçük Düzeltme İşlemi</h2>
            <div className="row">
              <div className="col-lg-3 pt-3">
                <div className="img-services">
                  <h6 className="text-center">Öncesi</h6>
                  <img src={picture1} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3 pt-3">
                <div className="img-services">
                  <h6 className="text-center">Sonrası</h6>
                  <img src={picture2} alt="" className="borderekle" />
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
        <h1 className="text-center pt-3">Boyasız Göçük İşlemlerimiz</h1>
        <div className="galeri pt-5">
          <div className="galeri">
            <div className="row">
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture3} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture4} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture5} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture6} alt="" className="borderekle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="galeri pt-5">
          <div className="galeri">
            <div className="row">
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture7} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture8} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture1} alt="" className="borderekle" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img-services">
                  <img src={picture2} alt="" className="borderekle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mekanik">
          <h1>Mekanik Bakım İşlemleri</h1>
          <p>
            Bakım aşamalarından mekanik bakım hizmetleri kapsamında araçların
            tüm mekanik aksamları test edilerek , tespit edilen sorunların
            giderilmesidir. Bu testler sonucunda gerekli parçalar onarım veya
            değişim ile ilgili sorunlar ortadan kaldırılmaktadır.
          </p>
          <h6>Mekanik Bakım İşlemleri Nelerdir?</h6>
          <ul>
            <li>* Motor Arıza Tespiti</li>
            <li>* Far Ayar Kontrolü</li>
            <li>* Yakıt Ateşleme Sistemi ve Kontrolü</li>
            <li>* Soğutma Sistemi Kontrolü</li>
            <li> *Motor Yağı ve Yağ Filtresi Değişimi vb.</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default services;
