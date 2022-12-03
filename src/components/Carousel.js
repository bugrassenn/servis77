import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../img/servis77_logo.png";
import picture1 from "../img/belediye.png";
import picture2 from "../img/oksed.png";
import caropicture1 from "../img/wwgocuk.png";
import caropicture2 from "../img/wwgocuk2.PNG";

function Kaydirmenu() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={caropicture1} className="carousel-img" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={picture2} className="carousel-img" alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={picture1} className="carousel-img" alt="Third slide" />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Kaydirmenu;
