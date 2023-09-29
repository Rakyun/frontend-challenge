import headerIcon from "../assets/headerIcon.png";

const Header = () => {
  return (
    <header className="flex justify-between px-8 text-xs sm:text-base sm:px-16  bg-[#685DC5] relative w-screen h-20 items-center">
      <div className="select-none hidden md:flex transition-all hover:scale-105 duration-200 items-center justify-center rounded-full bg-[#4FA16C] w-32  h-32 absolute right-40 top-3 shadow-md">
        <p className="cursor-pointer text-white font-semibold text-center text-xl w-24 h-14  ">
          APPLY NOW
        </p>
      </div>
      <div className="select-none flex text-white items-start  ">
        <span className="text-xl font-bold mr-2  ">HARBOUR.SPACE</span>
        <span className="relative  text-md top-[2px] ">
          /INTERACTION DESIGN
        </span>
      </div>
      <img src={headerIcon} alt="HeaderIcon" className="w-10 cursor-pointer" />
    </header>
  );
};

export default Header;
