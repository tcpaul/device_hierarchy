import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";

import { Nokia } from "./components/devices/Nokia";
import { IPhone6s } from "./components/devices/IPhone6s";
import { ColdCard } from "./components/devices/ColdCard";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nokia />
      <IPhone6s />
      <ColdCard />
    </div>
  );
};

export default App;
