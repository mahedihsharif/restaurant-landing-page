import leftArrow from "../../assets/leftArrow.png";
import Person from "../../assets/person.png";
import Play from "../../assets/play.png";
import Quota from "../../assets/quota.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonial = () => {
  return (
    <div className="py-10 md:py-28 bg-none md:bg-meatBg bg-no-repeat bg-left-top-5">
      <div className="bg-none md:bg-treeBg bg-no-repeat bg-right-bottom">
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
                What Some of my Customers Say
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
          {/* content */}
          <div className="md:flex max-sm:flex max-sm:flex-col-reverse">
            <div className="bg-[#FEBF00] w-full md:w-2/5 py-8 md:py-20 px-5 md:px-20 bg-strokeBg bg-no-repeat bg-left-bottom md:bg-bottom-4">
              <div className="flex">
                <div className="w-1/6">
                  <img src={Quota} alt="" />
                </div>
                <p className="w-full text-[18px] text-[#0A1425] font-roboto font-normal leading-[34px]">
                  You cant go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it.
                </p>
              </div>
              <div className="pt-10 md:pt-32">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-[18px] font-bold text-[#0A1425] leading-[19px] font-bebas">
                      Khalid Al Dawsry
                    </h1>
                    <p className="text-[14px] font-roboto font-normal leading-[13px] text-[#333333] pt-3">
                      Jeddah, Saudi
                    </p>
                  </div>
                  <div>
                    <img src={Person} alt="" />
                  </div>
                </div>
                <div className="w-[22rem] h-[1px] bg-[#0A1425] mt-5"></div>
              </div>
            </div>
            {/* video */}
            <div className="relative w-full md:w-3/5 bg-videoBg bg-no-repeat bg-cover">
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="flex justify-center items-center md:mt-[33%] h-[15rem] md:h-0 relative z-10">
                <img src={Play} alt="" />
              </div>
            </div>
          </div>
          {/* arrow icon */}
          <div className="flex md:hidden justify-center items-center gap-8 mt-6">
            <div className="w-[50px] h-[50px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
              <img src={leftArrow} alt="" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
