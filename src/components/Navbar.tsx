import { useState } from "react";
import { Link } from "react-router-dom";
import { Headset, Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-slate-700">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
        >
          <Headset size={30} />
          <span className="text-2xl">
            Helpdesk <span className="text-accent">Hub</span>
          </span>
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            Home
          </Link>
          <Link
            to="/tickets/new"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            Submit Ticket
          </Link>
          <Link
            to="/my-tickets"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            My Ticket
          </Link>
          <Link
            to="/sign-in"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-md"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile menu button */}
        {isMenuOpen ? (
          <button
            type="button"
            className="md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X size={30} />
          </button>
        ) : (
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
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col bg-border md:hidden mobile-menu-enter">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 border-b border-foreground/10 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Home
          </Link>
          <Link
            to="/tickets/new"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 border-b border-foreground/10 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Submit Ticket
          </Link>
          <Link
            to="/my-tickets"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 border-b border-foreground/10 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            My Tickets
          </Link>
          <Link
            to="/sign-in"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 border-foreground/10 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
