import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <div className="mainContainer">
      <img
        src="./logo192.png"
        style={
          props.mode === "dark" ?  {filter: "invert(1)"}  :  {filter: "invert(0)"}
        }
        alt="Logo"
      />
      <h1>Welcome To Our TextUtils Website</h1>
      <h3>
        This website is helpful to people to manipulate the text. In our website
        we provide convert text to uppercase, lowercase,capitalize, alternating
        text, copy text or many other functionality.
      </h3>
    </div>
  );
}
