import React, { useState } from "react";
import Pad from "./Pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Sound1 from "../loops/120_future_funk_beats_25.mp3";

export default function Lopper() {
  const [playing, setPlaying] = useState(false);
  const pressPlay = () => {
    setPlaying(!playing);
  };
  const pressStop = () => {
    setPlaying(false);
  };
  return (
    <div style={{ backgroundColor: "#3e3d3c", borderRadius: "10px" }}>
      <div className='control-panel'>
        <button onClick={pressPlay}>
          <PlayArrowIcon style={{ fontSize: "3rem", margin: "10px" }} />
        </button>
        <button onClick={pressStop}>
          <StopIcon style={{ fontSize: "3rem", margin: "10px" }} />
        </button>
      </div>
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
