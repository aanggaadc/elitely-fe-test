import React from "react";
import "./Header.scss";
const navigation = ["Home", "Explore", "Feed", "Scheduled"];
const currentStage = "Explore";

export default function Header() {
  return (
    <header>
      <section className="upper-header">
        <button className="btn-icon btn-back ">
          <img src="/assets/icon/left-arrow-icon.svg" alt="left" />
        </button>
        <div className="header-text">Explore</div>
      </section>

      <nav className="nav">
        <ul className="nav-list">
          {navigation.map((item, index) => {
            return (
              <li
                key={index}
                className={`nav-item ${currentStage === item && "active"}`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="bottom-header">
        <div className="profile-container">
          <div className="profile">
            <div className="profile-left">
              <div className="avatar-outer">
                <div className="avatar-inner">
                  <img src="/assets/image/profile-picture.jpg" alt="profile" />
                </div>
              </div>
              <div className="badge">personality</div>
            </div>

            <div className="profile-right">
              <div className="username">
                @xuixian_98
                <img src="/assets/icon/verified-icon.svg" alt="badge" />
              </div>

              <div className="user-status">
                <div className="online" />
                Online Now
              </div>

              <div className="user-about">
                İ’m your manic pixie dream girl ~ <br />
                Design student and anime weeb. Coffee addict. Anime fan and
                games. Come say hi!
              </div>
            </div>
          </div>

          <button className="btn-humberger btn-icon">
            <img src="/assets/icon/humberger-icon.svg" alt="humberger icon" />
          </button>
        </div>

        <div className="interaction">
          <div className="line" />
          <div className="btn-container">
            <button className="btn-interaction">Chat</button>
            <button className="btn-interaction">Meet</button>
            <button className="btn-interaction follow">Follow</button>
          </div>
        </div>
      </section>
    </header>
  );
}
