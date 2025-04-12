import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import fiap from "../../Data/certifications.json";

export default function FiapPopup({ onClose }) {
  const { pathname } = useLocation();
  const isPortuguese = pathname.startsWith("/pt");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const fiapCourses = fiap.filter(
    (course) => course.platform === "FIAP" && course.type === "Nano",
  );

  return (
    <>
      <main className="fixed inset-0 z-4 flex items-center justify-center bg-black/50 backdrop-blur-xs">
        <div className="bg-tertiary text-quaternary flex h-5/6 w-5/6 flex-col overflow-y-auto rounded-2xl px-8 pb-8">
          <header className="bg-tertiary sticky top-0 w-full pt-8">
            <div className="flex w-full items-center justify-between">
              <h1 className="flex items-center gap-3 text-2xl font-bold xl:text-4xl">
                <img
                  className="size-9 rounded bg-[#f04976] p-1.5 xl:size-11"
                  src="/Certifications/fiap.svg"
                  alt="FIAP icon"
                />
                {isPortuguese ? "Certificações FIAP" : "FIAP Certifications"}
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
              Nano Courses
            </h1>
            <div className="text-primary grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {fiapCourses.map((course) => (
                <a
                  href={isPortuguese ? course.linkPT : course.linkEN}
                  target="_blank"
                >
                  <img
                    className="rounded-t-lg"
                    src={isPortuguese ? course.certificado : course.certificate}
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
                      alt="Nano Course icon"
                    />
                    <h1 className="line-clamp-2 h-12">
                      {isPortuguese ? course.nome : course.name}
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
