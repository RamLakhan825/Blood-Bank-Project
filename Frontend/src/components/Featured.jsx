const Featured = () => {
  return (
    <div className="flex flex-wrap justify-center items-center lg:px-[150px] px-[50px] mt-[80px]">
      {/* Text Section */}
      <div className="bg-gray-200 h-auto lg:w-[500px] w-full z-10 p-10 rounded-lg shadow-lg">
        <h1 className="text-[25px] font-semibold">Who we are?</h1>
        <hr className="bg-red-500 w-[150px] h-[3px] my-[15px]" />
        <p className="text-gray-700">
          BloodBridge is a public donation center with blood donation members in
          the changing healthcare system.
        </p>
        <ul className="list-none mt-4 space-y-2 text-gray-700">
          <li>✔ Specialist blood donors and clinical supervision.</li>
          <li>✔ Increasing communication with our members.</li>
          <li>✔ High-quality assessment, diagnosis, and treatment.</li>
          <li>✔ Examine critically to ensure alignment.</li>
          <li>✔ Extra care of a multi-disciplinary team.</li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="lg:w-[500px] w-full h-[400px] lg:ml-[-30px] mt-10 lg:mt-0">
        <video
          src="/video.mp4"
          className="h-full w-full object-cover rounded-lg shadow-lg"
          loop
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default Featured;
