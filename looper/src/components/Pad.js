import React, { useState } from "react";
import "./pad.css";

export default function Pad() {
  const [turnedOn, setTurnedOn] = useState(false);
  const handleClick = () => {
    setTurnedOn(!turnedOn);
  };

  return (
    <div
      className={turnedOn ? "single-pad-on" : "single-pad-off"}
      onClick={handleClick}>
      Pad
    </div>
  );
}
