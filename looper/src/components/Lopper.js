import React, { useState } from "react";
import Pad from "./Pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Sound1 from "../loops/120_future_funk_beats_25.mp3";
import Sound2 from "../loops/120_stutter_breakbeats_16.mp3";
import Sound3 from "../loops/BassWarwickheavyfunkgrooveonE120BPM.mp3";
import Sound4 from "../loops/electricguitarcoutryslide120bpm-B.mp3";
import Sound5 from "../loops/FUD_120_StompySlosh.mp3";
import Sound6 from "../loops/GrooveB_120bpm_Tanggu.mp3";
import Sound7 from "../loops/MazePolitics_120_Perc.mp3";
import Sound8 from "../loops/PAS3GROOVE1.03B.mp3";
import Sound9 from "../loops/SilentStar_120_Em_OrganSynth.mp3";

export default function Lopper() {
  const [playing, setPlaying] = useState(false);
  const pressPlay = () => {
    setPlaying(!playing);
  };
  const pressStop = () => {
    setPlaying(false);
  };

  const sounds = [
    Sound1,
    Sound2,
    Sound3,
    Sound4,
    Sound5,
    Sound6,
    Sound7,
    Sound8,
    Sound9,
  ];
  return (
    <div style={{ backgroundColor: "#3f3f3f", borderRadius: "10px" }}>
      <div className='control-panel'>
        <button onClick={pressPlay}>
          <PlayArrowIcon style={{ fontSize: "3rem", margin: "10px" }} />
        </button>
        <button onClick={pressStop}>
          <StopIcon style={{ fontSize: "3rem", margin: "10px" }} />
        </button>
      </div>
      <div className='pad-container'>
        {sounds.map((sound) => (
          <Pad props={sound} />
        ))}

        {/* <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad /> */}
      </div>
    </div>
  );
}
