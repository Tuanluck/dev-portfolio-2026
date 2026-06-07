type SectionTitleProps = {
  title: string
  accent: string
  subtitle: string
}

export default function SectionTitle({ title, accent, subtitle }: SectionTitleProps) {
  return (
    <div className="reveal">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight">
        {title}{" "}
        <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
          {accent}
        </span>
      </h2>
      <p className="mt-3 text-lg text-slate-400">{subtitle}</p>
    </div>
  )
}
