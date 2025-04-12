import Projects from "../../data/projects.json";

export default function ProjectsSection() {
  return (
    <>
      <section
        className="bg-tertiary px-60 py-10 portrait:px-6 portrait:py-5"
        id="projects"
      >
        <h1 className="mb-10 text-3xl font-bold text-white portrait:mb-6 portrait:text-xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            02
          </span>
          Projects
        </h1>
        <div className="text-quaternary grid grid-cols-3 gap-5 text-lg portrait:grid-cols-1 portrait:text-base">
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
                <p className="text-base portrait:text-sm">
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
