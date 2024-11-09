import BannerImg from "../../assets/bannerImg.png";
import StarImg from "../../assets/starImg.png";
const Banner = () => {
  return (
    <div className="bg-[#BD1F17] py-8 md:py-36">
      <div className="md:relative max-w-7xl mx-auto md:flex items-center px-6 md:px-4 lg:px-2">
        {/* left */}
        <div>
          <div className="md:bg-red-700 md:bg-opacity-70 md:absolute md:z-10 md:pr-8 top-16">
            <h1 className="text-[48px] md:text-[120px] font-bebas font-bold text-[#ffffff] leading-[60px] md:leading-[130px] tracking-normal">
              Taste the authentic <br /> Saudi cuisine
            </h1>
          </div>

          <div className="md:mt-80">
            <p className="text-[20px] md:text-[24px] font-poppins font-normal leading-[32px] text-[#ffffff] py-6">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <div className="mt-4 mb-10">
              <button className="bg-[#FEBF00] py-3 px-4 uppercase text-[#0A1425] font-roboto font-bold text-base">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="relative">
          <div className="absolute -right-7 -top-9">
            <img src={StarImg} alt="" />
          </div>
          <img src={BannerImg} alt="" />
          <div className="bg-[#FEBF00] w-32 h-32 rounded-full flex justify-center items-center absolute -right-10 bottom-0">
            <div className="w-28 h-28 rounded-full border-[1px] border-dashed border-[#BD1F17] flex justify-center items-center">
              <span className="text-[36px] leading-[36px] text-[#0A1425] font-bebas font-bold text-center">
                Today Offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
