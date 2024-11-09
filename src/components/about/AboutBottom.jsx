import absoluteDinnig from "../../assets/absoluteBulding.png";
import fastDelivery from "../../assets/fastDelivery.png";
import Pickup from "../../assets/pickup.png";

const AboutBottom = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 md:flex gap-40 px-4 md:px-4 lg:px-2">
      <div className="flex gap-4 items-center">
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full shadow-md">
          <img src={fastDelivery} alt="" />
        </div>
        <div>
          <h1 className="text-[30px] leading-9 font-bold text-[#0A1425] uppercase font-bebas">
            fast delivery
          </h1>
          <p className="text-[20px] text-[#0A1425] font-normal leading-8">
            Within 30 minutes
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center my-7 md:my-0">
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full shadow-md">
          <img src={absoluteDinnig} alt="" />
        </div>
        <div>
          <h1 className="text-[30px] leading-9 font-bold text-[#0A1425] uppercase font-bebas">
            absolute dining
          </h1>
          <p className="text-[20px] text-[#0A1425] font-normal leading-8">
            Best buffet restaurant
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full shadow-md">
          <img src={Pickup} alt="" />
        </div>
        <div>
          <h1 className="text-[30px] leading-9 font-bold text-[#0A1425] uppercase font-bebas">
            pickup delivery
          </h1>
          <p className="text-[20px] text-[#0A1425] font-normal leading-8">
            Grab your food order
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
