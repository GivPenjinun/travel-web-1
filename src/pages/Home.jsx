import { useState, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

import video from "../assets/video.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";

function Home() {
  function handlerVidBtn(btn) {
    let OldButton = document.querySelector(".vid-btn.active");
    OldButton.classList.remove("active");
    let button = document.getElementById(`${btn}`);
    button.classList.add("active");
    let src = button.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  }

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>adventure is waiting...</h3>
          <p>discover new place with us</p>
          <a href="#" className="btn">
            discover more
          </a>
        </div>

        <div className="controls">
          <button
            className="vid-btn active"
            id="vid1"
            data-src={video}
            onClick={() => handlerVidBtn("vid1")}
          ></button>
          <button
            className="vid-btn"
            id="vid2"
            data-src={video2}
            onClick={() => handlerVidBtn("vid2")}
          ></button>
          <button
            className="vid-btn"
            id="vid3"
            data-src={video3}
            onClick={() => handlerVidBtn("vid3")}
          ></button>
          <button
            className="vid-btn"
            id="vid4"
            data-src={video4}
            onClick={() => handlerVidBtn("vid4")}
          ></button>
          <button
            className="vid-btn"
            id="vid5"
            data-src={video5}
            onClick={() => handlerVidBtn("vid5")}
          ></button>
        </div>

        <div className="video-container">
          <video src={video} id="video-slider" loop autoPlay muted></video>
        </div>
      </section>
    </>
  );
}

export default Home;
