"use client";

import { useState } from "react";
import Story from "./filtering/story";
import TypeSomething from "./filtering/typesomething";
import CaseType from "./filtering/casetype";
import FontSize from "./filtering/fontsize";
import Width from "./adjustments/width";
import Weight from "./adjustments/weight";
import Italic from "./adjustments/italic";
import Result from "./result";

const CONTENT = {
  Story:
    "The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow. How quickly daft jumping zebras vex! The five boxing wizards jump quickly.",
  Alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
};

type CaseType = "Sentence case" | "UPPERCASE" | "lower case" | "Title case";

function applyCase(text: string, caseType: CaseType) {
  switch (caseType) {
    case "Sentence case":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    case "UPPERCASE":
      return text.toUpperCase();
    case "lower case":
      return text.toLowerCase();
    case "Title case":
      return text.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );
  }
}

export default function Custom() {
  const [mode, setMode] = useState<"Story" | "Alphabet">("Story");
  const [customText, setCustomText] = useState("");
  const [caseType, setCaseType] = useState<CaseType>("Sentence case");

  return (
    <>
      <section className="flex flex-col max-w-7xl mx-auto pt-12 pb-64 lg:pb-96 p-4 xl:pt-0">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center bg-[#2B2B29] rounded-md p-2 xl:p-0 gap-2 lg:gap-0">
          <Story
            onValueChange={(value) => setMode(value as "Story" | "Alphabet")}
          />
          <TypeSomething onValueChange={setCustomText} />
          <CaseType onValueChange={(value) => setCaseType(value as CaseType)} />
          <FontSize />
        </div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 py-2 xl:py-10">
          <div className="flex flex-co gap-1 lg:gap-4 flex-col py-0 xl:pt-8 justify-start w-full xl:w-md">
            <Width />
            <Weight />
            <Italic />
          </div>
          <div className="hidden xl:block w-px self-stretch bg-[#6E6D64] rounded-md"></div>
          <Result text={applyCase(customText || CONTENT[mode], caseType)} />
        </div>
      </section>
    </>
  );
}
