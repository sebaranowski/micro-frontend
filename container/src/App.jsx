import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'child/Counter2';

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
