import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import NavbarIcon from "../../assets/navbar-bar.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 duration-300 py-5 ${
        isScrolled ? "bg-[#181818] shadow-lg" : "bg-[#BD1F17]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-4 lg:px-2">
        {/* logo and nav items */}
        <div className="flex justify-between items-center gap-20">
          {/* logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="" />
            <span className="text-[#FFFFFF] font-poppins font-semibold text-[28px] leading-[28px]">
              Restau<span className="font-normal">rant</span>
            </span>
          </div>
          {/* items */}

          <div className="hidden sm:flex">
            <ul className="flex items-center gap-5 text-[#FFFFFF] font-raleway font-medium text-[15px] leading-[17px] cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Client</li>
              <li>Blogs</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:flex">
          <button className="bg-[#FEBF00] py-3 px-4 uppercase text-[#0A1425] font-roboto font-bold text-base">
            book a client
          </button>
        </div>
        {/* mobile icon menu */}
        <div className="flex sm:hidden">
          <img src={NavbarIcon} alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
