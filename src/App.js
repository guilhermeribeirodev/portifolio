import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import * as text from "./Text";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About"
          text={text.about}
          dark={true}
          id="section1"
        >
        </Section>
        <Section
          title="Skills"
          text={text.skills}
          dark={false}
          id="section2"
        />
        <Section
          title="Portifolio"
          text={text.portifolio}
          dark={true}
          id="section3"
        />
        <Section
          title="Experience"
          text={text.experience}
          dark={false}
          id="section4"
        />
        <Section
          title="Contact"
          text={text.contact}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
