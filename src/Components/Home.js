import React, { useState } from "react";
// import fonts from "./DifferentFont";

export default function Home(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !!!","success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase was Clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !!!","success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied !!!","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared !!!","success");
  };

  // const handleDifFontClick = () => {
  //   const randomIndex = Math.floor(Math.random() * fonts.length);
  //   const fontFamily = fonts[randomIndex]
  //   setFontFamily(fontFamily);
  // };

  const onAlternatingCase = () => {
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
        if ((index % 2) === 0) {
            newtext += text[index].toLowerCase()
        }
        else {
            newtext += text[index].toUpperCase()
        }

    }
    setText(newtext);
    props.showAlert("Alternating case has been capitalize !!!","success");
  }

  const capitalize = () => {
    const titleCase = text
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

   setText(titleCase);
   props.showAlert("Each word has been capitalize !!!","success");

}

  const handleOnChange = (event) => {
    // console.log("OnChange was Clicked")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "Text Here" // Wrong way to change the state
  //   setText("Text Here"); // Correct way to change the state

const btnStyle = {
  cursor: "pointer"
}

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        />
      </div>
      <div className="d-flex flex-row flex-wrap">
        <button style={btnStyle} disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button style={btnStyle} disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        {/* <button className="btn btn-primary" onClick={handleDifFontClick}>
          Random Fonts
        </button> */}
        
        <button style={btnStyle} disabled={text.length === 0} className="btn btn-primary m-2" onClick={onAlternatingCase}>
          Alternating Case
        </button>
        <button style={btnStyle} disabled={text.length === 0} className="btn btn-primary m-2" onClick={capitalize}>
          Capitalize
        </button>
        <button style={btnStyle} disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCopy}>
          Copy text
        </button>
        <button style={btnStyle} disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <h2 className="my-2">Your text summary</h2>
      <small>
        <b>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </b>
      </small>
      <br />
      <small>
        <b>
          {text.split(" ").length} words take {0.008 * text.split(" ").length}{" "}
          Minutes to read
        </b>
      </small>{" "}
      <br />
      <h2 className="my-2">Preview Text</h2>
      <p>{text.length>0?text:"Enter something in above textbox to preview it here.."}</p>
    </div>
  );
}
