import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import "./App.scss";
const sectionButton = ["Main", "About", "Posts"];

function App() {
  const [stage, setStage] = useState("Main");

  const contentView = () => {
    if (stage === "Main") return <Main />;
    else if (stage === "About") return <About />;
    else return <div>loading</div>;
  };

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
