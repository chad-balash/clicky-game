import React from "react";
import "./Title.css";

const Title = props => <div><h1 className="game-title">{props.children}</h1><p  className="instructions">Click on an image to earn points, but don't click on any more than once!</p></div>;

export default Title;
