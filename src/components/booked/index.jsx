const Booked = () => {
  return (
    <div className="bg-bookedBg bg-no-repeat bg-cover bg-right-top w-full  py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-2">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#BD1F17]"></div>
            <p className="text-base md:text-[20px] text-[#BD1F17] font-roboto font-bold leading-8">
              Book Now
            </p>
          </div>
          <h2 className="text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] font-bebas font-bold text-[#ffffff] pt-4">
            Book Your Table
          </h2>
          <p className="text-base font-normal font-roboto leading-6 text-[#ffffff] my-6">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 text-white rounded border-[1px] border-[#E5E7EB] outline-[#E5E7EB] bg-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 text-white rounded border-[1px] border-[#E5E7EB] outline-[#E5E7EB] bg-transparent"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="date"
                  placeholder="Reservation Date"
                  className="w-full p-3 text-white rounded border-[1px] border-[#E5E7EB] outline-[#E5E7EB] bg-transparent"
                />
                <input
                  type="number"
                  placeholder="Total People"
                  className="w-full p-3 text-white rounded border-[1px] border-[#E5E7EB] outline-[#E5E7EB] bg-transparent"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full p-3 text-white rounded border-[1px] border-[#E5E7EB] outline-[#E5E7EB] h-32 resize-none bg-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-40 p-3 bg-yellow-400 text-[#0A1425] font-roboto text-[18px] font-bold rounded hover:bg-yellow-500 transition-colors"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booked;
