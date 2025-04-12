import { useState } from "react";
import ArticlePopup from "./PopUps/ArticlePopup";
import articles from "../data/articles.json";

export default function BlogSection() {
  const [showArticle, setShowArticle] = useState(null);

  return (
    <>
      <section className="bg-quaternary px-60 py-10 portrait:px-6 portrait:py-8">
        <h1 className="mb-8 flex items-center text-3xl font-bold text-white portrait:mb-6 portrait:text-xl">
          <img
            className="mr-3 flex size-12 rounded bg-white px-2 py-2 portrait:size-8 portrait:px-1.5 portrait:py-1.5"
            src="/devJournal.svg"
            alt=""
          />
          Dev Journal
        </h1>
        <div className="grid gap-5 portrait:grid-cols-2 landscape:grid-cols-5">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group relative"
              onClick={() =>
                setShowArticle({
                  id: article.id,
                })
              }
            >
              <img
                src="/blog.png"
                alt="Article background"
                className="rounded-lg"
              />
              <h1 className="absolute bottom-0 left-0 line-clamp-1 w-full px-2.5 py-1.5 text-lg font-semibold text-white group-hover:line-clamp-none portrait:text-base">
                {article.title}
              </h1>
              <p className="absolute top-0 right-0 pt-2 pr-2 text-sm text-white portrait:text-xs">
                {article.date}
              </p>
            </article>
          ))}
        </div>
        {showArticle && (
          <ArticlePopup
            id={showArticle.id}
            onClose={() => setShowArticle(null)}
          />
        )}
      </section>
    </>
  );
}
