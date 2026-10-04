import type { ReactNode } from "react"
import { buildWhatsAppUrl } from "../../lib/whatsapp"

type buttonText = {
  children: ReactNode
  color?: string
  className?: string
}

export function CTAButton({ children , color , className }: buttonText ){
  let buttonColor = ""
  color == "black" ? buttonColor = "text-white bg-black" : buttonColor = "bg-white"
  return <a 
  className={`font-bold ${buttonColor} rounded-3xl p-3 inline-block transition-transform duration-150 hover:scale-105 active:scale-95 ${className ?? ""}`}
  href={buildWhatsAppUrl("Hi , I would like to book an appointment")}
  target="_blank"
  rel="noopener noreferrer"
  >
  {children}
  </a>
}