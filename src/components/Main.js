import React, { useState } from "react";
import Carousel, { CarouselItem } from "./Caraousel";
import "./Main.scss";

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselProps = { activeIndex, setActiveIndex };
  return (
    <>
      <div className="carousel-container">
        <Carousel {...carouselProps}>
          <CarouselItem>
            <img
              src="/assets/image/profile-picture.jpg"
              alt="profile picture"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/assets/image/profile-picture.jpg"
              alt="profile picture"
            />
          </CarouselItem>
        </Carousel>
      </div>

      <div className="main-detail">
        <div className="main-name">Xiuxian, 22</div>
        <div className="main-occupation">
          <div className="occupation-item">
            <img src="/assets/icon/school-icon.svg" alt="school" />
            SIM-UOL
          </div>
          <div className="occupation-item">
            <img src="/assets/icon/occupation-icon.svg" alt="school" />
            Student at University
          </div>
        </div>

        <div className="line" />

        <div className="main-description">
          Gemini. Art student and tall. <br /> Coffee, cold showers and early
          morning walks!
        </div>
      </div>
    </>
  );
}
