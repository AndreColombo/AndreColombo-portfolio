export default function SecaoSobre() {
  return (
    <>
      <section
        className="bg-quaternary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[4vh]"
        id="sobre"
      >
        <h1 className="mb-6 text-xl font-bold text-white xl:mb-10 xl:text-3xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            01
          </span>
          Sobre mim
        </h1>
        <div className="flex flex-col-reverse items-center gap-6 xl:flex-row xl:gap-15">
          <img
            className="w-full xl:w-2/6"
            src="/AndreColombo.jpg"
            alt="Uma foto minha"
            title="André Rosa Colombo"
          />
          <div className="text-secondary flex flex-col gap-3 text-sm leading-[1.3] xl:gap-6 xl:text-lg">
            <p>
              Meu interesse por tecnologia começou de verdade durante a
              pandemia, quando tive mais contato com ferramentas online e
              comecei a explorar coisas como{" "}
              <highlight>bots para Discord usando JavaScript</highlight>, mesmo
              sem entender completamente. Em 2022, entrei na{" "}
              <highlight>FIAP School</highlight>, no ensino médio técnico em TI,
              onde realmente comecei a aprender. Trabalhei com linguagens e
              ferramentas como{" "}
              <highlight>
                HTML, CSS, JS, SQL Server, MongoDB, Node.js, React, Firebase e
                C#
              </highlight>
              , entre outras.
            </p>
            <p>
              Ao longo dos três anos, passei a me destacar mais em{" "}
              <highlight>front-end</highlight>, tanto no código quanto no
              design. Usei bastante o <highlight>Figma</highlight> para criar
              protótipos, aprendendo por conta própria como usar a ferramenta.
              Descobri que gosto de criar interfaces limpas, minimalistas e
              funcionais, mas sei que ainda tenho muito a aprender sobre{" "}
              <highlight>UX e UI</highlight>.
            </p>
            <p>
              No terceiro ano, desenvolvi o <highlight>AndreFlix</highlight> e o{" "}
              <highlight>Andrefy</highlight>, projetos que me desafiaram além do
              que foi pedido em aula. Me dediquei fora do horário da escola e me
              envolvi de verdade. Foi aí que percebi que era isso que queria
              fazer, e decidi cursar{" "}
              <highlight>Análise e Desenvolvimento de Sistemas</highlight>, o
              que estou fazendo atualmente, aprendendo{" "}
              <highlight>Python, Java</highlight> e outras tecnologias.
            </p>
            <p>
              Meu foco atual é <highlight>conseguir um estágio</highlight> para
              iniciar minha trajetória profissional, melhorar meu ambiente de
              estudos e continuar evoluindo. Me interesso por{" "}
              <highlight>desenvolvimento full stack e mobile</highlight>, e
              gosto de trabalhar tanto sozinho quanto em equipe, desde que tudo
              esteja bem organizado para a colaboração funcionar bem. Para mim,
              a tecnologia é uma forma de transformar ideias em soluções reais.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
