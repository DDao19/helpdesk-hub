import { Send } from "lucide-react";

function TicketSubmission() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Submit a Ticket
        </h1>

        <p className="mt-3 text-muted">
          Tell us what you need help with, and our support team will get back to
          you.
        </p>
      </div>

      <form className="space-y-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-foreground"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full rounded border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            placeholder="Enter the subject of your ticket"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-foreground"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={10}
            className="w-full rounded border border-border bg-surface px-4 py-2 resize-y text-foreground placeholder:text-muted focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            placeholder="Provide a detailed description of your issue or request"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 font-semibold text-foreground cursor-pointer transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Send size={16} />
            Submit Ticket
          </button>
        </div>
      </form>
    </main>
  );
}

export default TicketSubmission;
