import React from "react";

export default React.createContext(); // default value: whatever is inside "()"

// Using context:
// 1) Define default value
// 2) Hook up context object to class component
// 3) "this.context" is now set up
