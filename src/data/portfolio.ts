export type ProjectCategory = "frontend" | "backend" | "fullstack"

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  icon: string
  tech: string[]
  codeUrl?: string
  liveUrl?: string
}

export const contactInfo = {
  name: "Nguyễn Anh Tuấn",
  email: "nguyenanhtuan9690@gmail.com",
  phone: "0397190959",
  location: "Binh Thanh, TP.HCM",
  github: "https://github.com/Tuanluck",
}

export const roles = [
  "Software Engineer Intern",
  "Full-Stack Developer",
  "Information Technology Student",
]

export const navItems = ["about", "education", "skills", "projects", "cv", "contact"]

export const stats = [
  ["1+", "Full-Stack Project"],
  ["3+", "Years Learning"],
  ["15+", "Technologies"],
  ["3.2/4.0", "GPA"],
] as const

export const timeline = [
  {
    date: "2022 - 2026",
    title: "Ho Chi Minh City University of Transport",
    description:
      "Major in Information Technology with a focus on software development, web technologies, and practical full-stack application building. GPA: 3.2/4.0.",
  },
]

export const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Redux Toolkit", "Zustand"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful API", "JWT Authentication"],
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Git/GitHub"],
  },
] as const

export const projects: Project[] = [
  {
    title: "PICKLEHUB",
    description:
      "Pickleball court management system for court booking, tournament operations, POS, loyalty programs, online payments, and real-time booking status.",
    category: "fullstack",
    icon: "dash",
    tech: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "VNPay"],
    codeUrl: "https://github.com/cuongbam123/Pickleball-Court-Management-System",
    liveUrl: "https://picklehub-vn.vercel.app",
  },
  {
    title: "SmartClinic Scheduling System",
    description:
      "A comprehensive clinic scheduling system with features for patient registration, appointment booking, doctor management",
    category: "backend",
    icon: "api",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    codeUrl: "https://github.com/Tuanluck/SmartClinic",
  },
  {
    title: "Sarma Landing Page Clone",
    description:
      "An elegant and impressive copy of the Sarma page — built for educational purposes.",
    category: "frontend",
    icon: "cart",
    tech: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/Tuanluck/samar",
    liveUrl: "https://sarma.netlify.app/",
  },
]
