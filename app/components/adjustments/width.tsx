export default function Width() {
  return (
    <>
      <div className="flex flex-row p-4 gap-2 items-center">
        <p>Width</p>
        <input type="range" min={12} max={80} />
      </div>
    </>
  );
}
