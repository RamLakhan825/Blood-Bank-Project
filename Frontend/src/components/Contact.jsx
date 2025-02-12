import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProspect = async () => {
    try {
      // const userToken = localStorage.getItem("token"); // Retrieve token

      // if (!userToken) {
      //   toast.error("Unauthorized: Please log in first!");
      //   return;
      // }

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${userToken}`,
      //     "Content-Type": "application/json",
      //   },
      // };

      await publicRequest.post("/prospects", inputs);
      toast.success("You've been successfully added to the database");
      setInputs({});
    } catch (error) {
      toast.warning(error.response?.data?.message || "Unauthorized request!");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center my-[80px]">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[650px]">
        <h2 className="text-[26px] font-bold text-center text-gray-800">
          Want to Donate Blood? Fill in the Details
        </h2>
        <hr className="bg-red-500 w-[150px] h-[3px] mx-auto my-5" />

        {/** Form Fields */}
        {[
          { label: "Name", type: "text", name: "name", placeholder: "John Doe" },
          { label: "Telephone", type: "text", name: "tel", placeholder: "3582839303" },
          { label: "Email", type: "email", name: "email", placeholder: "johndoe@example.com" },
          { label: "Address", type: "text", name: "address", placeholder: "123 Town Street" },
          { label: "Weight (kg)", type: "number", name: "weight", placeholder: "50" },
          { label: "Age", type: "number", name: "age", placeholder: "20" },
        ].map(({ label, type, name, placeholder }) => (
          <div key={name} className="mb-4">
            <label className="text-[18px] font-semibold text-gray-700 block mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={inputs[name] || ""}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>
        ))}

        {/** Blood Group Dropdown */}
        <div className="mb-4">
          <label className="text-[18px] font-semibold text-gray-700 block mb-1">Blood Group</label>
          <select
            name="bloodgroup"
            value={inputs.bloodgroup || ""}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          >
            <option value="">Select Blood Group</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        {/** Disease Info */}
        <div className="mb-4">
          <label className="text-[18px] font-semibold text-gray-700 block mb-1">
            Do you have any diseases?
          </label>
          <textarea
            name="diseases"
            value={inputs.diseases || ""}
            onChange={handleChange}
            placeholder="N/A"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          ></textarea>
        </div>

        {/** Submit Button */}
        <button
          className="bg-red-500 hover:bg-red-600 transition p-3 w-full text-white rounded-lg shadow-md font-semibold"
          onClick={handleProspect}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
