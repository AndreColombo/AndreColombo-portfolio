import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import articles from "../../Data/articles.json";

export default function ArticlePopup({ id, onClose }) {
  const { pathname } = useLocation();
  const isPortuguese = pathname.startsWith("/pt");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const article = articles.find((art) => art.id === id);

  return (
    <>
      <main className="fixed inset-0 z-4 flex items-center justify-center bg-black/50 backdrop-blur-xs">
        <article className="bg-tertiary text-quaternary fixed flex h-5/6 w-5/6 flex-col overflow-y-auto rounded-2xl px-8">
          <header className="bg-tertiary sticky top-0 w-full pt-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold xl:text-2xl">
                  {isPortuguese ? article.titulo : article.title}
                </h1>
                <hr className="border-primary h-8 border-1" />
                <div className="flex gap-3">
                  {article.tags.map((tag) => (
                    <span className="bg-primary/85 rounded px-3 py-1 text-xs text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <img
                className="size-4 cursor-pointer xl:size-7"
                src="/close.svg"
                alt="X icon"
                onClick={onClose}
              />
            </div>
            <hr className="border-primary mt-4 w-full border-1" />
          </header>
          <div className="my-8 px-20 text-lg whitespace-pre-line">
            {isPortuguese
              ? article.content.map((cont) => <div>{cont}</div>)
              : article.conteudo.map((cont) => <div>{cont}</div>)}
          </div>
        </article>
      </main>
    </>
  );
}
