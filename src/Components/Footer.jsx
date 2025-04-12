import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const isPortuguese = pathname.startsWith("/pt");

  return (
    <>
      <footer className="bg-secondary flex justify-center py-[6.25vw] xl:py-[4.9vh]">
        <p className="text-center text-xs xl:text-base">
          {isPortuguese
            ? "©2025 Feito por André Colombo"
            : "©2025 Done by André Colombo"}
        </p>
      </footer>
    </>
  );
}
