import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { DepartmentDirectory } from "@/components/contact/DepartmentDirectory";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Faculty of Engineering at Cairo University. Find our location, contact details, and department directory.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us with questions, feedback, or inquiries."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — Info + Form */}
            <div className="lg:col-span-3 space-y-10">
              <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
                <h2 className="font-heading font-bold text-h2 text-navy-700 mb-6">
                  Get in Touch
                </h2>
                <ContactInfo />
              </div>

              <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
                <h2 className="font-heading font-bold text-h2 text-navy-700 mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Right — Map */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section id="faq" className="py-16 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Department Directory"
            subtitle="Contact details for all 16 departments"
          />
          <div className="max-w-3xl mx-auto bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
            <DepartmentDirectory />
          </div>
        </div>
      </section>
    </>
  );
}
