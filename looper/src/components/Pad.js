import React from "react";
import "./pad.css";

export default function Pad({ padData, padsArr, setPadsArr }) {
  const handleClick = () => {
    let newArr = padsArr.map((data) => {
      data.soundFile === padData.soundFile && (data.isOn = !data.isOn);
      return data;
    });
    setPadsArr(newArr);
  };

  return (
    <div
      className={padData.isOn ? "single-pad-on" : "single-pad-off"}
      onClick={handleClick}>
      <padData.icon style={{ fontSize: "3rem" }} />
    </div>
  );
}
