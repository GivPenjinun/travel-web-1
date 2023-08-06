import "./BrandSlider.css";
import travel7 from "../assets/travel4.jpg";
import travel8 from "../assets/travel4.jpg";
import travel9 from "../assets/travel4.jpg";
import travel10 from "../assets/travel4.jpg";

function BrandSlider() {
  return (
    <>
      <section className="brandSlider">
        <img src={travel7} alt="location" />
        <img src={travel8} alt="location" />
        <img src={travel9} alt="location" />
        <img src={travel10} alt="location" />
      </section>
    </>
  );
}

export default BrandSlider;
