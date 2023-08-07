import "./Review.css";
import { reviews } from "../data/reviews.js";
import { AddStar } from "./AddStars";
import travel4 from "../assets/travel4.jpg";
import travel5 from "../assets/travel4.jpg";
import travel6 from "../assets/travel4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Review() {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          <span>R</span>
          <span>E</span>
          <span>V</span>
          <span>I</span>
          <span>E</span>
          <span>W</span>
        </h1>
        <div className="review-slider">
          <div className="slider">
            {reviews.map((item, index) => {
              return (
                <>
                  <div className="box">
                    <img src={item.image} />
                    <h3>{item.name}</h3>
                    <p>{item.details}</p>
                    <div className="stars icon">
                      <AddStar number={item.rating} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
