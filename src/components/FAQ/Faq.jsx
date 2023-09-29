import { useState } from "react";
import FaqItems from "./faqItems";

const Faq = () => {
  const [dropValue, setDropValue] = useState("Program conditions");

  const items = [
    {
      faqType: "Program conditions",
      faqQuestion: "Frequently asked questions",
      faqAnswer:
        "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities. We offer our students paid internships options during studies jointly with our industrial partners. Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.",
    },
    {
      faqType: "Program conditions",
      faqQuestion: "Do I get a job placement upon graduation?",
      faqAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit ac ex aliquam tristique. Nunc gravida, metus quis ultrices pharetra, lorem urna fringilla sapien, at cursus erat leo nec lorem. Sed quis odio ut libero semper dictum. Vestibulum vel posuere erat, eget varius purus. Nullam ullamcorper justo vel libero sollicitudin, non venenatis mi feugiat. Suspendisse potenti. Curabitur vitae ligula vel sapien luctus finibus eu ac metus. Sed ut lacinia velit, nec tincidunt libero. Vivamus lacinia justo eget dolor tristique, ut hendrerit velit consequat. Cras eget varius eros. Vivamus egestas, nunc ut vehicula cursus, ligula augue rhoncus libero, non ullamcorper nulla dolor vel libero. Nulla facilisi. Vivamus non tortor tellus.",
    },
    {
      faqType: "Program conditions",
      faqQuestion: "What if I want to start my own company? ",
      faqAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit ac ex aliquam tristique. Nunc gravida, metus quis ultrices pharetra, lorem urna fringilla sapien, at cursus erat leo nec lorem. Sed quis odio ut libero semper dictum. Vestibulum vel posuere erat, eget varius purus. Nullam ullamcorper justo vel libero sollicitudin, non venenatis mi feugiat. Suspendisse potenti. Curabitur vitae ligula vel sapien luctus finibus eu ac metus. Sed ut lacinia velit, nec tincidunt libero. Vivamus lacinia justo eget dolor tristique, ut hendrerit velit consequat. Cras eget varius eros. Vivamus egestas, nunc ut vehicula cursus, ligula augue rhoncus libero, non ullamcorper nulla dolor vel libero. Nulla facilisi. Vivamus non tortor tellus.",
    },
    {
      faqType: "Program conditions",
      faqQuestion: "Do I need a visa? ",
      faqAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit ac ex aliquam tristique. Nunc gravida, metus quis ultrices pharetra, lorem urna fringilla sapien, at cursus erat leo nec lorem. Sed quis odio ut libero semper dictum. Vestibulum vel posuere erat, eget varius purus. Nullam ullamcorper justo vel libero sollicitudin, non venenatis mi feugiat. Suspendisse potenti. Curabitur vitae ligula vel sapien luctus finibus eu ac metus. Sed ut lacinia velit, nec tincidunt libero. Vivamus lacinia justo eget dolor tristique, ut hendrerit velit consequat. Cras eget varius eros. Vivamus egestas, nunc ut vehicula cursus, ligula augue rhoncus libero, non ullamcorper nulla dolor vel libero. Nulla facilisi. Vivamus non tortor tellus.",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (item.faqType === dropValue) {
      return true;
    }
    return false;
  });

  return (
    <div className="w-full flex justify-center pb-32">
      <div className="flex flex-col w-[80%]">
        <div className="w-full flex justify-between items-center border-b py-10 ">
          <p className="text-[#685DC5] text-5xl font-bold w-96">
            Frequently asked questions
          </p>
          <div className="flex items-center text-xl text-[#6A6A6A]">
            <h1 className="mr-5">Filter by:</h1>
            <select
              onChange={(e) => {
                setDropValue(e.target.value);
              }}
              defaultValue={dropValue}
              className=" transition-all w-64 h-[70px] px-4 rounded-full border border-solid border-[#DADADA] text-[#685DC5] font-bold  focus:outline-none focus:ring ring-[#685DC5] "
            >
              <option value="Program conditions">Program conditions</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        {filteredItems.map((item, index) => (
          <FaqItems
            question={item.faqQuestion}
            answer={item.faqAnswer}
            type={item.faqType}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
