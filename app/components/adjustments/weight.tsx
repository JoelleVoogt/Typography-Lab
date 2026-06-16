export default function Weight() {
  return (
    <>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-row gap-4">
          <p className="w-full">Weight</p>
          <p className="w-full text-right">400</p>
        </div>
        <input type="range" min={12} max={80} className="w-full" />
      </div>
    </>
  );
}
