import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Microscope, FlaskConical, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Centers & Labs",
  description: "Discover the 13 specialized research centers and 13 advanced research laboratories at Cairo University Faculty of Engineering.",
};

const centers = [
  { name: "Center of Studies & Designs for Water Projects", desc: "Consultancy and structural design for regional municipal water infrastructures." },
  { name: "Engineering Center for Archaeology and Environment", desc: "Scientific restoration, site analyses, and conservation of historical monuments." },
  { name: "Center for Advancement of Post Graduate Studies and Research (CAPSCU)", desc: "The faculty's largest research organ supporting postgraduate research and industry partnerships." },
  { name: "Architectural and Engineering Design Center", desc: "High-level design verification and consultancy for commercial and governmental projects." },
  { name: "Tribology and Spare Parts Center", desc: "Friction, lubrication, wear studies, and mechanical parts durability engineering." },
  { name: "Center for Manufacturing and Sustainable Development Studies", desc: "Developing advanced green manufacturing technologies and lifecycle analysis." },
  { name: "Center for Advanced Software and Biomedical Engineering", desc: "Software engineering consultancies and healthcare systems integrations." },
  { name: "High Tech. Design and Consultation Center", desc: "Advanced electronics and control systems consultancy." },
  { name: "Research and Studies Center of Civil Engineering (RSCCE)", desc: "Leading concrete, structural, and soil testing laboratory services." },
  { name: "Technical Center for Career Development", desc: "Supporting industrial internships, student placements, and professional courses." },
  { name: "Energy Research Center", desc: "Pioneering research in renewable energy, microgrids, and efficiency studies." },
  { name: "Mining Studies and Research Center", desc: "Safe geological surveying and mineral resource planning." },
  { name: "Center of Studies and Training", desc: "Continuing education for practicing field engineers." },
];

const labs = [
  { name: "Electrical Power Laboratory", desc: "Power grid emulation, load testing, and transformer insulation tests." },
  { name: "Hydraulics and Irrigation Laboratory", desc: "Open-channel flow simulations and hydraulic structures scale-model testing." },
  { name: "Rock Engineering Laboratory", desc: "Tunnelling and underground structures stability testing." },
  { name: "Materials Testing Laboratory", desc: "Destructive and non-destructive material property tests." },
  { name: "Highway and Airport Engineering Research Laboratory", desc: "Asphalt properties, traffic simulations, and runway design safety evaluations." },
  { name: "Soil Mechanics and Foundations Research Laboratory", desc: "Subsoil testing, deep foundation analysis, and soil chemistry." },
  { name: "Concrete Research Laboratory", desc: "High-strength concrete design and concrete durability audits." },
  { name: "Measurement & Calibration Lab (MCL) & Project Consulting Group", desc: "Precision sensor calibrations and metrology." },
  { name: "Design Lab for Electronics & Communication Systems", desc: "VLSI chips development, antenna testing, and signal processing research." },
  { name: "Integrated Digital Industrial System Lab", desc: "Robotic assembly lines and manufacturing integration systems." },
  { name: "Computer Engineering Labs", desc: "High-performance computing clusters and artificial intelligence training beds." },
  { name: "Mechanical and Welding Testing Lab", desc: "Alloys characterization and structural welding validations." },
  { name: "Urban Form Lab", desc: "GIS mapping, spatial architecture audits, and cities design planning." },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research Centers & Labs"
        subtitle="Exploring the specialized centers and advanced experimental laboratories at the Giza campus."
        breadcrumbs={[{ label: "Research", href: "/research" }]}
      />

      {/* Research Centers */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Research Centers"
            subtitle="13 specialized institutions providing consultancy and advanced research for the region"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {centers.map((center, i) => (
              <div key={i} className="group bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="inline-flex p-2.5 rounded-lg bg-navy-50 text-navy-600 mb-4 group-hover:bg-navy-100 transition-colors">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-body-sm text-navy-700 mb-2 leading-snug group-hover:text-gold-600 transition-colors">
                    {center.name}
                  </h3>
                  <p className="text-caption text-text-secondary leading-relaxed">
                    {center.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between text-caption text-gold-500 font-semibold cursor-pointer">
                  <span>Visit Center Page</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Labs */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Advanced Research Laboratories"
            subtitle="13 experimental facilities driving academic research and quality validations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {labs.map((lab, i) => (
              <div key={i} className="group bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="inline-flex p-2.5 rounded-lg bg-gold-50 text-gold-500 mb-4 group-hover:bg-gold-100 transition-colors">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-body-sm text-navy-700 mb-2 leading-snug group-hover:text-gold-600 transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-caption text-text-secondary leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between text-caption text-gold-500 font-semibold cursor-pointer">
                  <span>Lab Capabilities & Equipment</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
