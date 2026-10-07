import type { ReactNode } from "react"

type buttonText = {
  children: ReactNode
  color?: string
  className?: string
}

export function CTAButton({ children , className }: buttonText ){
 
  return <button 
  className={`font-bold bg-black text-white rounded-3xl p-3 inline-block transition-transform duration-150 hover:scale-105 active:scale-95 ${className ?? ""}`}
  onClick={() => {
        document.getElementById("book-service")?.scrollIntoView({ behavior: "smooth" })
      }}
  type="button"
  >
  {children}
  </button>
}