import Projects from "../../Data/projects.json";

export default function ProjectsSection() {
  return (
    <>
      <section
        className="bg-tertiary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[4vh]"
        id="projects"
      >
        <h1 className="mb-6 text-xl font-bold text-white xl:mb-10 xl:text-3xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            02
          </span>
          Projects
        </h1>
        <div className="text-quaternary grid grid-cols-1 gap-5 text-base md:grid-cols-2 xl:grid-cols-3 xl:text-lg">
          {Projects.map((project) => (
            <div className="flex flex-col" key={project.name}>
              <img
                src={project.print}
                alt="Andrefy print"
                className="rounded-t-lg"
              />
              <div className="bg-secondary flex flex-col gap-1 rounded-b-lg px-5 py-3">
                <h4 className="font-bold">{project.name}</h4>
                <p>{project.description}</p>
                <p className="text-sm xl:text-base">
                  <em className="font-semibold">Built with:</em> {project.techs}
                  .
                </p>
                <div className="text-primary mt-1 flex justify-between">
                  <a
                    href={project.vercel || project.pages}
                    target="_blank"
                    className="flex items-center gap-2"
                    title="GitHub Pages"
                  >
                    <img
                      src={
                        project.vercel
                          ? "/Projects/vercel.svg"
                          : "/Projects/pages.svg"
                      }
                      alt="GitHub Pages icon"
                      className="size-5"
                    />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2"
                    title="GitHub"
                  >
                    <img
                      src="/Projects/repository.svg"
                      alt="GitHub icon"
                      className="size-5"
                    />
                    View Code
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
