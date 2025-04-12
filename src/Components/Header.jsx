import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Navegacao from "./Navegacao";
import Menu from "./Menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const isPortuguese = pathname.startsWith("/pt");

  return (
    <>
      <header className="bg-secondary flex items-center justify-between gap-4 px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[2.9vh]">
        <a href={isPortuguese ? "/pt" : "/en"}>
          <h1 className="text-2xl xl:text-3xl">
            André <strong>Colombo</strong>
          </h1>
        </a>
        {isPortuguese ? <Navegacao /> : <Navigation />}
        <img
          className="flex size-5 lg:hidden xl:hidden"
          src="/menu.svg"
          alt="Menu icon"
          onClick={() => setShowMenu(true)}
        />
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </header>
    </>
  );
}
