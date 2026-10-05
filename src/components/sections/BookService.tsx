import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function BookService() {
  return (
    <section className="bg-black py-10 px-3 sm:p-25">
      <div className="mb-8">
        <h2 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold sm:w-200 md:w-150  m-2">GIVE US ONE BORING PROCESS.</h2>
        <p className="text-gray-400 text-sm sm:text-xl md:text-2xl sm:w-160 mx-2">Tell us what your team does repeatedly. We'll show you where AI can take over.</p>  
      </div>
      <a
            href={buildWhatsAppUrl('Hloo I would like to book an appointment')}
            target="_blank"
            rel="noreferrer"
            className="my-4 p-3 text-black font-bold bg-white rounded-2xl hover:p-4 active:p-4"
          >
            FIND MY AUTOMATION
          </a>
    </section>
  );
}
