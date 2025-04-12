import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import mimo from "../../Data/certifications.json";

export default function MimoPopup({ onClose }) {
  const { pathname } = useLocation();
  const isPortuguese = pathname.startsWith("/pt");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const mimoCourses = mimo.filter(
    (course) => course.platform === "Mimo" && course.type === "Course",
  );

  const mimoCareers = mimo.filter(
    (career) => career.platform === "Mimo" && career.type === "Career",
  );

  return (
    <>
      <main className="fixed inset-0 z-4 flex items-center justify-center bg-black/50 backdrop-blur-xs">
        <div className="bg-tertiary text-quaternary flex h-5/6 w-5/6 flex-col overflow-y-auto rounded-2xl px-8 pb-8">
          <header className="bg-tertiary sticky top-0 w-full pt-8">
            <div className="flex w-full items-center justify-between">
              <h1 className="flex items-center gap-3 text-2xl font-bold xl:text-4xl">
                <img
                  className="size-9 rounded bg-[#1c3f70] p-1.5 xl:size-11"
                  src="/Certifications/mimo.svg"
                  alt="Mimo icon"
                />
                {isPortuguese ? "Certificações Mimo" : "Mimo Certifications"}
              </h1>
              <img
                className="size-4 cursor-pointer xl:size-7"
                src="/close.svg"
                alt="X icon"
                onClick={onClose}
              />
            </div>
            <hr className="border-primary mt-4 w-full border-1" />
          </header>
          <section>
            <h1 className="mt-5 mb-3 text-xl font-semibold xl:text-3xl">
              {isPortuguese ? "Cursos" : "Courses"}
            </h1>
            <div className="text-primary grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {mimoCourses.map((course) => (
                <a href={course.linkEN} target="_blank">
                  <img
                    className="rounded-t-lg"
                    src={course.certificate}
                    alt={
                      isPortuguese
                        ? "Imagem Certificado"
                        : "Certification image"
                    }
                  />
                  <div className="bg-secondary flex gap-3 rounded-b-lg px-3 py-2">
                    <img
                      className="size-5 xl:size-7"
                      src={course.icon}
                      alt="Course icon"
                    />
                    <h1 className="line-clamp-2 h-12">{course.name}</h1>
                  </div>
                </a>
              ))}
            </div>
          </section>
          <section>
            <h1 className="mt-5 mb-3 text-xl font-semibold xl:text-3xl">
              {isPortuguese ? "Planos de Carreira" : "Career Paths"}
            </h1>
            <div className="text-primary grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {mimoCareers.map((career) => (
                <a href={career.linkEN} target="_blank">
                  <img
                    className="rounded-t-lg"
                    src={career.certificate}
                    alt={
                      isPortuguese
                        ? "Imagem Certificado"
                        : "Certification image"
                    }
                  />
                  <div className="bg-secondary flex gap-3 rounded-b-lg px-3 py-2">
                    <img
                      className="size-5 xl:size-7"
                      src={career.icon}
                      alt="Career Path icon"
                    />
                    <h1 className="line-clamp-2 h-12">
                      {isPortuguese ? career.nome : career.name}
                    </h1>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
