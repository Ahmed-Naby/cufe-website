import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsArticles } from "@/data/news";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function NewsSection() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          title="Latest News"
          subtitle="Stay updated with faculty news and achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.1}>
              <article className="group bg-white rounded-[var(--radius-card)] border border-border-light shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-navy-50 relative overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
                      <span className="text-navy-300 font-heading font-bold text-h2">
                        CUFE
                      </span>
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
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-body-sm text-text-secondary line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-body font-medium text-gold-500 hover:text-gold-600 transition-colors group"
          >
            View All News
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
