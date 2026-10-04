import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function BookService() {
  return (
    <section id="book" className="py-20 sm:py-24">
        <div className="flex flex-col gap-6 rounded-lg bg-slate-100 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Ready to get started?</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Send a message and let’s find the right next step.</p>
          </div>
          <a
            href={buildWhatsAppUrl('Hloo I would like to book an appointment')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Message on WhatsApp
          </a>
        </div>
    </section>
  );
}

