import React from "react";
import ReactDOM from "react-dom/client";

// Correct the tabIndex attribute and component names
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// Correct the functional component name and render method
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// Correct the way ReactDOM.createRoot is used
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
