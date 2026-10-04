import { problems } from "../../lib/constants";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";

export function Problems() {
  return (
    <section id="problems" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">The problem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Less friction. More forward motion.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => (
            <GlassCard key={problem.title}>
              <h3 className="font-semibold text-slate-950">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{problem.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

