import Draggable from "react-draggable";
import React, { useState } from "react";

import "./IPhone6s.css";

export const IPhone6s = () => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div className="iPhone6s" draggable="true">
        iphone 6s
      </div>
    </Draggable>
  );
};
