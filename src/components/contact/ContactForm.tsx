"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { departments } from "@/data/departments";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-surface-alt rounded-[var(--radius-card)] border border-border-light">
        <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-h3 text-navy-700 mb-2">
          Message Sent!
        </h3>
        <p className="text-body-sm text-text-secondary max-w-md mx-auto">
          Thank you for reaching out. We&apos;ll get back to you within 2–3 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-body-sm font-medium text-gold-500 hover:text-gold-600 transition-colors cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-body-sm font-medium text-text-primary mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full h-11 px-4 rounded-[var(--radius-button)] border border-border bg-surface text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-shadow"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-body-sm font-medium text-text-primary mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full h-11 px-4 rounded-[var(--radius-button)] border border-border bg-surface text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-shadow"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="department" className="block text-body-sm font-medium text-text-primary mb-1.5">
            Department
          </label>
          <select
            id="department"
            className="w-full h-11 px-4 rounded-[var(--radius-button)] border border-border bg-surface text-body-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-shadow"
          >
            <option value="">General Inquiry</option>
            {departments.map((dept) => (
              <option key={dept.slug} value={dept.slug}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block text-body-sm font-medium text-text-primary mb-1.5">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full h-11 px-4 rounded-[var(--radius-button)] border border-border bg-surface text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-shadow"
            placeholder="+20 XX XXXX XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-body-sm font-medium text-text-primary mb-1.5">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          required
          className="w-full h-11 px-4 rounded-[var(--radius-button)] border border-border bg-surface text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-shadow"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm font-medium text-text-primary mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-border bg-surface text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-shadow resize-y"
          placeholder="Your message..."
        />
      </div>

      <Button type="submit" size="lg" rightIcon={<Send className="h-4 w-4" />}>
        Send Message
      </Button>
    </form>
  );
}
