import type { IconType } from "react-icons"
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa"
import {
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbApi, TbBrandGithub } from "react-icons/tb"
import SectionTitle from "../components/SectionTitle"
import { skills } from "../data/portfolio"

type SkillsProps = {
  visible: boolean
}

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  JavaScript: { icon: SiJavascript, color: "text-yellow-300" },
  TypeScript: { icon: SiTypescript, color: "text-sky-400" },
  "React.js": { icon: FaReact, color: "text-cyan-300" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-teal-300" },
  "Redux Toolkit": { icon: SiRedux, color: "text-violet-400" },
  Zustand: { icon: TbBrandGithub, color: "text-slate-300" },
  "Node.js": { icon: FaNodeJs, color: "text-green-400" },
  "Express.js": { icon: SiExpress, color: "text-slate-200" },
  "RESTful API": { icon: TbApi, color: "text-emerald-300" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "text-pink-400" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  MySQL: { icon: SiMysql, color: "text-blue-300" },
  PostgreSQL: { icon: SiPostgresql, color: "text-sky-300" },
  "Git/GitHub": { icon: FaGitAlt, color: "text-orange-400" },
}

export default function Skills({ visible }: SkillsProps) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Technical" accent="Skills" subtitle="Tools I use to build products" />
      <div className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-teal-400/40"
          >
            <h3 className="mb-6 text-lg font-bold text-teal-400">{category.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {category.items.map((name, index) => {
                const skill = skillIcons[name]
                const SkillIcon = skill.icon

                return (
                  <div
                    key={name}
                    className={`group flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition duration-500 hover:-translate-y-1 hover:border-teal-400/50 hover:bg-teal-400/10 ${
                      visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <SkillIcon
                      className={`h-9 w-9 transition duration-300 group-hover:scale-110 ${skill.color}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold leading-5 text-slate-300">{name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
