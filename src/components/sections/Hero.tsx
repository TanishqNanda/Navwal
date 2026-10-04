import { DoodleArrowDown , PencilWeb, CheckTick } from "../ui/handDrawing";

export function Hero() {
  const HERO_QUESTIONS = [
  "Can I book tomorrow?",
  "What are your prices?",
  "Call me back.",
  "Are you open?",
  "I want to know more.",
  "Can I reschedule?",
];

  const HERO_ANSWERS = [
  "answered.",
  "qualified.",
  "booked.",
  "followed up.",
];

  return (
    <section id="top" className="bg-white py-4 ">
      <div className="grid-none sm:grid grid-cols-2 leading-none">
        <div>
          <p className="text-[60px] sm:text-[120px] font-bold p-3">Let's <span>AUTOMATE</span></p>
          <p className="text-[60px] sm:text-[110px] font-bold p-3">the boring work with NAVWAL</p>
          <p className="text-grey-200 text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed m-2 max-w-xl">We build AI systems that answer customers, handle calls, follow up with leads, book appointments and keep working when your team isn't.</p>
        </div>

        <div className="rounded-3xl border border-ink/10 p-3 m-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-3 text-center">
            {HERO_QUESTIONS.map((q) => (
              <div
              key={q}
              className="float-soft text-muted-foreground justify-self-center"
              >
                <PencilWeb>
                <div className=" text-ink text-xl ">{q}</div>  
                </PencilWeb>
              </div>
            ))}
          </div>
          
          <div className=" p-2 flex flex-col items-center">
           <DoodleArrowDown className="h-20 w-10 text-muted-foreground draw-in" />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-center pb-4">NAVWAL</h1>
          </div>

          <div className=" p-2 flex flex-col items-center">
           <DoodleArrowDown className="h-20 w-10 text-muted-foreground draw-in" />
          </div>
            
          <div >
            {HERO_ANSWERS.map((a) => (
              <div className="flex justify-center">
              <CheckTick className="w-6 shrink-0 text-muted-foreground"/>
              <p className="text-2xl text-center">{a}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}

