import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import Contact from "./components/Contact";
import Thrivehive from "./components/Thrivehive";
import Yeti from "./components/Yeti";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactFullpage
          scrollingSpeed={1000} /* Options here */
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Contact />
              </div>

              <div className="section">
                <Thrivehive />
              </div>

              <div className="section">
                <Yeti />
              </div>

              <div className="section">
                <Education />
              </div>

              <div className="section">
                <Skills />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </header>
    </div>
  );
}

export default App;
