import { useState } from "react";
import { Headset, Menu } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-slate-700">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-10 py-4">
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
        >
          <Headset size={30} />
          <span className="text-2xl">
            Helpdesk <span className="text-accent">Hub</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            Home
          </a>
          <a
            href="/submit-ticket"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            Submit Ticket
          </a>
          <a
            href="/my-tickets"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            My Ticket
          </a>
          <a
            href="/sign-in"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            Sign In
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-b border-border bg-border px-6 py-4 md:hidden">
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="/submit-ticket" onClick={() => setIsMenuOpen(false)}>
            Submit Ticket
          </a>
          <a href="/my-tickets" onClick={() => setIsMenuOpen(false)}>
            My Tickets
          </a>
          <a href="/sign-in" onClick={() => setIsMenuOpen(false)}>
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
