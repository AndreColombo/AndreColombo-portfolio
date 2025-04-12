import { useState } from "react";
import AluraPopup from "../PopUps/AluraPopup";
import ConquerPopup from "../PopUps/ConquerPopup";
import FiapPopup from "../PopUps/FiapPopup";
import MimoPopup from "../PopUps/MimoPopup";
import Skills from "../../Data/skills.json";

export default function SecaoHabilidades() {
  const [showAlura, setShowAlura] = useState(false);
  const [showConquer, setShowConquer] = useState(false);
  const [showFiap, setShowFiap] = useState(false);
  const [showMimo, setShowMimo] = useState(false);

  return (
    <>
      <section
        className="bg-quaternary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[4vh]"
        id="habilidades"
      >
        <h1 className="mb-6 text-xl font-bold text-white xl:mb-10 xl:text-3xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            03
          </span>
          Formação e Habilidades
        </h1>
        <div className="text-quaternary flex flex-col gap-5">
          <div className="bg-secondary rounded-lg p-6">
            <div className="flex gap-7 font-bold xl:gap-10">
              <h1 className="flex items-center gap-1 font-[Gill_Sans_MT] text-base xl:gap-1.5 xl:text-lg">
                <img
                  className="size-4 xl:size-5"
                  src="/Skills/calendar.svg"
                  alt="Calendar icon"
                />
                2021 - 2024
              </h1>
              <h1>—</h1>
              <h1 className="flex items-center gap-1 font-[Gill_Sans_MT] text-base xl:gap-1.5 xl:text-lg">
                <img
                  className="size-4 xl:size-5"
                  src="/Skills/location.svg"
                  alt="Pinned location icon"
                />
                FIAP School
              </h1>
            </div>
            <p className="my-3 text-base xl:text-lg">
              Ensino Médio Técnico em Programação
            </p>
            <ul className="flex gap-3 overflow-x-auto">
              {/* first year */}
              {Skills.filter((skill) => skill.ano === "1EMIA").map((skill) => (
                <li
                  key={skill.title}
                  className="flex aspect-square size-10 justify-center rounded-md xl:size-16"
                  style={{ backgroundColor: skill.color }}
                  title={skill.title}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
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
                  className="flex aspect-square size-10 justify-center rounded-md xl:size-16"
                  style={{ backgroundColor: skill.color }}
                  title={skill.title}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
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
                  className="flex aspect-square size-10 justify-center rounded-md xl:size-16"
                  style={{ backgroundColor: skill.color }}
                  title={skill.title}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
                      src={skill.icon}
                      alt={skill.alt}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 xl:flex-row">
            <div className="bg-secondary w-full rounded-lg p-6 landscape:w-1/2">
              <div className="flex gap-7 font-bold xl:gap-10">
                <h1 className="flex items-center gap-1 font-[Gill_Sans_MT] text-base xl:gap-1.5 xl:text-lg">
                  <img
                    className="size-4 xl:size-5"
                    src="/Skills/calendar.svg"
                    alt="Calendar icon"
                  />
                  2025 - 2026
                </h1>
                <h1>—</h1>
                <h1 className="flex items-center gap-1 font-[Gill_Sans_MT] text-base xl:gap-1.5 xl:text-lg">
                  <img
                    className="size-4 xl:size-5"
                    src="/Skills/location.svg"
                    alt="Pinned location icon"
                  />
                  FIAP
                </h1>
              </div>
              <p className="my-3 text-base xl:text-lg">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </p>
              <ul className="flex gap-3 overflow-x-auto">
                {/* first year */}
                {Skills.filter((skill) => skill.ano === "1TDSA").map(
                  (skill) => (
                    <li
                      key={skill.title}
                      className="flex aspect-square size-10 justify-center rounded-md xl:size-16"
                      style={{ backgroundColor: skill.color }}
                      title={skill.title}
                    >
                      <span className="flex items-center justify-center">
                        <img
                          className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
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
                      className="flex aspect-square size-10 justify-center rounded-md xl:size-16"
                      style={{ backgroundColor: skill.color }}
                      title={skill.title}
                    >
                      <span className="flex items-center justify-center">
                        <img
                          className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
                          src={skill.icon}
                          alt={skill.alt}
                        />
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="bg-secondary w-full rounded-lg p-6 landscape:w-1/2">
              <div className="flex gap-7 font-bold xl:gap-10">
                <h1 className="flex items-center gap-1 font-[Gill_Sans_MT] text-base xl:gap-1.5 xl:text-lg">
                  <img
                    className="size-4 xl:size-5"
                    src="/Skills/calendar.svg"
                    alt="Calendar icon"
                  />
                  2024 - Present
                </h1>
                <h1>—</h1>
                <h1 className="flex items-center gap-1 font-[Gill_Sans_MT] text-base xl:gap-1.5 xl:text-lg">
                  <img
                    className="size-4 xl:size-5"
                    src="/Skills/lightbulb.svg"
                    alt="Light Bulb icon"
                  />
                  Aprendizagem Contínua
                </h1>
              </div>
              <p className="my-3 text-base xl:text-lg">Certificações Online</p>
              <ul className="flex gap-3 overflow-x-auto">
                <li
                  className="flex aspect-square size-10 cursor-pointer justify-center rounded-md bg-[#1c3f70] xl:size-16"
                  title="Alura"
                  onClick={() => setShowAlura(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
                      src="/Certifications/alura.svg"
                      alt="Alura logo"
                    />
                  </span>
                </li>
                <li
                  className="flex aspect-square size-10 cursor-pointer justify-center rounded-md bg-[#fff133] xl:size-16"
                  title="Conquer"
                  onClick={() => setShowConquer(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-10 xl:hover:size-12"
                      src="/Certifications/conquer.svg"
                      alt="Conquer logo"
                    />
                  </span>
                </li>
                <li
                  className="flex aspect-square size-10 cursor-pointer justify-center rounded-md bg-[#f04976] xl:size-16"
                  title="FIAP"
                  onClick={() => setShowFiap(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-9 xl:hover:size-11"
                      src="/Certifications/fiap.svg"
                      alt="FIAP logo"
                    />
                  </span>
                </li>
                <li
                  className="flex aspect-square size-10 cursor-pointer justify-center rounded-md bg-[#434670] xl:size-16"
                  title="Mimo"
                  onClick={() => setShowMimo(true)}
                >
                  <span className="flex items-center justify-center">
                    <img
                      className="size-7 transition-all duration-300 hover:size-9 xl:size-9 xl:hover:size-11"
                      src="/Certifications/mimo.svg"
                      alt="Mimo logo"
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
        {showMimo && <MimoPopup onClose={() => setShowMimo(false)} />}
      </section>
    </>
  );
}
