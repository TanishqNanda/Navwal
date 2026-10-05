import { X , Check } from 'lucide-react';

export function ProblemSection(){
  return (
    <section className="bg-black py-10 sm:py-4 ">
      <div className="p-4 sm:p-20">
        <p className="leading-none text-white text-[60px] sm:text-[100px] font-bold">YOUR BUSINESS HAS A LOT OF WORK.</p>
        <p className="leading-none text-gray-400 text-[60px] sm:text-[100px] font-bold py-4">NOT ALL OF IT NEEDS A HUMAN. </p>
        <p className="text-gray-500 text-xl sm:text-2xl">We find the <span className="text-white font-bold">repetitive work</span> and build an AI system around it </p>
      </div>
    </section>
  )
 
}

export function MoneyProblemSection(){
  const MOST_BUSINESSES = [
 "Lead arrives",
"Nobody replies immediately",
"Lead waits",
"Someone forgets",
"Follow-up never happens",
"Potential customer disappears"
  ]
  const NAVWAL_ACTIONS = [
  "Lead arrives",
  "AI responds",
  "AI qualifies",
  "AI books",
  "AI follows up",
  "Your team takes over when a human is actually needed"
]
  return (
    <section className="bg-[#fffcf4]">
      <div className="bg-inherit p-4 ">
        <div className="md:pr-70 my-4 sm:mt-4 mb-8">
          <p className="leading-none font-bold text-4xl sm:text-6xl">THIS IS WHERE YOUR MONEY DISAPPEARS.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='bg-black border-3 border-black-solid rounded-3xl p-4 text-center'>
            <span className='flex gap-4 justify-center mb-4'>
              <p className='text-white font-bold text-4xl'>MOST BUSINESSES </p>
              <X className="w-10 h-10 font-bold text-white"/>
            </span>
            <div>
              {MOST_BUSINESSES.map((s) => (
                <div className='text-gray-400 '>
                <p className='text-xl'>{s}</p>
                <p className='text-center'>|</p>
                </div>
              ))}
            </div>
          </div>
          <div className='border-3 border-black-solid rounded-3xl p-4 text-center'>
            <span className='flex gap-4 justify-center mb-4'>
              <p className='font-bold text-4xl'>NAVWAL</p>
              <Check className="w-10 h-10 font-bold text-black"/>
            </span>
            <div>
              {NAVWAL_ACTIONS.map((s) => (
                <div>
                <p className='text-xl'>{s}</p>
                <p className='text-center'>|</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}