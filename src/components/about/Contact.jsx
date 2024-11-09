const Contact = () => {
  return (
    <div className="flex items-center mt-10">
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-1/2 px-4 py-2 border border-[#FEBF00]  focus:outline-none focus:border-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-1/2 px-4 py-2 border border-[#FEBF00] focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Your Number"
            className="px-4 py-2 border border-[#FEBF00] focus:outline-none focus:border-yellow-500"
          />
        </div>

        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 border border-[#FEBF00] focus:outline-none focus:border-[#FEBF00] h-24 resize-none"
        />

        <button className="px-4 py-2 text-black bg-[#FEBF00] hover:bg-yellow-600 font-semibold">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
