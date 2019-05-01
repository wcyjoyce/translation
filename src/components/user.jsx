import React, { Component } from "react";

import Button from "./form/button.jsx";
import Field from "./form/field.jsx";

class User extends Component {
  render() {
    return (
      <div className="form">
        <Field />
        <Button />
      </div>
    );
  };
};

export default User;
