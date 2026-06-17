export default function Result({
  text,
  fontSize,
}: {
  text: string;
  fontSize: number;
}) {
  return (
    <>
      <div className="flex flex-row px-4 py-16 xl:p-16 gap-2 w-full min-w-0 justify-center align-center items-center bg-[#EBEAD4] rounded-2xl">
        <p
          className="text-[#1a1a1a] wrap-break-word w-full min-w-0 font-display"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: fontSize >= 40 ? 1.1 : 1.3,
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}
