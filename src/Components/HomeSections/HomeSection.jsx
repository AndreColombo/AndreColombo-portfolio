import Typewriter from "../Typewriter";

export default function HomeSection() {
  return (
    <>
      <section
        className="bg-tertiary px-60 py-20 portrait:px-6 portrait:py-5"
        id="home"
      >
        <h1 className="text-7xl font-bold portrait:text-3xl">
          Full-Stack Developer
        </h1>
        <h1 className="text-quaternary mt-2.5 min-h-[72px] text-7xl font-bold portrait:text-3xl">
          <Typewriter />
        </h1>
        <p className="my-9 w-1/3 pl-5 portrait:my-5 portrait:w-full portrait:pl-0 portrait:text-sm">
          Dedicated to building complete and intuitive projects, always striving
          to learn and go beyond expectations.
        </p>
        <div className="flex gap-5 pl-5 portrait:justify-center portrait:gap-3 portrait:pl-0">
          <a
            className="bg-primary text-secondary flex items-center justify-center gap-3 rounded-md px-4 py-2 text-lg portrait:gap-1.5 portrait:px-3 portrait:py-1.5 portrait:text-sm"
            href="https://github.com/AndreColombo"
            target="_blank"
          >
            <img
              className="size-6 portrait:size-4.5"
              src="/Home/github.svg"
              alt="GitHub icon"
            />
            GitHub
          </a>
          <a
            className="bg-primary text-secondary flex items-center justify-center gap-3 rounded-md px-4 py-2 text-lg portrait:gap-1.5 portrait:px-3 portrait:py-1.5 portrait:text-sm"
            href="https://www.linkedin.com/in/andrerosacolombo/"
            target="_blank"
          >
            <img
              className="size-6 portrait:size-4.5"
              src="/Home/linkedin.svg"
              alt="LinkedIn icon"
            />
            LinkedIn
          </a>
          <a
            className="bg-primary text-secondary flex items-center justify-center gap-3 rounded-md px-4 py-2 text-lg portrait:gap-1.5 portrait:px-3 portrait:py-1.5 portrait:text-base"
            href="/curriculum.pdf"
            download="AndreColombo"
          >
            <img
              className="size-6 portrait:size-4.5"
              src="/Home/curriculum.svg"
              alt="File icon"
            />
            Curriculum
          </a>
        </div>
      </section>
    </>
  );
}
