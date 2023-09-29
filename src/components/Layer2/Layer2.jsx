import SectionPC from "./SectionPC";
import SectionMobile from "./SectionMobile";

const Layer2 = () => {
  return (
    <section className="flex w-screen flex-col items-center justify-center py-32 mb-40 lg:mb-0">
      <SectionMobile />
      <SectionPC />
    </section>
  );
};

export default Layer2;
