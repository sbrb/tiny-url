import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InputShortener from "./components/Main/InputShortener";
import LinkResult from "./components/Main/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <InputShortener setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
      </div>
      <Footer />
    </>
  );
}

export default App;
