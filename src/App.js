import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [stage, setStage] = useState("main");
  return (
    <>
      <Header />
    </>
  );
}

export default App;
