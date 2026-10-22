import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 md:py-40 text-center">
      <p className="mb-4 uppercase text-sm sm:text-base text-accent font-semibold tracking-widest">
        It support made simple
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight font-bold">
        How can we <span className="text-accent">help you?</span>
      </h1>

      <p className="mt-5 max-w-sm md:max-w-xl text-base sm:text-lg text-gray-400">
        Submit a ticket, track your request, and get the support you need
        quickly and easily.
      </p>

      <Link
        to="/tickets/new"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 font-semibold text-foreground transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Submit a Ticket
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}

export default Hero;
