import React, { Component } from "react";

class LanguageSelector extends Component {
  render() {
    return (
      <div className="language">
        <strong>Select a language:</strong>
        <i className="flag us" onClick={() => this.props.onLanguageChange("english")}></i>
        <i className="flag cn" onClick={() => this.props.onLanguageChange("chinese")}></i>
        <div>Selected language: {this.props.language[0].toUpperCase() + this.props.language.slice(1)}</div>
      </div>
    );
  };
};

export default LanguageSelector;
