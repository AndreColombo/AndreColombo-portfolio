import { useState } from "react";
import AluraPopup from "../PopUps/AluraPopup";
import ConquerPopup from "../PopUps/ConquerPopup";
import FiapPopup from "../PopUps/FiapPopup";
import Skills from "../../data/skills.json";

export default function SkillsSection() {
  const [showAlura, setShowAlura] = useState(false);
  const [showConquer, setShowConquer] = useState(false);
  const [showFiap, setShowFiap] = useState(false);

  return (
    <>
      <section
        className="bg-quaternary px-60 py-10 portrait:px-6 portrait:py-5"
        id="skills"
      >
        <h1 className="mb-10 text-3xl font-bold text-white portrait:mb-6 portrait:text-xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            03
          </span>
          Education & Skills
        </h1>
        <div className="text-quaternary flex flex-col gap-5">
          <div className="bg-secondary rounded-lg p-6">
            <div className="flex gap-10 font-bold portrait:gap-7">
              <h1 className="flex items-center gap-1.5 font-[Gill_Sans_MT] text-lg portrait:gap-1 portrait:text-base">
                <img
                  className="size-5 portrait:size-4"
                  src="/Skills/calendar.svg"
                  alt="Calendar icon"
                />
                2021 - 2024
              </h1>
              <h1>—</h1>
              <h1 className="flex items-center gap-1.5 font-[Gill_Sans_MT] text-lg portrait:gap-1 portrait:text-base">
                <img
                  className="size-5 portrait:size-4"
                  src="/Skills/location.svg"
                  alt="Pinned location icon"
                />
                FIAP School
              </h1>
            </div>
            <p className="my-3 text-lg portrait:text-base">
              Technical Course in Full Stack Development
            </p>
            <ul className="flex gap-3 overflow-x-auto">
              {/* first year */}
              {Skills.filter((skill) => skill.ano === "1EMIA").map((skill) => (
                <li
                  key={skill.title}
                  className="flex aspect-square size-16 justify-center rounded-md portrait:size-10"
                  style={{ backgroundColor: skill.color }}
                  title={skill.title}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                      src={skill.icon}
                      alt={skill.alt}
                    />
                  </span>
                </li>
              ))}
              <hr className="border-primary my-2 h-auto border-1" />
              {/* second year */}
              {Skills.filter((skill) => skill.ano === "2EMIA").map((skill) => (
                <li
                  key={skill.title}
                  className="flex aspect-square size-16 justify-center rounded-md portrait:size-10"
                  style={{ backgroundColor: skill.color }}
                  title={skill.title}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                      src={skill.icon}
                      alt={skill.alt}
                    />
                  </span>
                </li>
              ))}
              <hr className="border-primary my-2 h-auto border-1" />
              {/* third year */}
              {Skills.filter((skill) => skill.ano === "3EMIA").map((skill) => (
                <li
                  key={skill.title}
                  className="flex aspect-square size-16 justify-center rounded-md portrait:size-10"
                  style={{ backgroundColor: skill.color }}
                  title={skill.title}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                      src={skill.icon}
                      alt={skill.alt}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-5 portrait:flex-col">
            <div className="bg-secondary rounded-lg p-6 portrait:w-full landscape:w-1/2">
              <div className="flex gap-10 font-bold portrait:gap-7">
                <h1 className="flex items-center gap-1.5 font-[Gill_Sans_MT] text-lg portrait:gap-1 portrait:text-base">
                  <img
                    className="size-5 portrait:size-4"
                    src="/Skills/calendar.svg"
                    alt="Calendar icon"
                  />
                  2025 - 2026
                </h1>
                <h1>—</h1>
                <h1 className="flex items-center gap-1.5 font-[Gill_Sans_MT] text-lg portrait:gap-1 portrait:text-base">
                  <img
                    className="size-5 portrait:size-4"
                    src="/Skills/location.svg"
                    alt="Pinned location icon"
                  />
                  FIAP
                </h1>
              </div>
              <p className="my-3 text-lg portrait:text-base">
                Associate Degree in Systems Analysis and Development
              </p>
              <ul className="flex gap-3 overflow-x-auto">
                {/* first year */}
                {Skills.filter((skill) => skill.ano === "1TDSA").map(
                  (skill) => (
                    <li
                      key={skill.title}
                      className="flex aspect-square size-16 justify-center rounded-md portrait:size-10"
                      style={{ backgroundColor: skill.color }}
                      title={skill.title}
                    >
                      <span className="flex items-center justify-center">
                        <img
                          className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                          src={skill.icon}
                          alt={skill.alt}
                        />
                      </span>
                    </li>
                  ),
                )}
                <hr className="border-primary my-2 h-auto border-1" />
                {/* second year */}
                {Skills.filter((skill) => skill.ano === "2TDSA").map(
                  (skill) => (
                    <li
                      key={skill.title}
                      className="flex aspect-square size-16 justify-center rounded-md portrait:size-10"
                      style={{ backgroundColor: skill.color }}
                      title={skill.title}
                    >
                      <span className="flex items-center justify-center">
                        <img
                          className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                          src={skill.icon}
                          alt={skill.alt}
                        />
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-6 portrait:w-full landscape:w-1/2">
              <div className="flex gap-10 font-bold portrait:gap-7">
                <h1 className="flex items-center gap-1.5 font-[Gill_Sans_MT] text-lg portrait:gap-1 portrait:text-base">
                  <img
                    className="size-5 portrait:size-4"
                    src="/Skills/calendar.svg"
                    alt="Calendar icon"
                  />
                  2024 - Present
                </h1>
                <h1>—</h1>
                <h1 className="flex items-center gap-1.5 font-[Gill_Sans_MT] text-lg portrait:gap-1 portrait:text-base">
                  <img
                    className="size-5 portrait:size-4"
                    src="/Skills/lightbulb.svg"
                    alt="Light Bulb icon"
                  />
                  Continuous Learning
                </h1>
              </div>
              <p className="my-3 text-lg portrait:text-base">
                Online Certifications
              </p>
              <ul className="flex gap-3 overflow-x-auto">
                <li
                  className="flex aspect-square size-16 cursor-pointer justify-center rounded-md bg-[#1c3f70] portrait:size-10"
                  title="Alura"
                  onClick={() => setShowAlura(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                      src="/Certifications/alura.svg"
                      alt="Alura logo"
                    />
                  </span>
                </li>
                <li
                  className="flex aspect-square size-16 cursor-pointer justify-center rounded-md bg-[#fff133] portrait:size-10"
                  title="Conquer"
                  onClick={() => setShowConquer(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-10 transition-all duration-300 hover:size-12 portrait:size-7 portrait:hover:size-9"
                      src="/Certifications/conquer.svg"
                      alt="Conquer logo"
                    />
                  </span>
                </li>
                <li
                  className="flex aspect-square size-16 cursor-pointer justify-center rounded-md bg-[#f04976] portrait:size-10"
                  title="FIAP"
                  onClick={() => setShowFiap(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-9 transition-all duration-300 hover:size-11 portrait:size-7 portrait:hover:size-9"
                      src="/Certifications/fiap.svg"
                      alt="FIAP logo"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {showAlura && <AluraPopup onClose={() => setShowAlura(false)} />}
        {showConquer && <ConquerPopup onClose={() => setShowConquer(false)} />}
        {showFiap && <FiapPopup onClose={() => setShowFiap(false)} />}
      </section>
    </>
  );
}
