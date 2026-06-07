import Icon from "../components/Icon"
import personalPhoto from "../assets/anhcanhan.jpg"
import { contactInfo, roles } from "../data/portfolio"
import { useTypingEffect } from "../hooks/useTypingEffect"

export default function Hero() {
  const typedText = useTypingEffect(roles)
  const socialLinks = [
    { icon: "github", href: contactInfo.github, label: "GitHub" },
    { icon: "mail", href: `mailto:${contactInfo.email}`, label: "Email" },
  ]

  return (
    <section
      id="hero"
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-20 pt-28 md:grid-cols-2"
    >
      <div>
        <p className="animate-fade-up text-lg font-medium text-teal-400">Hello, I'm</p>
        <h1 className="animate-fade-up-delay-1 mt-2 text-[clamp(2.8rem,8vw,4.6rem)] font-black leading-[1.05]">
          {contactInfo.name}
        </h1>
        <div className="animate-fade-up-delay-2 mt-5 h-9 text-xl text-slate-400 md:text-2xl">
          <span className="text-sky-400">{typedText}</span>
          <span className="ml-1 border-r-2 border-sky-400 pr-1 animate-caret" />
        </div>
        <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(20,184,166,0.28)]"
          >
            View Projects <Icon name="arrow" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-400 px-7 py-3 font-semibold text-teal-400 transition hover:-translate-y-0.5 hover:bg-teal-400 hover:text-white"
          >
            Contact Me
          </a>
        </div>
        <div className="animate-fade-up-delay-4 mt-8 flex gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="grid h-11 w-11 place-items-center rounded-[10px] border border-white/10 bg-[#111827] text-sm text-slate-400 transition hover:-translate-y-1 hover:border-teal-400 hover:text-teal-400"
              aria-label={item.label}
            >
              <Icon name={item.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="animate-fade-up-delay-2 relative mx-auto grid h-80 w-80 place-items-center sm:h-96 sm:w-96">
        <div className="absolute inset-0 rounded-full bg-teal-400/10 blur-2xl animate-float" />
        <div className="absolute inset-8 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-teal-400/30 to-sky-400/20 animate-morph" />
        <div className="absolute inset-12 rounded-full border border-teal-300/20" />
        <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-teal-400/25 to-sky-400/10 p-2 shadow-2xl shadow-teal-950/40 sm:h-72 sm:w-72">
          <div className="h-full w-full overflow-hidden rounded-full bg-white">
            <img
              src={personalPhoto}
              alt={contactInfo.name}
              className="h-full w-full scale-110 object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
