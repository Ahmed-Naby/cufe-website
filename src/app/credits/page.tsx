import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Code, User, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Credits",
  description:
    "Acknowledgments and development team behind the Faculty of Engineering, Cairo University website.",
};

const teamMembers = [
  "Eng. Khaled Mohammad Ibrahim",
  "Eng. Mohamed Ezz",
  "Eng. Mohamed El-Housieny",
  "Eng. Mahmoud Moustafa",
  "Eng. Mohamed Magdy",
];

export default function CreditsPage() {
  return (
    <>
      <PageHero
        title="Site Credits"
        subtitle="Acknowledgments and development team"
        breadcrumbs={[{ label: "Credits", href: "/credits" }]}
      />

      {/* Development Team */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 lg:p-12 shadow-card max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
              <Code className="h-6 w-6" />
            </div>

            <h2 className="font-heading font-bold text-h2 text-navy-700 mb-2">
              Development Team
            </h2>
            <p className="text-body-sm text-text-secondary mb-8">
              Developed by the Information Systems &amp; Technology Department
            </p>

            {/* Lead */}
            <div className="bg-surface rounded-[var(--radius-card)] border border-border-light p-6 mb-8">
              <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4">
                <User className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-1">
                Project Lead
              </h3>
              <p className="text-body-sm text-text-secondary font-medium">
                Prof. Dr. Samir Ibrahim Shaheen
              </p>
            </div>

            {/* Team Members */}
            <div className="bg-surface rounded-[var(--radius-card)] border border-border-light p-6 mb-8">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-4">
                Team Members
              </h3>
              <ul className="space-y-2">
                {teamMembers.map((member, i) => (
                  <li
                    key={i}
                    className="text-body-sm text-text-secondary flex items-center justify-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-caption text-text-muted italic">
              Modern redesign built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="text-center">
            <p className="text-body-sm text-text-secondary">
              &copy; Information Systems &amp; Technology Department, Faculty of
              Engineering &mdash; Cairo University
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
