import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import logo from '../assets/logo.png';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { use } from "react";

const slideData = fetch('slide.json').then(res=>res.json());

const Hero = () => {
  const slides = use(slideData)

  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="green-hero"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-60 md:min-h-70 lg:min-h-90
              bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `linear-gradient(
                  90deg,
                  rgba(8, 45, 20, 0.78),
                  rgba(8, 45, 20, 0.35),
                  rgba(8, 45, 20, 0.05)
                ), url(${slide.image})`,
              }}
            >
              <div className="container mx-auto px-8 md:px-10 lg:px-16">
                <div className="max-w-2xl text-white">
                  <div className="mb-2 lg:mb-4">
                    <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm pl-2 pr-4 py-2 text-sm font-medium border border-white/20">
                      <span><img className="w-8" src={logo} alt="" /></span>GreenNest
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-2 lg:mt-5 text-sm md:text-lg text-white/90 max-w-xl leading-4">
                    {slide.description}
                  </p>
                  <button className="btn bg-green-700 hover:bg-green-800 text-white border-none px-7 mt-4 lg:mt-7">
                    Shop Plants
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;