"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { departmentContacts } from "@/data/contact";

export function DepartmentDirectory() {
  const items = departmentContacts.map((dept) => ({
    id: dept.departmentName,
    title: dept.departmentName,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
          <a
            href={`mailto:${dept.email}`}
            className="text-gold-500 hover:text-gold-600 transition-colors"
          >
            {dept.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-gold-500 flex-shrink-0" />
          <span>{dept.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gold-500 flex-shrink-0" />
          <span>{dept.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gold-500 flex-shrink-0" />
          <span>{dept.officeHours}</span>
        </div>
      </div>
    ),
  }));

  return <Accordion items={items} />;
}
