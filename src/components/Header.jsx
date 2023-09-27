import headerIcon from "../assets/headerIcon.png";

const Header = () => {
  return (
    <header className="flex justify-between px-16  bg-[#685DC5] relative w-full h-20 items-center">
      <div className="items-center justify-center rounded-full bg-[#4FA16C] w-32  h-32 flex absolute right-40 top-3 shadow-md">
        <p className="text-white font-semibold text-center text-xl w-24 h-14 ">
          APPLY NOW
        </p>
      </div>
      <div className="flex text-white items-start  ">
        <span className="text-xl font-bold mr-2  ">HARBOUR.SPACE</span>
        <span className="relative  text-md top-[2px] ">
          /INTERACTION DESIGN
        </span>
      </div>
      <img src={headerIcon} className="w-10" />
    </header>
  );
};

export default Header;
