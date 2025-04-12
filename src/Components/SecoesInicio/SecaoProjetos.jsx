import Projetos from "../../Data/projects.json";

export default function SecaoProjetos() {
  return (
    <>
      <section
        className="bg-tertiary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[4vh]"
        id="projetos"
      >
        <h1 className="mb-6 text-xl font-bold text-white xl:mb-10 xl:text-3xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            02
          </span>
          Projetos
        </h1>
        <div className="text-quaternary grid grid-cols-1 gap-5 text-base md:grid-cols-2 xl:grid-cols-3 xl:text-lg">
          {Projetos.map((projeto) => (
            <div className="flex flex-col" key={projeto.name}>
              <img
                src={projeto.print}
                alt="Andrefy print"
                className="rounded-t-lg"
              />
              <div className="bg-secondary flex flex-col gap-1 rounded-b-lg px-5 py-3">
                <h4 className="font-bold">{projeto.name}</h4>
                <p>{projeto.descricao}</p>
                <p className="text-sm xl:text-base">
                  <em className="font-semibold">Built with:</em> {projeto.techs}
                  .
                </p>
                <div className="text-primary mt-1 flex justify-between">
                  <a
                    href={projeto.vercel || projeto.pages}
                    target="_blank"
                    className="flex items-center gap-2"
                    title="GitHub Pages"
                  >
                    <img
                      src={
                        projeto.vercel
                          ? "/Projects/vercel.svg"
                          : "/Projects/pages.svg"
                      }
                      alt="GitHub Pages icon"
                      className="size-5"
                    />
                    Ver Projeto
                  </a>
                  <a
                    href={projeto.github}
                    target="_blank"
                    className="flex items-center gap-2"
                    title="GitHub"
                  >
                    <img
                      src="/Projects/repository.svg"
                      alt="GitHub icon"
                      className="size-5"
                    />
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
