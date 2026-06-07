import Icon from "./Icon"

type BackToTopProps = {
  visible: boolean
}

export default function BackToTop({ visible }: BackToTopProps) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 grid h-11 w-11 place-items-center rounded-xl bg-teal-400 text-white shadow-lg transition ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <Icon name="top" />
    </button>
  )
}
