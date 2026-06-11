import { MapPin, Clock } from "lucide-react";
import type { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);

  return (
    <div className="group flex gap-4 bg-white p-5 rounded-[var(--radius-card)] border border-border-light shadow-card hover:shadow-card-hover transition-all duration-300">
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
        <p className="text-body-sm text-text-secondary line-clamp-2 mb-2">
          {event.description}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 text-caption text-text-muted">
            <Clock className="h-3 w-3" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5 text-caption text-text-muted">
            <MapPin className="h-3 w-3" />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}
