import React, { Component } from "react";

import LanguageContext from "../contexts/language_context.js";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="language">
        <strong>Select a language:</strong>
        <i className="flag us" onClick={() => this.context.onLanguageChange("english")}></i>
        <i className="flag cn" onClick={() => this.context.onLanguageChange("chinese")}></i>
        {/*<div>Selected language: {this.props.language[0].toUpperCase() + this.props.language.slice(1)}</div>*/}
      </div>
    );
  };
};

export default LanguageSelector;
