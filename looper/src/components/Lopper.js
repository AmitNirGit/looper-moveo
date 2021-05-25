import React from "react";
import Pad from "./Pad";

export default function Lopper() {
  return (
    <div style={{ backgroundColor: "#3d3d3d", borderRadius: "10pxP" }}>
      hey im main
      <div className='pad-container'>
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
      </div>
    </div>
  );
}
