import "./Slider.css";
import travel7 from "../assets/travel4.jpg";
import travel8 from "../assets/travel8.jpg";
import travel9 from "../assets/travel9.jpg";
import travel10 from "../assets/travel10.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <section className="slider">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={travel7} alt="location" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={travel8} alt="location" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={travel9} alt="location" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={travel10} alt="location" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Slider;
