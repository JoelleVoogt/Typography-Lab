import Story from "./filtering/story";
import TypeSomething from "./filtering/typesomething";
import CaseType from "./filtering/casetype";
import FontSize from "./filtering/fontsize";

export default function Filtering() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-32">
        <div className="flex flex-row w-full justify-center items-center bg-[#2B2B29] rounded-md">
          <Story />
          <TypeSomething />
          <CaseType />
          <FontSize />
        </div>
      </section>
    </>
  );
}
