import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with Spline 3D */}
      <Hero />

      {/* Body sections */}
      <main className="relative z-10">
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/70 py-10 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
