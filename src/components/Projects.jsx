function Projects() {
  const items = [
    {
      title: 'Realtime Collaboration App',
      tags: ['React', 'WebSockets', 'Tailwind'],
      desc: 'Live cursors, presence, and multiplayer editing with a buttery UI.',
      link: '#'
    },
    {
      title: 'AI-Powered Design System',
      tags: ['FastAPI', 'OpenAI', 'Design Tokens'],
      desc: 'Programmatic component generation and theme governance.',
      link: '#'
    },
    {
      title: '3D Interactive Landing',
      tags: ['Spline', 'Three.js', 'Framer Motion'],
      desc: 'Playful product storytelling with performance-minded 3D scenes.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
      <p className="mb-10 max-w-2xl text-slate-300">A snapshot of recent projects. Each one balances engineering rigor with delightful interactions.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur transition hover:bg-white/10">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <span className="text-xs text-white/60">Case Study</span>
            </div>
            <p className="mb-4 text-sm text-slate-300">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-slate-900/60 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/10">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
