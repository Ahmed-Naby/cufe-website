import { User } from "lucide-react";

interface FacultyMember {
  name: string;
  title: string;
  specialization: string;
}

interface FacultyHighlightsProps {
  headOfDepartment: string;
  departmentName: string;
}

export function FacultyHighlights({ headOfDepartment, departmentName }: FacultyHighlightsProps) {
  const mockFaculty: FacultyMember[] = [
    { name: headOfDepartment, title: "Head of Department", specialization: "Department Leadership" },
    { name: "Dr. Faculty Member", title: "Associate Professor", specialization: "Research & Teaching" },
    { name: "Dr. Faculty Member", title: "Assistant Professor", specialization: "Research & Teaching" },
    { name: "Dr. Faculty Member", title: "Lecturer", specialization: "Teaching & Mentorship" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockFaculty.map((member, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center p-5 bg-surface-alt rounded-[var(--radius-card)] border border-border-light"
        >
          <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mb-3">
            <User className="h-7 w-7 text-navy-300" />
          </div>
          <h4 className="font-heading font-semibold text-body-sm text-navy-700">
            {member.name}
          </h4>
          <p className="text-caption text-text-muted mt-0.5">{member.title}</p>
          <p className="text-caption text-gold-500 mt-1">{member.specialization}</p>
        </div>
      ))}
    </div>
  );
}
