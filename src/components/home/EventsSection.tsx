import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { events } from "@/data/events";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EventsSection() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="py-24 bg-surface-alt">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Conferences, workshops, and campus activities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => {
            const date = new Date(event.date);
            return (
              <ScrollReveal key={event.slug} delay={i * 0.1}>
                <div className="group flex gap-4 bg-white p-5 rounded-[var(--radius-card)] border border-border-light shadow-card hover:shadow-card-hover transition-all duration-300">
                  {/* Date badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gold-50 rounded-lg flex flex-col items-center justify-center border border-gold-100">
                    <span className="text-h3 font-heading font-bold text-gold-500 leading-none">
                      {date.getDate()}
                    </span>
                    <span className="text-caption font-medium text-gold-600 uppercase">
                      {date.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-body text-navy-700 mb-1.5 line-clamp-2 group-hover:text-gold-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-caption text-text-muted">
                        <Clock className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-caption text-text-muted">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-body font-medium text-gold-500 hover:text-gold-600 transition-colors group"
          >
            View All Events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
