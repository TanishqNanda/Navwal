import { founders } from "../../lib/constants";
import { Container } from "../ui/Container";

export function Founders() {
  return (
    <section id="founders" className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">The people</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">A small team with a clear point of view.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="border-t border-white/20 pt-5">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  {founder.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold">{founder.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{founder.role}</p>
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">{founder.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

