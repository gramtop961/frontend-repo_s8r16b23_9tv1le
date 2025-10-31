export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-center">
      <p className="text-xs text-white/50">
        {year} • Built with love and React
      </p>
    </footer>
  );
}
