import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import { Facebook, Youtube, Linkedin, Twitter } from "@/components/ui/BrandIcons";
import { CONTACT, SOCIAL } from "@/lib/constants";

const facultyLinks = [
  { label: "Dean's Word", href: "/about" },
  { label: "Faculty Leadership", href: "/faculty/leadership" },
  { label: "Building Maps", href: "/faculty/building-maps" },
  { label: "Council Magazine", href: "/faculty/magazine" },
  { label: "Quality Assurance", href: "/faculty/quality-assurance" },
  { label: "Faculty Library", href: "/faculty/library" },
  { label: "Prizes & Awards", href: "/faculty/prizes" },
];

const academicLinks = [
  { label: "Departments", href: "/departments" },
  { label: "Undergraduate Programs", href: "/undergraduates" },
  { label: "STEP Programs", href: "/academics" },
  { label: "Postgraduate", href: "/postgraduate" },
  { label: "Industrial Training", href: "/undergraduates/training" },
  { label: "Research Centers & Labs", href: "/research" },
  { label: "E-Learning", href: "https://elearn.eng.cu.edu.eg", external: true },
];

const quickLinks = [
  { label: "News & Events", href: "/news" },
  { label: "Staff Portal", href: "/staff" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/contact#faq" },
  { label: "External Links", href: "/links" },
  { label: "Credits", href: "/credits" },
];

export function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                <span className="text-white font-heading font-bold text-caption">CUFE</span>
              </div>
              <div>
                <div className="font-heading font-bold text-body leading-tight">
                  Faculty of Engineering
                </div>
                <div className="text-caption text-footer-accent leading-tight">
                  Cairo University
                </div>
              </div>
            </div>
            <p className="text-body-sm text-footer-accent mb-6">
              Egypt&apos;s premier engineering institution, shaping the nation&apos;s engineers since 1816.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-body-sm text-footer-accent">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {CONTACT.address}
              </li>
              <li className="flex items-center gap-2.5 text-body-sm text-footer-accent">
                <Mail className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: SOCIAL.facebook },
                { icon: Youtube, href: SOCIAL.youtube },
                { icon: Linkedin, href: SOCIAL.linkedin },
                { icon: Twitter, href: SOCIAL.twitter },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-footer-accent hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Faculty */}
          <div>
            <h3 className="font-heading font-semibold text-body mb-4">Faculty</h3>
            <ul className="space-y-2.5">
              {facultyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-footer-accent hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Academics */}
          <div>
            <h3 className="font-heading font-semibold text-body mb-4">Academics</h3>
            <ul className="space-y-2.5">
              {academicLinks.map((link) => (
                <li key={link.label}>
                  {"external" in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-sm text-footer-accent hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-body-sm text-footer-accent hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-body mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-footer-accent hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption text-white/40">
            &copy; Information Systems &amp; Technology Department — Faculty of Engineering, Cairo University
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-caption text-white/40 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
