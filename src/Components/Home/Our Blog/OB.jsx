import React from "react";
import "./OB.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function OB() {
  // const slides = [];
  // for (let i = 0; i < 5; i += 1) {
  //   slides.push(
  //     <SwiperSlide key={`slide-$(i)`} tag="li">
  //       <img
  //         src={`https://picsum.photos/id/${i + 1}/500/300`}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>
  //   );
  // }
  // return (
  //   <React.Fragment>
  //     <Swiper id="mains" div className="OB" tag="section" wrapperTag="ul">
  //       {slides}
  //     </Swiper>
  //   </React.Fragment>
  // );
  // var swiper = new Swiper(".swiper", {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });
  // return (
  //   <div className="OB">
  //     <section className="OB-sec">
  //       <div className="swiper-container">
  //         <div className="swipper-wrapper">
  //           <div className="swiper-slide"></div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
  // return (
  //   <Swiper
  //     className="OB"
  //     spaceBetween={50}
  //     slidesPerView={3}
  //     onSlideChange={() => console.log("slide change")}
  //     onSwiper={(swiper) => console.log(swiper)}
  //   >
  //     <SwiperSlide>Slide 1</SwiperSlide>
  //     <SwiperSlide>Slide 2</SwiperSlide>
  //     <SwiperSlide>Slide 3</SwiperSlide>
  //     <SwiperSlide>Slide 4</SwiperSlide>
  //     ...
  //   </Swiper>
  // );

  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
        <div className="slide">
          <h3>{i}</h3>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      id="swiper"
      virtual
      slidesPerView={3}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        console.log("reach end");
        const tmp = slides.unshift();
        slides.push(tmp);
      }}
      navigation
      pagination
      className="OB"
    >
      {slides}
    </Swiper>
  );
}

export default OB;
