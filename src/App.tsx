import { useEffect, useMemo, useState } from "react"
import BackToTop from "./components/BackToTop"
import FloatingBackground from "./components/FloatingBackground"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import ScrollProgress from "./components/ScrollProgress"
import { contactInfo, navItems } from "./data/portfolio"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Cv from "./sections/Cv"
import Education from "./sections/Education"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)

  const initials = useMemo(
    () =>
      contactInfo.name
        .split(" ")
        .map((word) => word[0])
        .join(""),
    [],
  )

  useEffect(() => {
    const loader = window.setTimeout(() => setLoading(false), 2500)

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
      setShowTop(window.scrollY > 400)

      const current =
        ["hero", ...navItems].findLast((id) => {
          const section = document.getElementById(id)
          return section ? window.scrollY >= section.offsetTop - 220 : false
        }) ?? "hero"

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.clearTimeout(loader)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSkillsVisible(true)
        }
      },
      { threshold: 0.25 },
    )

    document.querySelectorAll(".reveal, .timeline-item").forEach((el) => {
      revealObserver.observe(el)
    })

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      skillObserver.observe(skillsSection)
    }

    return () => {
      revealObserver.disconnect()
      skillObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b1120] font-sans text-slate-50 selection:bg-teal-400/30">
      <Loader loading={loading} />
      <ScrollProgress value={scrollProgress} />
      <FloatingBackground />
      <Navbar
        activeSection={activeSection}
        initials={initials}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        onToggleMobile={() => setMobileOpen((value) => !value)}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills visible={skillsVisible} />
        <Projects />
        <Cv />
        <Contact />
      </main>

      <Footer initials={initials} />
      <BackToTop visible={showTop} />
    </div>
  )
}
