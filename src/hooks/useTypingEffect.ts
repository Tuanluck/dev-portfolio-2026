import { useEffect, useState } from "react"

export function useTypingEffect(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80)
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), 1400)
    } else if (text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40)
    } else {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [deleting, index, text, words])

  return text
}
