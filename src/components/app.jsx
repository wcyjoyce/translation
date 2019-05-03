import React, { Component } from "react";

import User from "./user.jsx";
import LanguageContext from "../contexts/language_context.js";
import ColourContext from "../contexts/colour_context.js";
import LanguageSelector from "./language_selector.jsx";

class App extends Component {
  state = { language: "english", colour: "primary" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} language={this.state.language} />
        <div>
          <ColourContext.Provider value={this.state.colour}>
            <LanguageContext.Provider value={this.state.language}>
              <User />
            </LanguageContext.Provider>
          </ColourContext.Provider>
        </div>
      </div>
    );
  };
};

export default App;
