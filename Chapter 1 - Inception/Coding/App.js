import React from "react";
import ReactDOM from "react-dom/client";

// *** ParseRequire
window.parcelRequire = null;

const heading1 = React.createElement(
  "span",
  {
    className: "main-header",
    style: {
      fontSize: "100px",
      color: "Red",
      border: "1px solid red",
      borderRadius: "999px",
    },
    id: "test",
    type: "password",
  },
  "Namaste React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
console.log(heading1);

console.log(root);
