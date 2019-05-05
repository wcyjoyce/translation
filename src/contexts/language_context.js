// #1: Using context
  // 1) Define default value
  // 2) Hook up context object to class component
  // 3) "this.context" is now set up

// import React, { Component } from "react";
// export default React.createContext(); // default value: whatever is inside "()"

// #2: Implementing a store
import React, { Component } from "react";

const Context = React.createContext("english"); // Context must be capitalised for JSX to recognise it as a component

export class LanguageStore extends Component {
  state = { language: "english" }

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    // ensures that components inside of provider have access to context object
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  };
};

export default Context;
