import layer1Icon from "../assets/layer1Icon.png";
import zeptolabLogo from "../assets/zeptolabLogo.png";
import pattern from "../assets/pattern.png";
const Layer1 = () => {
  return (
    <main className="flex w-screen justify-center items-center pb-20 flex-col-reverse lg:flex-row ">

      <section className="justify-center items-center flex z-[99]   w-[50%] ">
        <article className="w-[28rem]">
          <img
            src={layer1Icon}
            className=" relative top-44 left-60 -z-10 hidden lg:block"
          />
          <p className="hidden lg:block leading-tight text-[#685DC5] text-5xl font-bold ">
            Interaction Design Apprenticeship
          </p>
          <p className=" font-bold text-xl text-[#535353] my-9">
            A fully funded work-study program to launch your tech career
          </p>
          <p className="w-[27rem] text-[#535353] text-xl mb-9">
            Harbour.Space has partnered with SCG to empower driven talent and
            eliminate the barriers to accessing exceptional education and career
            opportunities through a Masters Fellowship.
          </p>
          <p className="lg:hidden w-[27rem] text-[#535353] text-xl mb-9">
            Scholarship candidates will receive full financial support to
            complete their Masters program at Harbour.Space while gaining
            invaluable work experience through an internship with SCG, a leading
            company in the industry.
          </p>
          <p className="text-[#535353] text-xl mb-12">
            <span className="font-bold">Position: </span>Marketing Performance
          </p>
          <button className="cursor-pointer py-4 px-10  text-white bg-[#685DC5] rounded-full hover:opacity-80 active:opacity-50 transition-all">
            Apply Now
          </button>
        </article>
      </section>

      <section className=" items-center flex flex-col w-[50%]    ">
        <div className="relative">
        <p className="lg:hidden mt-24 leading-tight text-[#685DC5] text-3xl font-bold w-[28rem] mb-10">
          Interaction Design Apprenticeship
        </p>
        <img
            src={layer1Icon}
            className=" absolute top-0 right-32 -z-10 w-44 "
          />
          </div>
        <img
          src={pattern}
          alt="Pattern"
          className="hidden lg:block relative top-[37rem] left-32 w-[500px]  -z-10  "
        />
        <div className="w-[28rem]">
          <div className="flex items-center mb-10">
            <img
              src={zeptolabLogo}
              alt="ZeptoLogo"
              className=" mr-7"
            />
            <div className="text-[#535353]">
              <p className="text-lg">Powered by:</p>
              <p className="text-2xl">Zeptolab</p>
            </div>
          </div>

          <div className="flex justify-center w-full p-6 border-2  rounded-[4px] mb-7 bg-white">
            <div>
              <p className="text-[#685DC5] font-bold mb-2">
                Application closes in
              </p>

              <p className="text-2xl text-[#535353] ">
                6 Day : 22 Hrs : 56 Min : 13 Sec
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full p-8 border-2 rounded-[4px] bg-white">
            <div className="w-[50%] ">
              <p className="text-[#685DC5] font-bold mb-2 ">Location</p>
              <p className=" text-[#535353] leading-3 ">Bangkok</p>
            </div>
            <div className="w-[50%] ">
              <p className="text-[#685DC5] font-bold mb-2 ">Duration</p>
              <p className=" text-[#535353] leading-3">1 Year</p>
              <p className=" text-[#535353] leading-10">Full-Time</p>
            </div>
            <div className="w-[50%] ">
              <p className="text-[#685DC5] font-bold mb-2 ">Start Date</p>
              <p className=" text-[#535353] leading-3">30 June 2020</p>
            </div>

            <div className="w-[50%]">
              <p className="text-[#685DC5] font-bold mb-2 ">End Date</p>
              <p className=" text-[#535353] leading-3">3 Aug 2020</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layer1;
