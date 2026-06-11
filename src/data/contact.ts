import type { ContactInfo } from "@/types";
import { departments } from "./departments";

export const mainContact = {
  address: "Faculty of Engineering, Cairo University, Giza, Egypt",
  email: "info@eng.cu.edu.eg",
  phone: "+20 2 3567 8900",
  fax: "+20 2 3567 8930",
  officeHours: "Sunday – Thursday: 9:00 AM – 3:00 PM",
  mapCoords: { lat: 30.0131, lng: 31.2089 },
};

export const departmentContacts: ContactInfo[] = departments.map((dept) => ({
  departmentName: dept.name,
  email: dept.contactEmail,
  phone: dept.contactPhone,
  location: dept.location,
  officeHours: "Sunday – Thursday: 9:00 AM – 3:00 PM",
}));
