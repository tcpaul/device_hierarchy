import Draggable from "react-draggable";
import React, { useState } from "react";

import "./ColdCard.css";

export const ColdCard = () => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div className="coldcard">coldcard</div>
    </Draggable>
  );
};
