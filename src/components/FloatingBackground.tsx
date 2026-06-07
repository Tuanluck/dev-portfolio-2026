export default function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <span className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl animate-float-bg" />
      <span className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-sky-400/5 blur-3xl animate-float-bg-delayed" />
      <span className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-300/5 blur-3xl animate-float-bg-slow" />
    </div>
  )
}
