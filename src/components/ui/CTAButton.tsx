import type { ReactNode } from "react"

type buttonText = {
  buttonName: ReactNode
}

export function CTAButton({ buttonName }: buttonText ){
  return <button className="font-bold bg-white rounded-lg p-3 hover:px-4" >
    {buttonName}
  </button>
}