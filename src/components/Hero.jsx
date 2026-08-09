import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MyContainer from "./MyContainer";

const Hero = () => {
  const slides = [
    {
      title: "Bring Nature Into Your Home",
      description:
        "Discover indoor plants that purify air, calm your mind, and style your space.",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Grow Green, Live Better",
      description:
        "Create a fresh and peaceful environment with beautiful indoor plants.",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Find Your Perfect Plant",
      description:
        "Choose from our collection of beautiful plants for every corner of your home.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <MyContainer className="">
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
              className="relative min-h-50 md:min-h-60 lg:min-h-80
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
                  {/* Small badge */}
                  <div className="mb-2 lg:mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-medium border border-white/20">
                      🌿 GreenNest
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mt-2 lg:mt-5 text-sm md:text-lg text-white/90 max-w-xl leading-4">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <button className="btn bg-green-700 hover:bg-green-800 text-white border-none px-7 mt-4 lg:mt-7">
                    Shop Plants
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </MyContainer>
  );
};

export default Hero;