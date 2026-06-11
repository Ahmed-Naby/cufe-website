import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty Council Magazine",
  description:
    "Monthly records of faculty council meetings and decisions at Cairo University Faculty of Engineering.",
};

const magazineYears = [
  {
    year: "2016 - 2017",
    months: ["October 2016", "November 2016", "December 2016", "January 2017", "February 2017", "March 2017", "April 2017", "May 2017", "June 2017"],
  },
  {
    year: "2015 - 2016",
    months: ["October 2015", "November 2015", "December 2015", "January 2016", "February 2016", "March 2016", "April 2016", "May 2016", "June 2016"],
  },
  {
    year: "2014 - 2015",
    months: ["October 2014", "November 2014", "December 2014", "January 2015", "February 2015", "March 2015", "April 2015", "May 2015", "June 2015"],
  },
  {
    year: "2013 - 2014",
    months: ["October 2013", "November 2013", "December 2013", "January 2014", "February 2014", "March 2014", "April 2014", "May 2014", "June 2014"],
  },
  {
    year: "2012 - 2013",
    months: ["October 2012", "November 2012", "December 2012", "January 2013", "February 2013", "March 2013", "April 2013", "May 2013", "June 2013"],
  },
  {
    year: "2011 - 2012",
    months: ["October 2011", "November 2011", "December 2011", "January 2012", "February 2012", "March 2012", "April 2012", "May 2012", "June 2012"],
  },
  {
    year: "2007 - 2008",
    months: ["October 2007", "November 2007", "December 2007", "January 2008", "February 2008", "March 2008", "April 2008", "May 2008", "June 2008"],
  },
  {
    year: "2006 - 2007",
    months: ["October 2006", "November 2006", "December 2006", "January 2007", "February 2007", "March 2007", "April 2007", "May 2007", "June 2007"],
  },
  {
    year: "2005 - 2006",
    months: ["October 2005", "November 2005", "December 2005", "January 2006", "February 2006", "March 2006", "April 2006", "May 2006", "June 2006"],
  },
];

const accordionItems = magazineYears.map((entry) => ({
  id: entry.year,
  title: `Academic Year ${entry.year}`,
  content: (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {entry.months.map((month) => (
        <a
          key={month}
          href="#"
          className="flex items-center gap-2 p-3 rounded-lg bg-surface hover:bg-navy-50 transition-colors group"
        >
          <FileText className="h-4 w-4 text-gold-500 flex-shrink-0" />
          <span className="text-caption text-text-secondary group-hover:text-navy-700 transition-colors">
            {month}
          </span>
        </a>
      ))}
    </div>
  ),
}));

export default function MagazinePage() {
  return (
    <>
      <PageHero
        title="Faculty Council Magazine"
        subtitle="Monthly records of faculty council meetings and decisions"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "Magazine", href: "/faculty/magazine" },
        ]}
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Council Meeting Records"
            subtitle="Browse faculty council magazines by academic year"
          />

          <div className="max-w-3xl mx-auto bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>
    </>
  );
}
