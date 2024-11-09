import CallIcon from "../../assets/call-alt.png";

const About = () => {
  return (
    <div className="pt-10">
      <h1 className="text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] font-bebas font-bold text-[#181818]">
        Exceptional culinary experience and delicious food
      </h1>
      <p className="text-base font-roboto font-normal text-[#333333] py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed
        est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum
        viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit
        do eiusmod tempor incididunt ut labore et dolore magna minim veniam
        nostrud exercitation.
      </p>
      <div className="flex gap-4 md:gap-10">
        <button className="bg-[#FEBF00] py-3 px-4 uppercase text-[#0A1425] font-roboto font-bold text-base">
          About More
        </button>
        <div className="flex justify-center items-center gap-2">
          <img src={CallIcon} alt="" />
          <span className="text-[14px] md:text-[18px] font-roboto font-bold text-[#0A1425]">
            +88 3426 739 485
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
