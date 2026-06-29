export default function Footer() {
  return (
    <div
      className="relative w-full bottom-0 left-0 border-t border-t-[#34342f]"
      id="footer"
    >
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-4 md:py-8 py-12 gap-4">
        {" "}
        <p className="text-sm text-surface-200 font-mono">
          // Built with VSCode & Next.js
        </p>
        <p className="text-sm text-brand-400 font-mono">
          &copy; Joelle Voogt 2026
        </p>
      </div>
    </div>
  );
}
