import Escritor from "../Escritor";

export default function SecaoInicio() {
  return (
    <>
      <section
        className="bg-tertiary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[8vh]"
        id="inicio"
      >
        <h1 className="text-3xl font-bold xl:text-7xl">Desenvolvedor Full-Stack</h1>
        <h1 className="text-quaternary mt-2.5 min-h-[72px] text-3xl font-bold xl:text-7xl">
          <Escritor />
        </h1>
        <p className="my-5 w-full pl-0 text-sm xl:my-9 xl:w-1/3 xl:pl-5 xl:text-lg">
          Dedicado a criar projetos completos e intuitivos, sempre buscando
          aprender e ir além das expectativas.
        </p>
        <div className="flex justify-center gap-3 pl-0 md:justify-normal xl:justify-normal xl:gap-5 xl:pl-5">
          <a
            className="bg-primary text-secondary flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm xl:gap-3 xl:px-4 xl:py-2 xl:text-lg"
            href="https://github.com/AndreColombo"
            target="_blank"
          >
            <img
              className="size-4.5 xl:size-6"
              src="/Home/github.svg"
              alt="GitHub icon"
            />
            GitHub
          </a>
          <a
            className="bg-primary text-secondary flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm xl:gap-3 xl:px-4 xl:py-2 xl:text-lg"
            href="https://www.linkedin.com/in/andrerosacolombo/"
            target="_blank"
          >
            <img
              className="size-4.5 xl:size-6"
              src="/Home/linkedin.svg"
              alt="LinkedIn icon"
            />
            LinkedIn
          </a>
          <a
            className="bg-primary text-secondary flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-base xl:gap-3 xl:px-4 xl:py-2 xl:text-lg"
            href="/curriculo.pdf"
            download="AndreColombo_Curriculo"
          >
            <img
              className="size-4.5 xl:size-6"
              src="/Home/curriculum.svg"
              alt="File icon"
            />
            Currículo
          </a>
        </div>
      </section>
    </>
  );
}
