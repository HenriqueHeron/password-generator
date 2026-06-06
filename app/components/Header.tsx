export default function Header(): React.ReactNode {
  return (
    <header className="pt-14 pb-6 text-center select-none">
      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        Password{' '}
        <span className="text-violet-400">Generator</span>
      </h1>
      <p className="text-gray-500 mt-3 text-sm tracking-wide">
        Generate strong, secure passwords instantly
      </p>
    </header>
  );
}
