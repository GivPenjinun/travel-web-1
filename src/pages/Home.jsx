import { useState, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import video from "../assets/video.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";

function Home() {
  const [toggleVideo, setToggleVideo] = useState();
  const [currentCase, setCurrentCase] = useState(0);
  const [vid, setVideo] = useState(video);

  function currentSelector(e) {
    setCurrentCase(Number(e.target.value));
  }

  return (
    <>
      <Header />
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
            value={0}
            className={currentCase === 0 ? "vid-btn active" : "vid-btn"}
            data-src={video}
            onClick={currentSelector}
          ></button>
          <button
            value={1}
            className={currentCase === 1 ? "vid-btn active" : "vid-btn"}
            data-src={video2}
            onClick={currentSelector}
          ></button>
          <button className="vid-btn" data-src={video3}></button>
          <button className="vid-btn" data-src={video4}></button>
          <button className="vid-btn" data-src={video5}></button>
        </div>

        <div className="video-container">
          <video src={video} id="video-slider" loop autoPlay muted></video>
        </div>
      </section>
    </>
  );
}

export default Home;
