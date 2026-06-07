import SectionTitle from "../components/SectionTitle"
import { timeline } from "../data/portfolio"

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Education" accent="Timeline" subtitle="Learning path and milestones" />
      <div className="mt-12 border-l-2 border-l-teal-400 pl-8">
        {timeline.map((item) => (
          <div key={item.title} className="timeline-item relative mb-12 pl-6 last:mb-0">
            <span className="absolute -left-[2.45rem] top-2 h-4 w-4 rounded-full border-[3px] border-[#0b1120] bg-teal-400 shadow-[0_0_0_3px_#14b8a6]" />
            <p className="text-sm font-semibold text-teal-400">{item.date}</p>
            <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>
            <p className="mt-2 max-w-2xl leading-7 text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
