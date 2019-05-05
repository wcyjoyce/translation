import React, { Component } from "react";
import LanguageContext from "../../contexts/language_context.js";

class Field extends Component {
  static contextType = LanguageContext; // hooking up a context object to a class component

  render() {
    const text = this.context.language === "english" ? "Name" : "姓名";

    return (
      <div>
        <label>{text}</label>
        <input />
      </div>
    );
  };
};

export default Field;
