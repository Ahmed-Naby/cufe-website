import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="font-heading text-[8rem] font-bold text-navy-100 leading-none select-none">
          404
        </div>
        <h1 className="mt-2 font-heading text-h1 font-bold text-navy-700">
          Page Not Found
        </h1>
        <p className="mt-3 text-h4 text-text-secondary max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" leftIcon={<Home className="h-4 w-4" />}>
            Back to Home
          </Button>
          <Button
            href="/departments"
            variant="outline"
            leftIcon={<Search className="h-4 w-4" />}
          >
            Browse Departments
          </Button>
        </div>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-body-sm text-text-muted hover:text-gold-500 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Contact us if you need help
          </Link>
        </div>
      </div>
    </section>
  );
}
