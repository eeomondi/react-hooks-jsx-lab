import React from "react";

// Assume this image is imported correctly
import image from "./path/to/image.jpg";

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
