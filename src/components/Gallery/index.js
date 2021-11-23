import React from 'react';
import Project1 from "../../assets/covid.jpg";
import Project2 from "../../assets/stopwatch.jpg";
import RunBuddy from "../../assets/hero-bg.jpg";

function Gallery() {
  return (
    <section id="gallery" className="card">
        <div><h1>Projects:</h1></div>
        <a href="https://bpkaufman4.github.io/Group-2-project-1/">
        <p>Project 1: Covid Risk Tracker<img src={Project1} className="img" alt="covid"/></p>
        </a>
        <a href="https://time-track-67235.herokuapp.com/login">
        <p>Project 2: Time Tracker<img src={Project2} className="img" alt="stopwatch"/></p>
        </a>
        <a href="https://missystiner.github.io/run-buddy/">
        <p>Run Buddy<img src={RunBuddy} className="img" alt="running shoes"/></p>
        </a>
    </section>
  );
}

export default Gallery;