import { contactInfo } from "../data/portfolio"

type LoaderProps = {
  loading: boolean
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1120] transition duration-700 ${
        loading ? "opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div className="animate-pulse-scale bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-[clamp(2rem,5vw,4rem)] font-extrabold text-transparent">
        {contactInfo.name}
      </div>
      <div className="mt-8 h-1 w-52 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-sky-400 animate-load-fill" />
      </div>
    </div>
  )
}
