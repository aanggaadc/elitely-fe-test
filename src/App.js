import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import { debounce } from "./helper/utils";
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
    else return <div>loading</div>;
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
        <aside className="sidebar">test</aside>
      </main>

      <Footer />
    </>
  );
}

export default App;
