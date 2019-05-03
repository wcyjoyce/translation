import React, { Component } from "react";

import User from "./user.jsx";
import LanguageContext from "../contexts/language_context.js";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="language">
        <strong>Select a language:</strong>
        <i className="flag us" onClick={() => this.onLanguageChange("english")}></i>
        <i className="flag cn" onClick={() => this.onLanguageChange("chinese")}></i>
        <div>Selected language: {this.state.language[0].toUpperCase() + this.state.language.slice(1)}</div>

        <div>
          <LanguageContext.Provider value={this.state.language}>
            <User />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  };
};

export default App;
