import React, { Component } from "react";
import LanguageContext from "../../contexts/language_context.js";
import ColourContext from "../../contexts/colour_context.js";

// #1: obtaining information through this.context
// class Button extends Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === "english" ? "Submit" : "提交";
//     return <button className="btn">{text}</button>
//   };
// };

// export default Button;

// #2: obtaining information through consumers
  // A function must be passed into a consumer as a child, which will then be invoked to get information out of the context objective
  // Main benefits of using Consumers - ability to use information out of multiple context objects (vs single context object via this.context)
class Button extends Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "提交"
  };

  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColourContext.Consumer>
        {colour => this.renderButton(colour)}
      </ColourContext.Consumer>
    );
  };
};

export default Button;

