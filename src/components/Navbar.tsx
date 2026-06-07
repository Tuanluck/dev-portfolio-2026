import Icon from "./Icon"
import { navItems } from "../data/portfolio"

type NavbarProps = {
  activeSection: string
  initials: string
  mobileOpen: boolean
  onToggleMobile: () => void
  onCloseMobile: () => void
}

export default function Navbar({
  activeSection,
  initials,
  mobileOpen,
  onToggleMobile,
  onCloseMobile,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b1120]/80 px-6 py-4 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#hero"
          className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-xl font-extrabold text-transparent"
        >
          {initials}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative text-sm font-medium capitalize transition ${
                activeSection === item ? "text-teal-400" : "text-slate-400 hover:text-teal-400"
              }`}
            >
              {item}
              {activeSection === item && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-teal-400" />
              )}
            </a>
          ))}
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-100 md:hidden"
          onClick={onToggleMobile}
          type="button"
          aria-label="Toggle navigation"
        >
          <Icon name={mobileOpen ? "x" : "menu"} />
        </button>
      </nav>
      {mobileOpen && (
        <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-3 border-t border-white/5 pt-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="py-1 text-sm font-medium capitalize text-slate-300"
              onClick={onCloseMobile}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
