import React, { Children, useState, useEffect } from "react";
import Pad from "./Pad";
import { Howl, Howler } from "howler";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
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
  const [playingSounds, setPlayingSounds] = useState([]);
  const [loopEnd, setLoopEnd] = useState(false);

  //* creating howl sound files
  const futureDrumsHowl = new Howl({
    src: [FutureDrums],
  });
  const effectsHowl = new Howl({
    src: [Effects],
  });
  const bassHowl = new Howl({
    src: [Bass],
  });
  const guitarHowl = new Howl({
    src: [Guitar],
  });
  const realDrumsHowl = new Howl({
    src: [RealDrums],
  });
  const percussionsHowl = new Howl({
    src: [Percussions],
  });
  const alienHowl = new Howl({
    src: [Alien],
  });
  const realDrums2Howl = new Howl({
    src: [RealDrums2],
  });
  const scarySoundHowl = new Howl({
    src: [ScarySound],
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

  //* arr of the upcoming loop on next loop cycle
  const nextLoop = padsState
    .filter((pad) => {
      return pad.isOn;
    })
    .map((obj) => obj.soundFile);

  //* useeffect that acts like a reply
  useEffect(() => {
    if (isPlaying) {
      pressPlay();
    }
  }, [loopEnd]);

  //* play handler stops current loop and starts a new one
  const pressPlay = () => {
    if (playingSounds == false && nextLoop == false) {
      return;
    }
    playingSounds?.forEach((howl) => {
      howl.stop();
    });
    nextLoop[0].once("end", () => {
      setLoopEnd(!loopEnd);
    });
    nextLoop.forEach((howl) => {
      howl.play();
    });
    setPlayingSounds(nextLoop);
    setIsPlaying(true);
  };

  //* stop handler
  const pressStop = () => {
    setIsPlaying(false);
    playingSounds.forEach((howl) => {
      howl.stop();
    });
  };

  return (
    <div className='looper-container' style={{ backgroundColor: "#3f3f3f" }}>
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
      <div className='control-panel'>
        <div className='play-stop'>
          <PlayCircleOutlineIcon
            onClick={pressPlay}
            style={{
              fontSize: "4rem",
              margin: "10px",
              color: isPlaying && "green",
            }}
          />
          <StopIcon
            onClick={pressStop}
            style={{ fontSize: "4rem", margin: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}
