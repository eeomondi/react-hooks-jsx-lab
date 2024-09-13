import React from "react";

// Assume these variables are defined and imported correctly
const name = "Your Name";
const city = "Your City";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

