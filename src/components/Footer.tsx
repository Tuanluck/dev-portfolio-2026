import { contactInfo } from "../data/portfolio"

type FooterProps = {
  initials: string
}

export default function Footer({ initials }: FooterProps) {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/5 bg-[#111827] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
        <a
          href="#hero"
          className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-xl font-extrabold text-transparent"
        >
          {initials}
        </a>
        <div className="flex flex-wrap gap-5">
          {["hero", "about", "projects", "cv", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm capitalize text-slate-400 transition hover:text-teal-400"
            >
              {item === "hero" ? "Home" : item}
            </a>
          ))}
        </div>
        <p className="basis-full text-center text-sm text-slate-500">
          © 2024 {contactInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
