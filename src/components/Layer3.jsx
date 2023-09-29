import PatternBig from "../assets/PatternBig.png";
import profilePic from "../assets/profilePic.png";
import linkedIn from "../assets/linkedIn.png";
const Layer3 = () => {
  return (
    <div className="w-full flex px-9 py-48 justify-center relative">
      <img
        src={PatternBig}
        alt="patternBig"
        className="w-[1100px] h-[500px] absolute -z-10 scale-x-125 scale-y-100 bottom-[27rem] "
      />
      <div className="h-[600px] w-[1000px] border border-solid border-[#DADADA] ">
        <div className="flex w-full h-[30%] bg-white  items-center justify-between px-20 ">
          <div className="flex items-center">
            <img
              src={profilePic}
              alt="profilePic"
              className="rounded-full w-[100px] h-[100px] mr-5"
            />
            <div className="text-[#535353]">
              <p className="font-bold">Irene Pereyra</p>
              <p className="">Interaction Design Fellow ‘19</p>
            </div>
          </div>
          <img
            src={linkedIn}
            alt="linkedIn"
            className="w-[40px] h-[40px] mr-5"
          />
        </div>
        <div className="w-full h-[70%] bg-[#FBFBFB] flex justify-center items-center">
          <div className="w-[41rem]">
            <p className="text-3xl  text-[#6A6A6A] mb-10">
              This Fellowship was a turning point in my career. I wouldn’t be
              where I am today without the financial support and experienced
              offered through the program.
            </p>
            <p className="text-xl  text-[#6A6A6A]">
              Education · B.A. Visual Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer3;
