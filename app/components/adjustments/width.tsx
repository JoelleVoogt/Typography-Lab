export default function Width() {
  return (
    <>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-row gap-4">
          <p className="w-full">Width</p>
          <p className="w-full text-right">100</p>
        </div>
        <input type="range" min={12} max={80} className="w-full" />
      </div>
    </>
  );
}
