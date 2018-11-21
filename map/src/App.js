import Draggable from "react-draggable";
import React, { useState } from "react";

import "./App.css";
import { Nokia } from "./components/devices/Nokia";
import { IPhone6s } from "./components/devices/IPhone6s";
const App = () => {
  return (
    <div className="App">
      <Nokia />
      <IPhone6s />
    </div>
  );
};

export default App;
