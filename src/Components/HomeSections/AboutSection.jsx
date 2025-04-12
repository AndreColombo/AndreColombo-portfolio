export default function AboutSection() {
  return (
    <>
      <section
        className="bg-quaternary px-60 py-10 portrait:px-6 portrait:py-5"
        id="about"
      >
        <h1 className="mb-10 text-3xl font-bold text-white portrait:mb-6 portrait:text-xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            01
          </span>
          About me
        </h1>
        <div className="flex items-center gap-15 portrait:flex-col-reverse portrait:gap-6">
          <img
            className="w-2/6 portrait:w-full"
            src="/AndreColombo.jpg"
            alt="A picture of myself"
            title="André Rosa Colombo"
          />
          <div className="text-secondary flex flex-col gap-6 text-lg leading-[1.3] portrait:gap-3 portrait:text-sm">
            <p>
              My interest in technology truly started during the pandemic, when
              I had more contact with online tools and began exploring things
              like <highlight>Discord bots using JavaScript</highlight>, even
              without fully understanding them. In 2022, I joined{" "}
              <highlight>FIAP School</highlight>, a technical high school in IT,
              where I really started learning. I worked with languages and tools
              like{" "}
              <highlight>
                {" "}
                HTML, CSS, JS, SQL Server, MongoDB, Node.js, React, Firebase,
                and C#
              </highlight>
              , among others.
            </p>
            <p>
              Over the three years, I started to stand out more in{" "}
              <highlight>front-end</highlight>, both in code and design. I used{" "}
              <highlight>Figma</highlight> a lot to create prototypes, learning
              by myself how to use it. I found out that I enjoy building clean,
              minimalistic, and functional interfaces, but I know I still have a
              lot to learn about <highlight>UX and UI</highlight>.
            </p>
            <p>
              In my third year, I developed <highlight>AndreFlix</highlight> and{" "}
              <highlight>Andrefy</highlight>, projects that pushed me beyond
              what was asked in class. I dedicated extra time outside of school
              and got really involved. That’s when I realized this is what I
              want to do and decided to study{" "}
              <highlight>Systems Analysis and Development</highlight>, which I’m
              currently pursuing, learning <highlight>Python, Java</highlight>,
              and other technologies.
            </p>
            <p>
              My current focus is on{" "}
              <highlight>getting an internship</highlight> to start my
              professional journey, improve my study setup, and keep growing.
              I'm interested in{" "}
              <highlight>full stack and mobile development</highlight>, and I
              enjoy working both independently and in teams, as long as things
              are well organized to make collaboration effective. For me,
              technology is a way to turn ideas into real solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
