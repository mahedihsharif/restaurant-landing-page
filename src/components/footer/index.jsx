import CallIcon from "../../assets/callIcon.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Location from "../../assets/locationIcon.png";
import Message from "../../assets/messageIcon.png";
import Twitter from "../../assets/twitter.png";
import Watch from "../../assets/watchIcon.png";

const Footer = () => {
  return (
    <div className="relative py-16 md:py-28 bg-footerBg bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-2">
        <h1 className="relative z-10 text-[40px] md:text-[62px] leading-[48px] md:leading-[64px] text-[#ffffff] font-bebas font-bold text-center">
          We ready to have you the best dining experiences
        </h1>
        <div className="relative z-10 md:flex justify-between items-center max-sm:space-y-6 mt-16">
          <div>
            <div className="flex justify-center">
              <img src={Watch} alt="" />
            </div>
            <h1 className="text-[24px] leading-6 font-bebas font-medium text-[#ffffff] tracking-[6%] py-6 text-center">
              Opening hours
            </h1>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              Monday - Sunday
            </p>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              9:00 AM to 11:30 PM
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src={CallIcon} alt="" />
            </div>
            <h1 className="text-[24px] leading-6 font-bebas font-medium text-[#ffffff] tracking-[6%] py-6 text-center">
              LET'S TALK
            </h1>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              Phone: 1-800-222-4545
            </p>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              Fax: 1-800-222-4545
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src={Message} alt="" />
            </div>
            <h1 className="text-[24px] leading-6 font-bebas font-medium text-[#ffffff] tracking-[6%] py-6 text-center">
              BOOK A TABLE
            </h1>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              Email: demo@website.com
            </p>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              Support: support@website.com
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src={Location} alt="" />
            </div>
            <h1 className="text-[24px] leading-6 font-bebas font-medium text-[#ffffff] tracking-[6%] py-6 text-center">
              Our Address
            </h1>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              23 Stree New York City , United
            </p>
            <p className="text-base font-normal font-roboto text-[#F7F8F9] text-center">
              States Of America.
            </p>
          </div>
        </div>
        {/* icons */}
        <div className="relative z-10 flex justify-center gap-5 mt-28">
          <div className="w-12 h-12 rounded-full border-[1px] border-[#E5E7EB] flex justify-center items-center">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-12 h-12 rounded-full border-[1px] border-[#E5E7EB] flex justify-center items-center">
            <img src={Twitter} alt="" />
          </div>
          <div className="w-12 h-12 rounded-full border-[1px] border-[#E5E7EB] flex justify-center items-center">
            <img src={Instagram} alt="" />
          </div>
          <div className="w-12 h-12 rounded-full border-[1px] border-[#E5E7EB] flex justify-center items-center">
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        <div>
          <p className="relative z-10 text-center text-[18px] text-[#F7F8F9] font-roboto font-medium mt-5">
            © 2023 All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
