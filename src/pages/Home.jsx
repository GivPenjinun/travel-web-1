import { useState, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { AiOutlineBars } from "react-icons/ai";

function Home() {
  const [isBtnToggle, setBtnToggle] = useState(true);
  const [barToggle, setBarToggle] = useState("search-bar-container");
  const [logInToggle, setLogInToggle] = useState("login-form-container");
  const [menuToggle, setMenuToggle] = useState("navBar");

  const handlerBtn = () => {
    if (isBtnToggle == true) {
      setBtnToggle(false);
      setBarToggle("search-bar-container active");
    } else {
      setBtnToggle(true);
      setBarToggle("search-bar-container");
    }
  };

  const handlerLogIn = () => {
    setLogInToggle("login-form-container active");
  };

  const handlerCloseLogIn = () => {
    setLogInToggle("login-form-container");
  };

  const handlerMenuToggle = () => {
    if (menuToggle === "navBar") {
      setMenuToggle("navBar active");
    } else {
      setMenuToggle("navBar");
    }
  };

  return (
    <>
      <header>
        <button id="menu-bar" onClick={handlerMenuToggle}>
          <AiOutlineBars />
        </button>
        <a href="#" className="logo">
          <span>T</span>ravel
        </a>
        <nav className={menuToggle}>
          <a href="#Home">Home</a>
          <a href="#Book">Book</a>
          <a href="#Packages">Packages</a>
          <a href="#Services">Services</a>
          <a href="#Gallery">Gallery</a>
          <a href="#Review">Review</a>
          <a href="#Contact">Contact</a>
        </nav>

        <button className="icons" onClick={handlerBtn}>
          {isBtnToggle ? (
            <FaSearch id="search-btn" />
          ) : (
            <ImCross id="search-btn" />
          )}
        </button>
        <button className="icons" onClick={handlerLogIn}>
          <BsFillPersonFill id="login-btn" />
        </button>

        <form action="" className={barToggle}>
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar">
            <FaSearch id="search-btn" />
          </label>
        </form>
      </header>
      <div className={logInToggle}>
        <button onClick={handlerCloseLogIn}>
          <ImCross id="form-close" />
        </button>
        <form action="">
          <h3>Login</h3>
          <input type="email" className="box" placeholder="enter your email" />
          <input
            type="password"
            className="box"
            placeholder="enter your passwword"
          />
          <input type="submit" value="login now" className="btn" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
          <p>
            forget passwword? <a href="#">click here</a>
          </p>
          <p>
            don't have an account? <a href="#">register now</a>
          </p>
        </form>
      </div>
      <section className="home" id="home">
        <div className="content">
          <h3>adventure is waiting...</h3>
          <p>discover new place with us</p>
          <a href="#" className="btn">
            discover more
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
