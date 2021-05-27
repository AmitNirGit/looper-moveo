import React, { Children, useState, useEffect } from "react";
import Pad from "./Pad";
import { Howl, Howler } from "howler";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import FutureDrums from "../loops/120_future_funk_beats_25.mp3";
import Effects from "../loops/120_stutter_breakbeats_16.mp3";
import Bass from "../loops/BassWarwickheavyfunkgrooveonE120BPM.mp3";
import Guitar from "../loops/electricguitarcoutryslide120bpm-B.mp3";
import RealDrums from "../loops/FUD_120_StompySlosh.mp3";
import Percussions from "../loops/GrooveB_120bpm_Tanggu.mp3";
import Alien from "../loops/MazePolitics_120_Perc.mp3";
import RealDrums2 from "../loops/PAS3GROOVE1.03B.mp3";
import ScarySound from "../loops/SilentStar_120_Em_OrganSynth.mp3";
import {
  FaDrum,
  FaGuitar,
  FaRedditAlien,
  FaSignature,
  FaDrumSteelpan,
} from "react-icons/fa";
import { GiGuitarBassHead, GiDrum, GiChurch, GiOilDrum } from "react-icons/gi";

export default function Lopper() {
  const [isPlaying, setIsPlaying] = useState(false);

  //* creating howl sound files
  const futureDrumsHowl = new Howl({
    src: [FutureDrums],
    loop: true,
    onend: () => {
      console.log("ended");
    },
  });
  const effectsHowl = new Howl({
    src: [Effects],
    loop: true,
  });
  const bassHowl = new Howl({
    src: [Bass],
    loop: true,
  });
  const guitarHowl = new Howl({
    src: [Guitar],
    //  loop: true,
  });
  const realDrumsHowl = new Howl({
    src: [RealDrums],
    //  loop: true,
  });
  const percussionsHowl = new Howl({
    src: [Percussions],
    //  loop: true,
  });
  const alienHowl = new Howl({
    src: [Alien],
    //  loop: true,
  });
  const realDrums2Howl = new Howl({
    src: [RealDrums2],
    //  loop: true,
  });
  const scarySoundHowl = new Howl({
    src: [ScarySound],
    //  loop: true,
  });

  //*pads state managment
  const [padsState, setPadsState] = useState([
    {
      soundFile: futureDrumsHowl,
      icon: FaDrumSteelpan,
      isOn: false,
    },
    {
      soundFile: effectsHowl,
      icon: FaSignature,
      isOn: false,
    },
    {
      soundFile: bassHowl,
      icon: GiGuitarBassHead,
      isOn: false,
    },
    {
      soundFile: guitarHowl,
      icon: FaGuitar,
      isOn: false,
    },
    {
      soundFile: realDrumsHowl,
      icon: GiDrum,
      isOn: false,
    },
    {
      soundFile: percussionsHowl,
      icon: GiOilDrum,
      isOn: false,
    },
    {
      soundFile: alienHowl,
      icon: FaRedditAlien,
      isOn: false,
    },
    {
      soundFile: realDrums2Howl,
      icon: FaDrum,
      isOn: false,
    },
    {
      soundFile: scarySoundHowl,
      icon: GiChurch,
      isOn: false,
    },
  ]);

  //*active sound files arr
  const loadedSounds = padsState
    .filter((pad) => {
      return pad.isOn;
    })
    .map((obj) => obj.soundFile);
  console.log(loadedSounds);

  useEffect(() => {
    if (isPlaying) {
      // pressPlay();
    }
  }, [loadedSounds]);

  //*play handler
  const pressPlay = () => {
    setIsPlaying(true);
    loadedSounds.forEach((howl) => {
      howl.play();
    });
  };

  //*stop handler
  const pressStop = () => {
    setIsPlaying(false);
    loadedSounds.forEach((howl) => {
      howl.stop();
    });
  };

  return (
    <div
      className='looper-container'
      style={{ backgroundColor: "#3f3f3f", borderRadius: "10px" }}>
      <div className='control-panel'>
        <button onClick={pressPlay}>
          <PlayArrowIcon style={{ fontSize: "3rem", margin: "10px" }} />
        </button>
        <button onClick={pressStop}>
          <StopIcon style={{ fontSize: "3rem", margin: "10px" }} />
        </button>
      </div>
      <div className='pad-container'>
        {padsState.map((pad, index) => (
          <Pad
            key={`pad${index}`}
            padData={pad}
            padsArr={padsState}
            setPadsArr={setPadsState}
          />
        ))}
      </div>
    </div>
  );
}
