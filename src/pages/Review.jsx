import "./Review.css";
import { reviews } from "../data/reviews.js";
import { AddStar } from "./AddStars";
import travel4 from "../assets/travel4.jpg";
import travel5 from "../assets/travel4.jpg";
import travel6 from "../assets/travel4.jpg";

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
          <div className="wrapper">
            <div className="slider">
              <div className="box">
                <img src={travel4} />
                <h3>John</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  tenetur dignissimos necessitatibus qui magni eveniet, aliquam
                  optio aut placeat a, ab deleniti corporis velit enim eius
                  quibusdam modi obcaecati. Dolores!
                </p>
                <div className="stars icon">
                  <AddStar number={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
