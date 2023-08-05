import "./Book.css";
import travel11 from "../assets/travel11.jpg";

function Book() {
  return (
    <>
      <section className="book" id="book">
        <h1 className="heading">
          <span>B</span>
          <span>O</span>
          <span>O</span>
          <span>K</span>
          <span className="space"></span>
          <span>N</span>
          <span>O</span>
          <span>W</span>
        </h1>

        <div className="booking-row">
          <div className="image">
            <img src={travel11} alt="travel pic" />
          </div>
          <form action="">
            <div className="input-box">
              <h3>Where to</h3>
              <input type="text" placeholder="place name" />
            </div>
            <div className="input-box">
              <h3>How Many</h3>
              <input type="number" placeholder="Number of guests" />
            </div>
            <div className="input-box">
              <h3>Arrivals</h3>
              <input type="date" />
            </div>
            <div className="input-box">
              <h3>Leaving</h3>
              <input type="date" />
            </div>
            <button className="btn">Book Now</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Book;
