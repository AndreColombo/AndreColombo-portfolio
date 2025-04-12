import { useEffect } from "react";
import conquer from "../../data/certifications.json";

export default function ConquerPopup({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const conquerCourses = conquer.filter(
    (course) => course.platform === "Conquer" && course.type === "Course",
  );

  return (
    <>
      <main className="fixed inset-0 z-4 flex items-center justify-center bg-black/50 backdrop-blur-xs">
        <div className="bg-tertiary text-quaternary flex h-5/6 w-5/6 flex-col items-center overflow-y-auto rounded-2xl px-8 pb-8">
          <header className="bg-tertiary sticky top-0 w-full pt-8">
            <div className="flex w-full items-center justify-between">
              <h1 className="flex items-center gap-3 text-4xl font-bold portrait:text-2xl">
                <img
                  className="size-11 rounded bg-[#fff133] p-1.5 portrait:size-9"
                  src="/Certifications/conquer.svg"
                  alt="Conquer icon"
                />
                Conquer Certifications
              </h1>
              <img
                className="size-7 cursor-pointer portrait:size-4"
                src="/close.svg"
                alt="X icon"
                onClick={onClose}
              />
            </div>
            <hr className="border-primary mt-4 w-full border-1" />
          </header>
          <section>
            <h1 className="mt-5 mb-3 text-3xl font-semibold portrait:text-xl">
              Courses
            </h1>
            <div className="text-primary grid grid-cols-4 gap-5 portrait:grid-cols-1">
              {conquerCourses.map((course) => (
                <a href={course.link} target="_blank">
                  <img
                    className="rounded-t-lg"
                    src={course.certificate}
                    alt="Certification image"
                  />
                  <div className="bg-secondary flex gap-3 rounded-b-lg px-3 py-2">
                    <img
                      className="size-7 portrait:size-5"
                      src={course.icon}
                      alt="Immersion icon"
                    />
                    <h1 className="line-clamp-2 h-12">{course.name}</h1>
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
