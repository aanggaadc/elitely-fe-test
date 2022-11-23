import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Card from "./components/Card";
import { debounce } from "./helper/utils";
import { newMember, verifiedMember } from "./helper/dummyData";
import "./App.scss";
const sectionButton = ["Main", "About", "Posts"];

function App() {
  const [stage, setStage] = useState("Main");
  const [deviceType, setDeviceType] = useState("");

  const checkDeviceType = () => {
    const { innerWidth } = window;
    if (innerWidth < 768) setDeviceType("mobile");
    else setDeviceType("desktop");
  };

  const contentView = () => {
    if (stage === "Main") return <Main />;
    else if (stage === "About") return <About deviceType={deviceType} />;
    else return <div style={{ textAlign: "center" }}>Coming Soon!!</div>;
  };

  useEffect(() => {
    checkDeviceType();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleResize = debounce(function () {
      checkDeviceType();
    }, 250);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />

      <main className="main-container">
        <section className="main">
          <div className="section-button-container">
            {sectionButton.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`section-btn btn-icon ${
                    stage === item && "active"
                  }`}
                  onClick={() => setStage(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {contentView()}
        </section>
        <aside className="sidebar">
          <div className="new-member-container">
            <div className="new-member-text">Meet our new members</div>
            {newMember.map((item, index) => {
              const { username, badge, online, avatar } = item;
              return (
                <Card
                  key={index}
                  type="new-member"
                  avatar={avatar}
                  username={username}
                  badge={badge}
                  online={online}
                />
              );
            })}
            <button className="btn-loadmore">Load More</button>
          </div>
          <div className="recommendation-container">
            <div className="new-member-text">You might also wanna check</div>
            {verifiedMember.map((item, index) => {
              const { avatar, badge, about, username } = item;
              return (
                <Card
                  key={index}
                  type="verified"
                  badge={badge}
                  avatar={avatar}
                  about={about}
                  username={username}
                />
              );
            })}
            <button className="btn-loadmore">Load More</button>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default App;
