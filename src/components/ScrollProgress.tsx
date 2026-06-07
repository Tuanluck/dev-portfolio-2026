type ScrollProgressProps = {
  value: number
}

export default function ScrollProgress({ value }: ScrollProgressProps) {
  return (
    <div
      className="fixed left-0 top-0 z-[10000] h-1 bg-gradient-to-r from-teal-400 to-sky-400"
      style={{ width: `${value}%` }}
    />
  )
}
