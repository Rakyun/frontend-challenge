import { useState } from "react";

const Faq = () => {
  const [dropValue, setDropValue] = useState("Program conditions");

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[80%]">
        <div className="w-full flex justify-between items-center">
          <p className="text-[#685DC5] text-5xl font-bold w-96">
            Frequently asked questions
          </p>
          <select
            onChange={(e) => {
              setDropValue(e.target.value);
            }}
            defaultValue={dropValue}
            className=" px-4 rounded-full border border-solid border-[#DADADA] text-[#685DC5] font-bold w-52 h-[70px]"
          >
            <option value="program">Program conditions</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="w-full"></div>
        <div className="w-full"></div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Faq;
