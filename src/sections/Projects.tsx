import { useMemo, useState } from "react"
import Icon from "../components/Icon"
import SectionTitle from "../components/SectionTitle"
import { projects } from "../data/portfolio"
import type { ProjectCategory } from "../data/portfolio"

const filters: Array<"all" | ProjectCategory> = ["all", "frontend", "backend", "fullstack"]

export default function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all")

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "all" || project.category === filter),
    [filter],
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Featured" accent="Projects" subtitle="Some things I've built" />
      <div className="reveal mt-10 flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-5 py-2 text-sm font-medium capitalize transition ${
              filter === item
                ? "border-teal-400 bg-teal-400 text-white"
                : "border-white/10 bg-[#111827] text-slate-400 hover:border-teal-400 hover:text-teal-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="reveal mt-10 grid gap-7 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition hover:-translate-y-1.5 hover:border-teal-400/50 hover:shadow-2xl"
          >
            <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br from-teal-400/10 to-sky-400/5">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-400/10 to-transparent transition duration-700 hover:translate-x-full" />
              <Icon name={project.icon} className="h-16 w-16 text-2xl text-teal-400/70" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-white/30 hover:text-white"
                  >
                    <Icon name="github" /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(20,184,166,0.25)]"
                  >
                    <Icon name="link" /> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
