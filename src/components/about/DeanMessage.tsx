import { User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { deanInfo } from "@/data/faculty-info";

export function DeanMessage() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Dean photo */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] bg-navy-50 rounded-[var(--radius-card)] overflow-hidden shadow-card relative">
                {deanInfo.image ? (
                  <img
                    src={deanInfo.image}
                    alt={deanInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
                        <User className="h-12 w-12 text-navy-300" />
                      </div>
                      <h3 className="font-heading font-bold text-h3 text-navy-700">
                        {deanInfo.name}
                      </h3>
                      <p className="text-body-sm text-text-muted mt-1">
                        {deanInfo.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gold-500 font-heading font-semibold text-body-sm uppercase tracking-widest mb-2">
                  Dean&apos;s Message
                </p>
                <h2 className="font-heading font-bold text-h1 text-navy-700 tracking-tight">
                  Welcome to Our Faculty
                </h2>
                <div className="mt-3 h-[3px] w-10 rounded-full bg-gold-400" />
              </div>

              <div className="prose-cufe">
                {deanInfo.message.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-body text-text-secondary leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
