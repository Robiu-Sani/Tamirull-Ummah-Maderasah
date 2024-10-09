import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className="mt-[220px] z-0">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        className="w-full"
        slidesPerView={1}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220805/pngtree-madrasah-tilla-kari-on-registan-squaresamarkanduzbekistan-attraction-amir-madrasah-photo-image_26885762.jpg"
              className="object-cover w-full h-auto md:max-h-screen"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 py-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Beautiful Landmark 1
              </h2>
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-medium">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://st2.depositphotos.com/2211028/7229/i/450/depositphotos_72293555-stock-photo-ulugh-beg-madrasah-on-registan.jpg"
              className="object-cover w-full h-auto md:max-h-screen"
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 py-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Majestic Site 2
              </h2>
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-medium">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/20/75/67/1000_F_520756717_bOOkNXWy876YupZZ5nJfDKMW5RwkLl7S.jpg"
              className="object-cover w-full h-auto md:max-h-screen"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 py-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Historical Beauty 3
              </h2>
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/17/40/18/1000_F_217401809_0DZzusNx2bVHlm2STAIv9YhsDXIahoUY.jpg"
              className="object-cover w-full h-auto md:max-h-screen"
              alt="Slide 4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 py-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Amazing Architecture 4
              </h2>
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-medium">
                View Details
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
