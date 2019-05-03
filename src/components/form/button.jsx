import React, { Component } from "react";
import LanguageContext from "../../contexts/language_context.js";

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "提交";
    return <button className="btn">{text}</button>
  };
};

export default Button;
