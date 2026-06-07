import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronUp,
  Code2,
  Download,
  ExternalLink,
  FileText,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShoppingCart,
  Server,
  X,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { IconType } from "react-icons"

const icons: Record<string, LucideIcon | IconType> = {
  api: Server,
  arrow: ArrowRight,
  cart: ShoppingCart,
  code: Code2,
  dash: LayoutDashboard,
  download: Download,
  file: FileText,
  github: FaGithub,
  link: ExternalLink,
  mail: Mail,
  menu: Menu,
  phone: Phone,
  pin: MapPin,
  send: Send,
  top: ChevronUp,
  work: BriefcaseBusiness,
  x: X,
}

type IconProps = {
  name: string
  className?: string
}

export default function Icon({ name, className = "" }: IconProps) {
  const IconComponent = icons[name] ?? BarChart3

  return <IconComponent aria-hidden="true" className={`shrink-0 ${className}`} strokeWidth={2} />
}
