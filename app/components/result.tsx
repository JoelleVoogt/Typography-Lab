export default function Result({ text }: { text: string }) {
  return (
    <>
      <div className="flex flex-row px-4 py-16 xl:p-16 gap-2 w-full min-w-0 justify-center align-center items-center text-2xl/[1.4] lg:text-4xl/[1.4] bg-[#EBEAD4] rounded-2xl">
        <p className="text-[#1a1a1a] wrap-break-word w-full min-w-0">{text}</p>
      </div>
    </>
  );
}
