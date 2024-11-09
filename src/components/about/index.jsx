import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import About from "./About";
import AboutBottom from "./AboutBottom";
import Contact from "./Contact";
import Experience from "./Experience";

const Layout = () => {
  const [about, setAbout] = useState(true);
  const [contact, setContact] = useState(false);
  const [experience, setExperience] = useState(false);
  const [selected, setSelected] = useState(1);
  const percentage = 85;

  const handleAbout = () => {
    setSelected(1);
    setAbout(true);
    setContact(false);
    setExperience(false);
  };
  const handleExperience = () => {
    setSelected(2);
    setAbout(false);
    setContact(false);
    setExperience(true);
  };
  const handleContact = () => {
    setSelected(3);
    setAbout(false);
    setContact(true);
    setExperience(false);
  };
  return (
    <div className="md:py-28 py-10 bg-none md:bg-bgVegetable bg-no-repeat bg-bottom-right-4">
      <div className="max-w-7xl mx-auto md:flex justify-between gap-12 px-4 md:px-4 lg:px-2">
        {/* left */}
        <div className="bg-bgImg md:w-3/6 flex justify-start items-start pt-5 pl-3 md:pl-5 h-[28rem]">
          <div className="bg-[#ffffff] py-4 px-8 rounded-lg">
            <div className="flex justify-center items-center gap-5">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={percentage}
                  text="50+"
                  styles={buildStyles({
                    textColor: "#0A1425",
                    textSize: "26px",
                    text: 700,
                    pathColor: "#FEBF00",
                    trailColor: "#E9EAEC",
                  })}
                />
              </div>
              <div>
                <span className="text-base font-semibold text-[#181818]">
                  Market <br /> Experiences
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="md:w-3/6 mt-7 md:mt-0">
          <div>
            <ul className="flex gap-7 border-b-[1px] border-[#B52B1D] w-[32rem] cursor-pointer">
              <li
                className={` ${
                  selected === 1
                    ? "bg-[#B52B1D] text-[#ffffff]"
                    : "bg-transparent text-[#333333]"
                } py-1 px-4 text-[14px] font-roboto leading-6`}
                onClick={handleAbout}
              >
                About
              </li>

              <li
                className={` ${
                  selected === 2
                    ? "bg-[#B52B1D] text-[#ffffff]"
                    : "bg-transparent text-[#333333]"
                } py-1 px-4 text-[14px] font-roboto leading-6`}
                onClick={handleExperience}
              >
                Experience
              </li>

              <li
                className={` ${
                  selected === 3
                    ? "bg-[#B52B1D] text-[#ffffff]"
                    : "bg-transparent text-[#333333]"
                } py-1 px-4 text-[14px] font-roboto leading-6`}
                onClick={handleContact}
              >
                Contact
              </li>
            </ul>

            {about && <About />}
            {experience && <Experience />}
            {contact && <Contact />}
          </div>
        </div>
      </div>
      <AboutBottom />
    </div>
  );
};

export default Layout;
