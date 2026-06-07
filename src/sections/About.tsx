import SectionTitle from "../components/SectionTitle"
import { stats } from "../data/portfolio"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="About" accent="Me" subtitle="A quick introduction" />
      <div className="reveal mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-[1.05rem] leading-8 text-slate-400">
          <p>
            I'm a passionate Full Stack Developer with a love for creating elegant, efficient, and
            scalable applications.
          </p>
          <p>
            I enjoy turning complex ideas into polished interfaces and dependable backend services.
            My favorite work sits where product thinking, clean code, and practical engineering
            meet.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-[#111827] p-6 text-center transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-[0_16px_45px_rgba(20,184,166,0.12)]"
            >
              <div className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-4xl font-extrabold text-transparent">
                {number}
              </div>
              <div className="mt-1 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
