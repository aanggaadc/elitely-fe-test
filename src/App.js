import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.scss";
const sectionButton = ["Main", "About", "Posts"];

function App() {
  const [stage, setStage] = useState("main");
  return (
    <>
      <Header />

      <main className="main-container">
        <section className="main">
          <div className="section-button-container">
            {sectionButton.map((item, index) => {
              return (
                <button key={index} className="section-btn btn-icon">
                  {item}
                </button>
              );
            })}
          </div>

          <Main />
        </section>
        <aside className="sidebar">test</aside>
      </main>

      <Footer />
    </>
  );
}

export default App;
