import Typewriter from "../Typewriter";

export default function HomeSection() {
  return (
    <>
      <section
        className="bg-tertiary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[8vh]"
        id="home"
      >
        <h1 className="text-3xl font-bold xl:text-7xl">Full-Stack Developer</h1>
        <h1 className="text-quaternary mt-2.5 min-h-[72px] text-3xl font-bold xl:text-7xl">
          <Typewriter />
        </h1>
        <p className="my-5 w-full pl-0 text-sm xl:my-9 xl:w-1/3 xl:pl-5 xl:text-lg">
          Dedicated to building complete and intuitive projects, always striving
          to learn and go beyond expectations.
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
            href="/curriculum.pdf"
            download="AndreColombo_Curriculum"
          >
            <img
              className="size-4.5 xl:size-6"
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
