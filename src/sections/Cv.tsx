import Icon from "../components/Icon"
import SectionTitle from "../components/SectionTitle"

const cvFile = "/cv.pdf"

const cvItems = ["Education", "Technical Skills", "Projects", "Contact Information"]

export default function Cv() {
  return (
    <section id="cv" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Download My" accent="CV" subtitle="My background in one document" />
      <div className="reveal mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-1.5 hover:border-teal-400">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-teal-400/15 to-sky-400/10 text-teal-400">
              <Icon name="file" className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Nguyễn Anh Tuấn - CV</h3>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              View my education, technical skills, project experience, and contact information.
            </p>
          </div>

          <a
            href={cvFile}
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(20,184,166,0.24)]"
          >
            <Icon name="download" /> Download CV
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {cvItems.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-semibold text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
