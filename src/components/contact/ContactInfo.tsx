import { Mail, Phone, MapPin, Clock, Printer } from "lucide-react";
import { Facebook, Youtube, Linkedin, Twitter } from "@/components/ui/BrandIcons";
import { mainContact } from "@/data/contact";
import { SOCIAL } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-body-sm text-text-primary">Address</h4>
          <p className="text-body-sm text-text-secondary">{mainContact.address}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Phone className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-body-sm text-text-primary">Phone</h4>
          <p className="text-body-sm text-text-secondary">{mainContact.phone}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Printer className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-body-sm text-text-primary">Fax</h4>
          <p className="text-body-sm text-text-secondary">{mainContact.fax}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Mail className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-body-sm text-text-primary">Email</h4>
          <a
            href={`mailto:${mainContact.email}`}
            className="text-body-sm text-gold-500 hover:text-gold-600 transition-colors"
          >
            {mainContact.email}
          </a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Clock className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-body-sm text-text-primary">Office Hours</h4>
          <p className="text-body-sm text-text-secondary">{mainContact.officeHours}</p>
        </div>
      </div>

      {/* Social */}
      <div className="pt-4 border-t border-border">
        <h4 className="font-medium text-body-sm text-text-primary mb-3">Follow Us</h4>
        <div className="flex gap-2">
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
              className="p-2.5 rounded-lg bg-surface-alt text-text-muted hover:bg-gold-50 hover:text-gold-500 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
