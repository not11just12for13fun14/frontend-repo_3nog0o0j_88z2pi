import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to blend with content (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 sm:pt-36">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
          Interactive • Playful • Modern
        </span>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Hi, I’m <span className="text-blue-400">Your Name</span>.
          <br className="hidden sm:block" /> I build delightful digital products.
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          A developer and designer focused on crafting immersive, user-centric experiences. Explore my work and let’s create something exceptional together.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
