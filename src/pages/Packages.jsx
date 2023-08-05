import "./Packages.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

function Packages() {
  return (
    <>
      <section className="packages" id="packages">
        <h1 className="heading">
          <span>P</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="" alt="" />
            <div className="content">
              <h3>
                <ImLocation2 className="icon" />
                mumbai
              </h3>
              <p>Lorem</p>
              <div className="stars">
                <AiFillStar className="icon" />
                <AiOutlineStar className="icon" />
              </div>
              <div className="price">
                $90.00<span className="discount">$120.00</span>
              </div>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
