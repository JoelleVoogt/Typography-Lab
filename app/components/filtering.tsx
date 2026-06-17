import Story from "./filtering/story";
import TypeSomething from "./filtering/typesomething";
import CaseType from "./filtering/casetype";
import FontSize from "./filtering/fontsize";
import Width from "./adjustments/width";
import Weight from "./adjustments/weight";
import Italic from "./adjustments/italic";
import Result from "./result";

export default function Filtering() {
  return (
    <>
      <section className="flex flex-col max-w-7xl mx-auto pt-12 pb-120 p-4 xl:p-0">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center bg-[#2B2B29] rounded-md p-2 xl:p-0 gap-2 lg:gap-0">
          <Story />
          <TypeSomething />
          <CaseType />
          <FontSize />
        </div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 py-2 xl:py-10">
          <div className="flex flex-co gap-1 lg:gap-4 flex-col py-0 xl:py-8 justify-center w-full xl:w-md">
            <Width />
            <Weight />
            <Italic />
          </div>
          <div className="hidden xl:block w-px self-stretch bg-[#6E6D64] rounded-md"></div>
          <Result />
        </div>
      </section>
    </>
  );
}
