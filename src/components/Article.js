import React from "react";
import picture1 from "../img/belediye.png";
import picture2 from "../img/oksed.png";
import picture3 from "../img/google1.PNG";
import picture4 from "../img/google2.PNG";
import picture5 from "../img/google3.PNG";

function Article() {
  return (
    <div className="article">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 article-row-div">
            <div className="article-img">
              <img src={picture1} className="article-picture" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="article-parag">
              <p className="article-p">
                <h3>Başkan Demir'e Geçmiş olsun ziyareti</h3>
                OKSED Başkanı kurucu ortağımız Fatih Özkan ve Yönetim kurulu
                üyesi Erhan Egebigi ile Samsun Büyükşehir Belediye Başkanımız
                Mustafa Demir 'e geçmiş olsun ziyaretinde bulunduk.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6 article-row-div">
            <div className="article-img">
              <img src={picture2} className="article-picture" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="article-parag">
              <p className="article-p">
                <h3>Kurucu Ortağımız OKSED Başkanı</h3>
                Derneğimizin yönetim kurulu üyeleri,üyeler ve meslektaş esnaf
                büyüklerim,dostlarımın da desteği ile yeni başkan olarak beni bu
                göreve layık gördüler, kendilerine teşekkür ederim. Değerli
                meslektaş büyüğüm Ali Özdemir e berebar çalıştığımız zamanlarda
                maddi manevi desteği ve derneğimizde başkanlık yapmış olduğu
                dönemdeki Hizmetleri için ayrıca teşekkür eder saygılar sunarım.
                Yeni Başkanlık ve Yönetimin Sektörümüze Hayırlı olmasını
                Dilerim.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row pt-3">
          <h1 className="text-center">Google Değerlendirmeleri</h1>
          <div className="google">
            <div className="col-md-10 offset-md-1 article-row-div">
              <div className="article-img">
                <img src={picture3} className="article-picture" alt="" />
              </div>
            </div>
            <hr />
            <div className="col-md-10 offset-md-1 article-row-div">
              <div className="article-img">
                <img src={picture4} className="article-picture" alt="" />
              </div>
            </div>
            <hr />
            <div className="col-md-10 offset-md-1 article-row-div">
              <div className="article-img">
                <img src={picture5} className="article-picture" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
