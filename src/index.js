import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import Rpm from "./Pages/Rpm/Rpm";


// import React from "react";
import { render } from "react-dom";
// import { App } from "./App";
// import { Rpm } from "./Pages/Rpm/Rpm";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Rpm /> */}
  </React.StrictMode>
);
