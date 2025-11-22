function About() {
  const stats = [
    { k: 'Projects', v: '28+' },
    { k: 'Clients', v: '16' },
    { k: 'Years', v: '5' },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="mb-4 text-slate-300">I’m a full‑stack engineer with a design background. I love turning complex problems into simple, beautiful interfaces and robust systems.</p>
          <p className="text-slate-300">Outside of work, you’ll find me exploring 3D art, sound design, and tinkering with micro‑interactions.</p>

          <div className="mt-8 flex gap-6">
            {stats.map((s) => (
              <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-white/90 backdrop-blur">
                <div className="text-2xl font-bold text-white">{s.v}</div>
                <div className="text-xs uppercase tracking-wide text-white/60">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-2xl"></div>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
            <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.25),transparent_35%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.25),transparent_35%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
