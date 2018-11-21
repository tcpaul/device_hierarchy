import Draggable from "react-draggable";
import React, { useState } from "react";

import "./Nokia.css";

export const Nokia = () => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div className="nokia">nokia</div>
    </Draggable>
  );
};
