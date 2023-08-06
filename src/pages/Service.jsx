import "./Service.css";
import {
  BiSolidHotel,
  BiSolidMegaphone,
  BiWorld,
  BiSolidPlaneAlt,
} from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { GiBackpack } from "react-icons/gi";

function Service() {
  return (
    <>
      <section className="services" id="services">
        <h1 className="heading">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <BiSolidHotel id="icon" />
            <h3>Affordable Hotels</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio
              nostrum cupiditate doloribus unde labore repellendus,
              reprehenderit aperiam asperiores vitae sit eligendi culpa. Cumque,
              perferendis? Omnis sapiente minus possimus sequi?
            </p>
          </div>
          <div className="box">
            <ImSpoonKnife id="icon" />
            <h3>Foods And Drinks</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio
              nostrum cupiditate doloribus unde labore repellendus,
              reprehenderit aperiam asperiores vitae sit eligendi culpa. Cumque,
              perferendis? Omnis sapiente minus possimus sequi?
            </p>
          </div>
          <div className="box">
            <BiSolidMegaphone id="icon" />
            <h3>Safety Guides</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio
              nostrum cupiditate doloribus unde labore repellendus,
              reprehenderit aperiam asperiores vitae sit eligendi culpa. Cumque,
              perferendis? Omnis sapiente minus possimus sequi?
            </p>
          </div>
          <div className="box">
            <BiWorld id="icon" />
            <h3>Around The World</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio
              nostrum cupiditate doloribus unde labore repellendus,
              reprehenderit aperiam asperiores vitae sit eligendi culpa. Cumque,
              perferendis? Omnis sapiente minus possimus sequi?
            </p>
          </div>
          <div className="box">
            <BiSolidPlaneAlt id="icon" />
            <h3>Fastest Travel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio
              nostrum cupiditate doloribus unde labore repellendus,
              reprehenderit aperiam asperiores vitae sit eligendi culpa. Cumque,
              perferendis? Omnis sapiente minus possimus sequi?
            </p>
          </div>
          <div className="box">
            <GiBackpack id="icon" />
            <h3>Adventures</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio
              nostrum cupiditate doloribus unde labore repellendus,
              reprehenderit aperiam asperiores vitae sit eligendi culpa. Cumque,
              perferendis? Omnis sapiente minus possimus sequi?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
