import Link from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group bg-white rounded-[var(--radius-card)] border border-border-light shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      <div className="aspect-[16/9] bg-navy-50 relative overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
            <span className="text-navy-200 font-heading font-bold text-h2">CUFE</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="gold">{article.category}</Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-caption text-text-muted mb-2">
          <Calendar className="h-3 w-3" />
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-body-sm text-text-secondary line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
