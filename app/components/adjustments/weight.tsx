export default function Weight() {
  return (
    <>
      <div className="flex flex-row p-4 gap-2 items-center">
        <input type="range" min={12} max={80} />
        <p>Weight</p>
      </div>
    </>
  );
}
