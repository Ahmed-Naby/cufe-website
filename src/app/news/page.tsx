"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { NewsCard } from "@/components/news/NewsCard";
import { EventCard } from "@/components/news/EventCard";
import { CategoryTabs } from "@/components/news/CategoryTabs";
import { Pagination } from "@/components/news/Pagination";
import { SearchBar } from "@/components/ui/SearchBar";
import { newsArticles } from "@/data/news";
import { events } from "@/data/events";

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    let results = newsArticles;
    if (activeCategory !== "All" && activeCategory !== "Events") {
      results = results.filter((a) => a.category === activeCategory);
    }
    if (activeCategory === "Events") {
      return [];
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeCategory, searchQuery]);

  const filteredEvents = useMemo(() => {
    if (activeCategory !== "All" && activeCategory !== "Events") return [];
    let results = events;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeCategory, searchQuery]);

  const allItems = [
    ...filteredNews.map((n) => ({ type: "news" as const, data: n, date: n.date })),
    ...filteredEvents.map((e) => ({ type: "event" as const, data: e, date: e.date })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
  const paginatedItems = allItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay updated with faculty news, research, and campus activities"
        breadcrumbs={[{ label: "News & Events", href: "/news" }]}
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            <SearchBar
              placeholder="Search news..."
              value={searchQuery}
              onChange={(v) => { setSearchQuery(v); setCurrentPage(1); }}
              className="w-full sm:w-64"
            />
          </div>

          <AnimatePresence mode="popLayout">
            {paginatedItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedItems.map((item) => (
                  <motion.div
                    key={`${item.type}-${item.data.slug}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.type === "news" ? (
                      <NewsCard article={item.data} />
                    ) : (
                      <EventCard event={item.data} />
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-text-muted">
                No results found. Try a different search or category.
              </div>
            )}
          </AnimatePresence>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
}
