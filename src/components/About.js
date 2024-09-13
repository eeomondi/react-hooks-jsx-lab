import React from "react";
import image from "./my-image.jpg"; // Update this to the actual image file name and path

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a short paragraph about me. Feel free to customize it.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
