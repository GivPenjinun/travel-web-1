import "./Packages.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { AddStar } from "./AddStars";
import { location } from "../data/location.js";

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
          {location.map((item, index) => {
            return (
              <>
                <div className="box" key={index}>
                  <img src={item.image} alt="travel place" />
                  <div className="content">
                    <h3>
                      <ImLocation2 className="icon" />
                      {item.title}
                    </h3>
                    <p>Lorem</p>
                    <div className="stars icon">
                      <AddStar number={item.rating} />
                    </div>
                    <div className="price">
                      ${item.discountPrice}
                      <span>${item.price}</span>
                    </div>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Packages;
