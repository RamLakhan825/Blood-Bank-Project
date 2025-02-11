const Hero = () => {
  return (
    <div className="bg-[url('/hero1.jpg')] bg-no-repeat bg-cover bg-center h-[80vh] lg:px-[150px] px-[50px] flex items-center">
      <div className="text-white w-full lg:w-[50%]">
        <span className="text-[26px] lg:text-[30px] mt-3 block">
          Donate blood, Save life!
        </span>
        <h1 className="text-[30px] lg:text-[38px] font-bold mt-3 leading-tight">
          Your Blood Can Bring a Smile to Another Person's Life.
        </h1>

        <div className="flex flex-wrap items-center mt-[20px] gap-5">
          <button className="bg-red-600 hover:bg-red-700 transition p-3 w-[180px] lg:w-[200px] text-white rounded-lg shadow-md">
            Donate Now
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 transition p-3 w-[180px] lg:w-[200px] text-white rounded-lg shadow-md">
            CALL: (+125) 262 728
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
