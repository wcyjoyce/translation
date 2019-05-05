import React, { Component } from "react";

import User from "./user.jsx";
import { LanguageStore } from "../contexts/language_context.js";
import ColourContext from "../contexts/colour_context.js";
import LanguageSelector from "./language_selector.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LanguageStore>
          <LanguageSelector />
          <div>
            <ColourContext.Provider value={"primary"}>
              <User />
            </ColourContext.Provider>
          </div>
        </LanguageStore>
      </div>
    );
  };
};

export default App;
