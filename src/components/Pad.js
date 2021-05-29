import React from "react";
import "./pad.css";
import Button from "@material-ui/core/Button";

export default function Pad({ padData, padsArr, setPadsArr }) {
  const handleClick = (target) => {
    if (target.tagName === "BUTTON" || target.tagName === "SPAN") {
      preview();
    } else {
      let newArr = padsArr.map((data) => {
        data.soundFile === padData.soundFile && (data.isOn = !data.isOn);
        return data;
      });
      setPadsArr(newArr);
    }
  };

  const preview = () => {
    if (padData.soundFile.playing()) {
      padData.soundFile.stop();
      return;
    } else {
      padData.soundFile.play();
    }
  };

  return (
    <div
      id='pad'
      className={padData.isOn ? "single-pad-on" : "single-pad-off"}
      onClick={(e) => {
        handleClick(e.target);
      }}>
      <padData.icon id='icon' style={{ fontSize: "4rem" }} />
      <Button id='preview' className='preview-button' variant='contained'>
        preview
      </Button>
    </div>
  );
}
