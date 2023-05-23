import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Home from "./Components/Home";
import About from "./Components/About";
import FollowUs from "./Components/FollowUs";
import Alert from "./Components/Alert";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [bgColor, setBgColor] = useState("#ffffff");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode hase been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode hase been enabled", "success");
    }
  };

  const changeBgColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  const changeTextColor = (color) => {
    document.body.style.color = color;
  };


  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          followUsText="Follow Us"
          mode={mode}
          toggleMode={toggleMode}
          changeBgColor={changeBgColor}
          changeTextColor={changeTextColor}
        />
        {/* The below line take deafult props */}
        {/* <Navbar/>  */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/" element={<Main mode={mode}/>} />
            <Route
              exact path="/home"
              element={
                <Home
                  showAlert={showAlert}
                  heading="Enter text to analyze"
                  mode={mode}
                />
              }
            />
            <Route exact path="/aboutus" element={<About />} />
            <Route exact path="/followus" element={<FollowUs />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
