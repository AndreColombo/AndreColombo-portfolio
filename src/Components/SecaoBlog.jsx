import { useState } from "react";
import ArticlePopup from "./PopUps/ArticlePopup";
import artigos from "../Data/articles.json";

export default function SecaoBlog() {
  const [showArticle, setShowArticle] = useState(null);

  return (
    <>
      <section className="bg-quaternary px-6 py-8 xl:px-[12.5vw] xl:py-[4vh]">
        <h1 className="mb-6 flex items-center text-xl font-bold text-white xl:mb-8 xl:text-3xl">
          <img
            className="mr-3 flex size-8 rounded bg-white px-1.5 py-1.5 xl:size-12 xl:px-2 xl:py-2"
            src="/devJournal.svg"
            alt=""
          />
          Diário Dev
        </h1>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {artigos.map((artigo) => (
            <article
              key={artigo.id}
              className="group relative"
              onClick={() =>
                setShowArticle({
                  id: artigo.id,
                })
              }
            >
              <img
                src="/blog.png"
                alt="Article background"
                className="rounded-lg"
              />
              <h1 className="absolute bottom-0 left-0 line-clamp-1 w-full px-2.5 py-1.5 text-base font-semibold text-white group-hover:line-clamp-none xl:text-lg">
                {artigo.titulo}
              </h1>
              <p className="absolute top-0 right-0 pt-2 pr-2 text-xs text-white xl:text-sm">
                {artigo.date}
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
