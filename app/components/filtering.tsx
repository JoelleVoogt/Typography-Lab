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
      <section className="flex flex-col max-w-7xl mx-auto pt-12 pb-120">
        <div className="flex flex-row w-full justify-center items-center bg-[#2B2B29] rounded-md">
          <Story />
          <TypeSomething />
          <CaseType />
          <FontSize />
        </div>
        <div className="flex flex-row gap-10 py-6">
          <div className="flex flex-co gap-4 flex-col py-8 justify-center w-xs">
            <Width />
            <Weight />
            <Italic />
          </div>
          <Result />
        </div>
      </section>
    </>
  );
}
