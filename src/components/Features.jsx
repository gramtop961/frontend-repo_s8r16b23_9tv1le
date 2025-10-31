import { Star, Globe, Heart } from 'lucide-react';

const items = [
  {
    icon: Star,
    title: 'Fast & Modern',
    desc: 'Built with Vite and React for instant feedback and speedy builds.',
  },
  {
    icon: Globe,
    title: 'Ready to Deploy',
    desc: 'Clean structure, sensible defaults, and production-friendly styling.',
  },
  {
    icon: Heart,
    title: 'Delightful UI',
    desc: 'Thoughtful spacing, subtle gradients, and accessible components.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-2 text-indigo-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-white/90">{title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/60">{desc}</p>
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
