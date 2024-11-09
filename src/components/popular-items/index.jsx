import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Burger from "../../assets/burger.png";
import Chicken from "../../assets/chicken.png";
import French from "../../assets/frech-fries.png";
import leftArrow from "../../assets/leftArrow.png";
import Pizza from "../../assets/pizza.png";
import rightArrow from "../../assets/rightArrow.png";

const PopularItems = () => {
  return (
    <div className="bg-[#FBF7F2] py-10 md:py-28 bg-none md:bg-itemsBg bg-no-repeat bg-bottom-4">
      <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-2">
        <div className="flex justify-between items-center mb-16">
          {/* heading content */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#BD1F17]"></div>
              <p className="text-base md:text-[20px] text-[#BD1F17] font-roboto font-bold leading-8">
                Crispy, Every Bite Taste
              </p>
            </div>
            <h1 className="text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] text-[#181818] font-bebas font-bold mt-3">
              POPULAR FOOD ITEMS
            </h1>
          </div>
          {/* arrow icon */}
          <div className="hidden md:flex items-center gap-8">
            <div className="w-[50px] h-[50px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
              <img src={leftArrow} alt="" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        {/* items */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            480: {
              slidesPerView: 2,
            },

            640: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="bg-[#ffffff] py-5 px-3">
            <div className="flex justify-center">
              <img src={Burger} alt="" />
            </div>
            <div className="w-10 h-[3px] bg-[#BD1F17] mx-auto mb-6 mt-4"></div>
            <div>
              <h1 className="text-[24px] font-bebas font-bold text-[#0A1425] leading-[36px] uppercase text-center">
                vegetables burger
              </h1>
              <p className="text-base font-roboto font-normal text-[#0A1425] text-center">
                Barbecue Italian cuisine pizza
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#ffffff] py-5 px-3">
            <div className="flex justify-center">
              <img src={Pizza} alt="" />
            </div>
            <div className="w-10 h-[3px] bg-[#BD1F17] mx-auto mb-6 mt-4"></div>
            <div>
              <h1 className="text-[24px] font-bebas font-bold text-[#0A1425] leading-[36px] uppercase text-center">
                Spacial Pizza
              </h1>
              <p className="text-base font-roboto font-normal text-[#0A1425] text-center">
                Barbecue Italian cuisine pizza
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#ffffff] py-5 px-3">
            <div className="flex justify-center">
              <img src={French} alt="" />
            </div>
            <div className="w-10 h-[3px] bg-[#BD1F17] mx-auto mb-6 mt-4"></div>
            <div>
              <h1 className="text-[24px] font-bebas font-bold text-[#0A1425] leading-[36px] uppercase text-center">
                Spacial French fries
              </h1>
              <p className="text-base font-roboto font-normal text-[#0A1425] text-center">
                Barbecue Italian cuisine pizza
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#ffffff] py-5 px-3">
            <div className="flex justify-center">
              <img src={Chicken} alt="" />
            </div>
            <div className="w-10 h-[3px] bg-[#BD1F17] mx-auto mb-6 mt-4"></div>
            <div>
              <h1 className="text-[24px] font-bebas font-bold text-[#0A1425] leading-[36px] uppercase text-center">
                Cuisine Chicken
              </h1>
              <p className="text-base font-roboto font-normal text-[#0A1425] text-center">
                Barbecue Italian cuisine pizza
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* arrow icon */}
        <div className="flex md:hidden justify-center items-center gap-8 mt-5">
          <div className="w-[50px] h-[50px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
            <img src={leftArrow} alt="" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
