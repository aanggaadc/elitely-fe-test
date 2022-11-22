import React from "react";
import "./Footer.scss";
const footerButton = [
  "home-icon.svg",
  "search-icon.svg",
  "feed-icon.svg",
  "schedule-icon.svg",
];

export default function Footer() {
  return (
    <footer className="footer-container">
      {footerButton.map((item, index) => {
        return (
          <button className="btn-icon">
            <img src={`/assets/icon/${item}`} alt="icon" />
          </button>
        );
      })}
    </footer>
  );
}
