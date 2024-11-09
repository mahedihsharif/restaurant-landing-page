import { useEffect, useState } from "react";
import Layout from "./components/about";
import Banner from "./components/banner";
import Booked from "./components/booked";
import Footer from "./components/footer";
import Header from "./components/header";
import PopularItems from "./components/popular-items/index";
import Testimonial from "./components/testimonial";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      setShowButton(bottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <Banner />
      <Layout />
      <PopularItems />
      <Booked />
      <Testimonial />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-[#B52B1D] text-white rounded-full shadow-lg hover:bg-[#B52B1D] transition duration-300"
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default App;
