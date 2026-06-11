import { mainContact } from "@/data/contact";

export function MapEmbed() {
  const { lat, lng } = mainContact.mapCoords;

  return (
    <div className="rounded-[var(--radius-card)] overflow-hidden border border-border-light shadow-card h-full min-h-[400px]">
      <iframe
        title="Faculty of Engineering, Cairo University - Location"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sFaculty%20of%20Engineering%2C%20Cairo%20University!5e0!3m2!1sen!2seg!4v1`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 400 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
