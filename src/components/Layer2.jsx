import patternCircle from "../assets/pattern_circle.png";
import personPhoto from "../assets/personPhoto.png";
const Layer2 = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center py-32 ">
      <div className="flex  w-[1100px] mb-12">
        <div className="relative mr-32">
          <img src={patternCircle} alt="circle pattern" className="w-96"></img>
          <img
            src={personPhoto}
            alt="circle pattern"
            className="w-80 rounded-full absolute top-8 left-8 "
          />
        </div>

        <div className="w-[29rem] py-10">
          <p className="leading-tight text-[#685DC5] text-5xl font-bold mb-9">
            About the <br /> apprenticeship
          </p>
          <p className=" text-[#535353] text-xl">
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.{" "}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-row-3  grid-flow-col gap-10 w-[1100px] h-[650px]">
        <section className="h-[621px] divide-y divide-[#DADADA] flex flex-col items-center row-span-3 col-span-1  border border-[#DADADA] rounded-md">
          <div className="w-[80%] h-[55%] pt-7">
            <p className="text-[#685DC5] font-bold mb-7 text-lg">
              Scholarship value
            </p>
            <p className="text-[#535353]  text-5xl">€31,300</p>
          </div>
          <div className="flex flex-wrap w-[80%] pt-16">
            <div className="w-[50%] mb-7">
              <p className="text-[#685DC5] font-bold mb-2 ">Tuition covered</p>
              <p className=" text-[#535353] leading-3 ">€20,900</p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#685DC5] font-bold mb-2 ">Remaining</p>
              <p className=" text-[#535353] leading-3 ">€2,000</p>
            </div>
            <div>
              <p className="text-[#685DC5] font-bold mb-2 ">Living stipend</p>
              <p className=" text-[#535353] leading-3 ">€8,400 (€700/month)</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center row-span-1 col-span-1 border border-[#DADADA] rounded-md">
          <div className="w-[80%]  pt-7">
            <p className="text-[#685DC5] font-bold mb-3 text-lg">
              Study commitment
            </p>
            <p className="text-[#535353]  text-3xl">3 hours / day</p>
          </div>
          <div className="w-[10%] border-b top-4 relative right-[7.2rem] mb-10 "></div>
          <p className="w-[80%] text-[#535353]">
            You will complete 15 modules to graduate. Daily classes are 3 hours,
            plus coursework to complete in your own time.
          </p>
        </section>

        <section className="row-span-2 col-span-2 pt-2 ">
          <fieldset className="border-t border-solid  text-center border-t-[#DADADA] mb-6 ">
            <legend className="px-3 font-bold text-[#535353]">
              GRADUATION
            </legend>
          </fieldset>
          <div className="border border-solid border-[#DADADA] w-full flex flex-col items-center  h-[243px] pt-6 rounded-md">
            <div className="w-[80%]  pt-3">
              <p className="text-[#685DC5] font-bold mb-3 text-lg">
                A full-time contract
              </p>
              <p className="text-[#535353]  text-3xl mb-4">
                1 Year / Full-Time
              </p>
            </div>
            <div className="w-[5%] border-b top-5 relative right-[16.8rem] mb-10 "></div>
            <p className="w-[80%] text-[#535353]">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center row-span-1 col-span-1 border border-[#DADADA] rounded-md">
          <div className="w-[80%]  pt-7">
            <p className="text-[#685DC5] font-bold mb-3 text-lg">
              Work commitment
            </p>
            <p className="text-[#535353]  text-3xl">4 hours / day</p>
          </div>
          <div className="w-[10%] border-b top-4 relative right-[7.2rem] mb-10 "></div>
          <p className="w-[80%] text-[#535353]">
            Immerse yourself in the professional world during your
            apprenticeship. You’ll learn the ropes from the best and get to
            apply your newly acquired knowledge in the field from day one.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Layer2;
