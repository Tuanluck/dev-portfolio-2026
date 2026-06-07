import { useState } from "react"
import type { FormEvent } from "react"
import Icon from "../components/Icon"
import SectionTitle from "../components/SectionTitle"
import { contactInfo } from "../data/portfolio"

const contactCards = [
  ["mail", "Email", contactInfo.email],
  ["phone", "Phone", contactInfo.phone],
  ["pin", "Location", contactInfo.location],
] as const

const fields = [
  ["name", "Name", "Your name", "text"],
  ["email", "Email", "your@email.com", "email"],
  ["subject", "Subject", "What's this about?", "text"],
] as const

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Get In" accent="Touch" subtitle="Let's work together" />
      <div className="reveal mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          {contactCards.map(([icon, label, value]) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#111827] p-5 transition hover:translate-x-1 hover:border-teal-400"
            >
              <div className="grid h-12 w-12 place-items-center rounded-[10px] bg-gradient-to-br from-teal-400/15 to-sky-400/10 text-teal-400">
                <Icon name={icon} />
              </div>
              <div>
                <div className="text-sm text-slate-400">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="grid min-h-80 place-items-center rounded-2xl border border-teal-400/30 bg-[#111827] p-8 text-center text-lg font-semibold text-teal-400">
            Message sent successfully! I'll get back to you soon.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            {fields.map(([id, label, placeholder, type]) => (
              <label key={id} className="block">
                <span className="mb-2 block text-sm font-medium text-slate-400">{label}</span>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  required
                  className="w-full rounded-[10px] border border-white/10 bg-[#111827] px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-600 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
                />
              </label>
            ))}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-400">Message</span>
              <textarea
                name="message"
                placeholder="Your message..."
                required
                className="min-h-32 w-full resize-y rounded-[10px] border border-white/10 bg-[#111827] px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-600 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
            >
              <Icon name="send" /> Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
