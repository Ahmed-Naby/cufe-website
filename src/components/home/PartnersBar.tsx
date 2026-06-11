import { ScrollReveal } from "@/components/ui/ScrollReveal";

const partners = [
  "ABET Accredited",
  "Cairo University",
  "NAQAAE",
  "IDB Excellence",
  "MENA Engineering",
  "IEEE Student Branch",
];

export function PartnersBar() {
  return (
    <section className="py-14 bg-surface border-t border-border-light">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-body-sm font-medium text-text-muted/40 hover:text-text-muted/70 transition-colors uppercase tracking-widest"
              >
                {partner}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
