import { useState } from "react";

const FaqItems = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` transition-all w-full flex  border-b justify-between pt-10 pb-5 px-3  ${
        !open && "items-center"
      }`}
    >
      <p className="text-[#685DC5] font-bold w-[20%] text-lg mr-16 ">
        {props.type}
      </p>
      <div className="text-[#6A6A6A]  w-[50%] ">
        <p className="font-bold text-lg">{props.question}</p>
        {open && <p className="mb-3 text-lg mt-5">{props.answer}</p>}
      </div>
      <div
        onClick={() => {
          setOpen((toggle) => !toggle);
        }}
        className={`${
          open
            ? "bg-[#685DC5] text-black border-none"
            : "bg-transparent text-[#959595]"
        } transition-all duration-500 mr-5 cursor-pointer select-none border rounded-full w-12 h-12 flex justify-center items-center text-xl`}
      >
        {open ? "-" : "+"}
      </div>
    </div>
  );
};

export default FaqItems;
