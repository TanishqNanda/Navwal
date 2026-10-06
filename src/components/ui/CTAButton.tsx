import type { ReactNode } from "react"

type buttonText = {
  children: ReactNode
  color?: string
  className?: string
}

export function CTAButton({ children , color , className }: buttonText ){
  let buttonColor = ""
  color == "black" ? buttonColor = "text-white bg-black" : buttonColor = "text-black bg-[#fffcf4]"
  return <button 
  className={`font-bold ${buttonColor} rounded-3xl p-3 inline-block transition-transform duration-150 hover:scale-105 active:scale-95 ${className ?? ""}`}
  onClick={() => {
        document.getElementById("book-service")?.scrollIntoView({ behavior: "smooth" })
      }}
  type="button"
  >
  {children}
  </button>
}