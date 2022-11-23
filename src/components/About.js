import React, { useState } from "react";
import Carousel, { CarouselItem } from "./Caraousel";
import { meetupContent } from "../helper/dummyData";
import "./About.scss";
const detailLeft = [
  "Age",
  "Race",
  "Languages",
  "Height",
  "Sexual Orientation",
  "Chats",
  "Meetups",
];

const detailRight = [
  "22",
  "Chinese",
  "English, Mandarin",
  "158cm",
  "Heterosexual",
  "$30 / 30 days",
  "$200 / 2h",
];

export default function About(props) {
  const { deviceType } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselProps = { activeIndex, setActiveIndex };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 2) {
      newIndex = 2 - 1;
    }

    setActiveIndex(newIndex);
  };

  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<img key={i} src="/assets/icon/star-icon.svg" alt="star" />);
      } else {
        stars.push(
          <img key={i} src="/assets/icon/star-fill-icon.svg" alt="star" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="about-container">
      <div className="about-detail-container">
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

        <div className="about-detail">
          <ul className="detail-left">
            {detailLeft.map((item, index) => {
              return <li key={index}> {item}</li>;
            })}
          </ul>
          <ul className="detail-right">
            {detailRight.map((item, index) => {
              return <li key={index}> {item}</li>;
            })}
          </ul>
        </div>

        <div className="line" />

        <div className="rating-container">
          <div className="rating">
            <div className="rating-left">
              Rating
              <div className="stars">{getStars(4)}</div>
            </div>
            <div className="rating-right">4.5 of 193 reviews</div>
          </div>

          <button className="reviews-btn">Reviews</button>
        </div>
      </div>

      <div className="meetups">
        Meetups
        <div className="meetups-btn">
          <button
            onClick={() => updateIndex(activeIndex - 1)}
            className="btn-icon"
          >
            {activeIndex === 0 ? (
              <img src="/assets/icon/left-icon.svg" alt="left" />
            ) : (
              <img src="/assets/icon/left-fill-icon.svg" alt="left" />
            )}
          </button>
          <button
            onClick={() => updateIndex(activeIndex + 1)}
            className="btn-icon"
          >
            {activeIndex === 1 ? (
              <img src="/assets/icon/right-icon.svg" alt="right" />
            ) : (
              <img src="/assets/icon/right-fill-icon.svg" alt="right" />
            )}
          </button>
        </div>
      </div>

      <div className="line" />

      <div className="meetup-items">
        {deviceType === "mobile" ? (
          <Carousel {...carouselProps}>
            <CarouselItem>
              {meetupContent.slice(0, 2).map((item, index) => {
                const { title, description, image } = item;

                return (
                  <div key={index} className="meetup-item">
                    <img src={image} alt={title} />
                    <div className="meetup-text">
                      <div className="meetup-header">{title}</div>
                      <div className="meetup-description">{description}</div>
                    </div>
                  </div>
                );
              })}
            </CarouselItem>
            <CarouselItem>
              {meetupContent.slice(2, 4).map((item, index) => {
                const { title, description, image } = item;

                return (
                  <div key={index} className="meetup-item">
                    <img src={image} alt={title} />
                    <div className="meetup-text">
                      <div className="meetup-header">{title}</div>
                      <div className="meetup-description">{description}</div>
                    </div>
                  </div>
                );
              })}
            </CarouselItem>
          </Carousel>
        ) : (
          <>
            {meetupContent.map((item, index) => {
              const { title, description, image } = item;

              return (
                <div key={index} className="meetup-item">
                  <img src={image} alt={title} />
                  <div className="meetup-text">
                    <div className="meetup-header">{title}</div>
                    <div className="meetup-description">{description}</div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
