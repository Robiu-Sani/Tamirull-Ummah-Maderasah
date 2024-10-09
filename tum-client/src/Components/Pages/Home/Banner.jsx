import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div className="">
      {" "}
      {/* Add padding to compensate for the fixed navbar */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4iCa0GPqW79CTvOVsXczO6oaaSDEcWk9nw&s"
            className="object-cover w-full h-screen md:h-auto"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1nEMun_B4f_hCQrSmO-95HGTOaXvahlthA&s"
            className="object-cover w-full h-screen md:h-auto"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7GcbbWC1LLZEdBxcTsIR0RMiAdvD0puPegnuF8ChJwJAvOAPtX-qM_XsQ_c-dmtBdOA&usqp=CAU"
            className="object-cover w-full h-screen md:h-auto"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8jT17uMj6YjlfRg8koZArylcbPLcsJVoLt9c3wW0Sgo7EjLLxCQspQel_00gE1JSsZs&usqp=CAU"
            className="object-cover w-full h-screen md:h-auto"
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
