import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Something went wrong');
      setStatus({ type: 'success', message: 'Thanks! I will get back to you shortly.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Let’s Talk</h2>
      <p className="mb-10 max-w-2xl text-slate-300">Have a project in mind or just want to say hi? Drop a note below.</p>

      <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-white/80">Name</label>
            <input name="name" required className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Ada Lovelace" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">Email</label>
            <input type="email" name="email" required className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="ada@lovelace.dev" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-white/80">Subject</label>
          <input name="subject" className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Let’s build something" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-white/80">Message</label>
          <textarea name="message" required rows="5" className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Tell me a bit about your idea..." />
        </div>

        <div className="flex items-center gap-4">
          <button disabled={loading} className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{status.message}</p>
          )}
        </div>
      </form>
    </section>
  );
}

export default Contact;
