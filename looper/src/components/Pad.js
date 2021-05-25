import React, { useState } from "react";
import "./pad.css";

export default function Pad() {
  const [turnedOn, setTurnedOn] = useState(false);
  const handleClick = () => {
    setTurnedOn(!turnedOn);
  };
  return (
    <div
      className='single-pad'
      style={{ backgroundColor: turnedOn ? "teal" : "grey" }}
      onClick={handleClick}>
      Pad
    </div>
  );
}
