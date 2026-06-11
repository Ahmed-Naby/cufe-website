import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Prizes & Awards",
  description:
    "State-sponsored prizes and awards for excellence in engineering sciences at Cairo University Faculty of Engineering.",
};

const prizes = [
  "Nile Prize (formerly Mubarak Prize)",
  "State Appreciation Prize in Engineering Sciences",
  "State Appreciation Prize in Advanced Technology Sciences",
  "State Encouragement Prize in Engineering Sciences",
  "State Encouragement Prize in Basic Sciences",
  "State Scientific Excellence Prize in Engineering Sciences",
  "State Scientific Excellence Prize in Advanced Technology Sciences",
];

export default function PrizesPage() {
  return (
    <>
      <PageHero
        title="Prizes & Awards"
        subtitle="State-sponsored prizes for excellence in engineering sciences"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "Prizes", href: "/faculty/prizes" },
        ]}
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="State Prizes"
            subtitle="Recognizing outstanding contributions to engineering and technology in Egypt"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prizes.map((prize, i) => (
              <div
                key={i}
                className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-body text-navy-700">
                  {prize}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
