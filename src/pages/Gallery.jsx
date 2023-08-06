import "./Gallery.css";
import { location } from "../data/location.js";

function Gallery() {
  return (
    <>
      <scetion className="gallery" id="gallery">
        <h1 className="heading">
          <span>G</span>
          <span>A</span>
          <span>L</span>
          <span>L</span>
          <span>E</span>
          <span>R</span>
          <span>Y</span>
        </h1>
        <div className="box-container">
          {location.map((item, index) => {
            return (
              <>
                <div className="box">
                  <img src={item.image} alt="" />
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.details.substring(0, 120)}</p>
                    <a href="#" className="btn">
                      See More
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </scetion>
    </>
  );
}

export default Gallery;
