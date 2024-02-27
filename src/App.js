import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portifolio from "./Components/Portifolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <Skills />
        <Portifolio />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
