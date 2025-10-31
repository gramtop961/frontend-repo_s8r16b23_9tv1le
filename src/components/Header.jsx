import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 p-2 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white/90">
            Hello World
          </span>
        </div>
        <nav className="hidden gap-6 text-xs text-white/60 sm:flex">
          <a href="#hello" className="hover:text-white">Home</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
      </div>
    </header>
  );
}
