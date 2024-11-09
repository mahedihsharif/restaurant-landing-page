/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        raleway: "Raleway",
        roboto: "Roboto",
        bebas: "Bebas Neue",
      },
      backgroundImage: {
        bgImg: "url('/src/assets/aboutImg.png')",
        bgVegetable: "url('/src/assets/vegetableImg.png')",
        itemsBg: "url('/src/assets/itemsBg.png')",
        bookedBg: "url('/src/assets/pen.jpg')",
        videoBg: "url('/src/assets/videoImg.png')",
        strokeBg: "url('/src/assets/stroke.svg')",
        meatBg: "url('/src/assets/meat.png')",
        treeBg: "url('/src/assets/tree.png')",
        footerBg: "url('/src/assets/footerbg.jpg')",
      },
      backgroundPosition: {
        "bottom-4": "left bottom 4rem",
        "bottom-right-4": "right bottom 5rem",
        "left-top-5": "left top 10rem",
      },
    },
  },
  plugins: [],
};
