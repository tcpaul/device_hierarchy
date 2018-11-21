import React, { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Draggable>
        <div className="iPhone6s" draggable="true">
          iphone 6s
        </div>
      </Draggable>
    </div>
  );
};

export default App;
