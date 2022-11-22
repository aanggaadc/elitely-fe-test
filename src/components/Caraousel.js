import React from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.scss";

export const CarouselItem = ({ children, minWidth }) => (
  <div className="carousel-item" style={{ minWidth: minWidth }}>
    {children}
  </div>
);

const Carousel = ({ children, activeIndex, setActiveIndex }) => {
  const count = React.Children.count(children);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= count) {
      newIndex = count - 1;
    }

    setActiveIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...swipeHandlers} className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { minWidth: "100%" });
        })}
      </div>
      <div className="indicators-default">
        {React.Children.map(children, (_, index) => (
          <button
            className={`indicator-default-btn ${
              index === activeIndex && "active"
            }`}
            onClick={() => updateIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
