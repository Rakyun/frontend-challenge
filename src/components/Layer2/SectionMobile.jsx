import patternCircle from "../../assets/pattern_circle.png";
import personPhoto from "../../assets/personPhoto.png";

const SectionMobile = () => {
  return (
    <div className=" max-w-md flex lg:hidden flex-col items-center justify-center text-xl my-[-19rem]">
      <div className="relative top-64">
        <img
          src={patternCircle}
          alt="circle pattern"
          className="w-[29rem] z-30"
        ></img>
        <img
          src={personPhoto}
          alt="circle pattern"
          className="w-80 rounded-full absolute top-16 left-16 z-50"
        />
      </div>

      <section className="relative  w-full flex flex-col items-center border border-[#E6E6E6] rounded-md py-10 mb-10 pt-64 bg-white">
        <div className="w-screen h-[400px] absolute z-[-1] top-0 bg-[#685DC5]"></div>
        <div className="w-[80%] ">
          <p className="leading-tight text-[#685DC5] text-4xl font-bold mb-9">
            About the <br /> apprenticeship
          </p>
        </div>
        <p className="w-[80%] text-[#535353]">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.
        </p>

       
      </section>

      <section className="flex flex-col items-center w-full mb-10 py-10">
      <div className="w-[80%] mb-7">
          <p className="text-[#685DC5] font-bold mb-2 text-lg">
            Scholarship value
          </p>
          <p className="text-[#535353]  text-3xl">€31,300</p>
        </div>
        <div className="flex flex-wrap w-[80%]">
          <div className="w-[50%] mb-7">
            <p className="text-[#685DC5] font-bold mb-3 ">Tuition covered</p>
            <p className=" text-[#535353] leading-3 text-3xl">€20,900</p>
          </div>
          <div className="w-[50%]">
            <p className="text-[#685DC5] font-bold mb-3 ">Remaining</p>
            <p className=" text-[#535353] leading-3 text-3xl">€2,000</p>
          </div>
          <div>
            <p className="text-[#685DC5] font-bold mb-3 ">Living stipend</p>
            <p className=" text-[#535353] leading-3 text-3xl">€8,400 (€700/month)</p>
          </div>
        </div>
        </section>


      <section className="w-full flex flex-col items-center border border-[#DADADA] rounded-md py-10 mb-10 bg-white">
        <div className="w-[80%]  ">
          <p className="text-[#685DC5] font-bold mb-3 text-lg">
            Study commitment
          </p>
          <p className="text-[#535353]  text-3xl">3 hours / day</p>
        </div>
        <div className="w-[10%] border-b top-4 relative right-[9.7rem] mb-10 "></div>
        <p className="w-[80%] text-[#535353]">
          You will complete 15 modules to graduate. Daily classes are 3 hours,
          plus coursework to complete in your own time.
        </p>
      </section>

      

      <section className="w-full flex flex-col items-center border border-[#DADADA] rounded-md py-6 mb-10 bg-white">
        <div className="w-[80%]  pt-7">
          <p className="text-[#685DC5] font-bold mb-3 text-lg">
            Work commitment
          </p>
          <p className="text-[#535353]  text-3xl">4 hours / day</p>
        </div>
        <div className="w-[10%] border-b top-4 relative right-[9.7rem] mb-10 "></div>
        <p className="w-[80%] text-[#535353]">
          Immerse yourself in the professional world during your apprenticeship.
          You’ll learn the ropes from the best and get to apply your newly
          acquired knowledge in the field from day one.
        </p>
      </section>

      <fieldset className="border-t border-solid  text-center border-t-[#DADADA] mb-[2rem] w-full ">
        <legend className="px-3 font-bold text-[#535353]">GRADUATION</legend>
      </fieldset>

      <section className="w-full flex flex-col items-center border border-[#DADADA] rounded-md py-6 mb-10 bg-white">
        <div className="w-[80%]  pt-7">
          <p className="text-[#685DC5] font-bold mb-3 text-lg">
            A Full-Time Contract
          </p>
          <p className="text-[#535353]  text-3xl">1 Year Full-Time</p>
        </div>
        <div className="w-[10%] border-b top-4 relative right-[9.7rem] mb-10 "></div>
        <p className="w-[80%] text-[#535353]">
          You’ll be guaranteed a 1 year contract with SCG upon graduation.
        </p>
      </section>
    </div>
  );
};

export default SectionMobile;
