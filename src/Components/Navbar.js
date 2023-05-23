import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const bgColorPicker = {
  //   position: "absolute",
  //   width: "26.2vh",
  //   top: "2.2vh",
  //   left: "91vh",
  //   opacity:"0"
  // };
  // const txtColorPicker = {
  //   position: "absolute",
  //   width: "18.5vh",
  //   top: "2.2vh",
  //   left: "118.4vh",
  //   opacity:"0"
  // };

  // const changeBgColor = () => {
    // const color = document.getElementById("bgColorPicker").value;
  //   const bgBtn = document.getElementById("bgBtn");
  //   bgBtn.style.backgroundColor = color;
  //   props.changeBgColor(color);
  // };

  // const changeTextColor = () => {
  //   const color = document.getElementById("txtColorPicker").value;
  //   const txtBtn = document.getElementById("txtBtn");
  //   txtBtn.style.backgroundColor = color;
  //   props.changeTextColor(color);
  // };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/followus">
                {props.followUsText}
              </Link>
            </li>
          </ul>
          {/* <div className="colorContainer d-flex">
            <div className="bgContainer">
              <button
                className="btn btn-secondary btn-sm "
                type="button"
                id="bgBtn"
                onChange={changeBgColor}
              >
                Select Background Color
                <input
                type="color"
                name="bgColorPicker"
                id="bgColorPicker"
                style={bgColorPicker}
              />
              </button>
            </div>
            <div className="txtContainer">
              <button
                className="btn btn-secondary btn-sm"
                type="button"
                id="txtBtn"
                onChange={changeTextColor}
              >
                Select Text Color
                <input
                  type="color"
                  name="txtColorPicker"
                  id="txtColorPicker"
                  style={txtColorPicker}
                />
              </button>
            </div>
          </div> */}
          <div
            className={`toggleContainer form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            } `}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              aria-checked="false"
              id="flexSwitchCheckDefault"
              onChange={props.toggleMode}
            />
            <label className="form-check-label" label="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  // title : PropTypes.string.isRequired,
  followUsText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  followUsText: "Follow Us Text Here",
  // This is used when no props is set
};
