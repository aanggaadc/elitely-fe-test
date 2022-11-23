import React, { useState } from "react";
import Carousel, { CarouselItem } from "./Caraousel";
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
              <div className="meetup-item">
                <img
                  src="/assets/icon/recent-update-icon.svg"
                  alt="recent update"
                />
                <div className="meetup-text">
                  <div className="meetup-header">Recent Updates</div>
                  <div className="meetup-description">
                    I’m free today 10:30 am - 3 pm, coming from West. Open to
                    try any area and place!
                  </div>
                </div>
              </div>
              <div className="meetup-item">
                <img
                  src="/assets/icon/availability-icon.svg"
                  alt="availibility"
                />
                <div className="meetup-text">
                  <div className="meetup-header">Availability</div>
                  <div className="meetup-description">
                    Flexi but preferably weekdays! Please arrange at least two
                    days in advance.
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="meetup-item">
                <img
                  src="/assets/icon/recent-update-icon.svg"
                  alt="recent update"
                />
                <div className="meetup-text">
                  <div className="meetup-header">Activities</div>
                  <div className="meetup-description">
                    Cafe, bar, picnic, anything easy going!
                  </div>
                </div>
              </div>
              <div className="meetup-item">
                <img
                  src="/assets/icon/availability-icon.svg"
                  alt="availibility"
                />
                <div className="meetup-text">
                  <div className="meetup-header">Food Preferences</div>
                  <div className="meetup-description">Pasta and Sushi</div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        ) : (
          <>
            <div className="meetup-item">
              <img
                src="/assets/icon/recent-update-icon.svg"
                alt="recent update"
              />
              <div className="meetup-text">
                <div className="meetup-header">Recent Updates</div>
                <div className="meetup-description">
                  I’m free today 10:30 am - 3 pm, coming from West. Open to try
                  any area and place!
                </div>
              </div>
            </div>
            <div className="meetup-item">
              <img
                src="/assets/icon/availability-icon.svg"
                alt="availibility"
              />
              <div className="meetup-text">
                <div className="meetup-header">Availability</div>
                <div className="meetup-description">
                  Flexi but preferably weekdays! Please arrange at least two
                  days in advance.
                </div>
              </div>
            </div>
            <div className="meetup-item">
              <img
                src="/assets/icon/recent-update-icon.svg"
                alt="recent update"
              />
              <div className="meetup-text">
                <div className="meetup-header">Activities</div>
                <div className="meetup-description">
                  Cafe, bar, picnic, anything easy going!
                </div>
              </div>
            </div>
            <div className="meetup-item">
              <img
                src="/assets/icon/availability-icon.svg"
                alt="availibility"
              />
              <div className="meetup-text">
                <div className="meetup-header">Food Preferences</div>
                <div className="meetup-description">Pasta and Sushi</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
