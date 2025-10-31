import { Sparkles } from 'lucide-react';

export default function Greeting() {
  return (
    <section id="hello" className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
          <span>Vite + React + Tailwind</span>
        </div>
        <h1 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Hello, World!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          A tiny starter showcasing a crisp design and clean React components. Edit, extend, and ship.
        </p>
      </div>
    </section>
  );
}
