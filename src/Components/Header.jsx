import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="bg-secondary flex items-center justify-between px-60 py-7 portrait:gap-4 portrait:px-6 portrait:py-5">
        <a href="/">
          <h1 className="text-3xl portrait:text-2xl">
            André <strong>Colombo</strong>
          </h1>
        </a>
        <nav className="portrait:hidden">
          <ul className="flex gap-6 portrait:flex-wrap portrait:gap-x-4 portrait:gap-y-2">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About me</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#skills">Education & Skills</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="/#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
        <img
          className="hidden size-5 portrait:flex"
          src="/menu.svg"
          alt="Menu icon"
          onClick={() => setShowMenu(true)}
        />
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </header>
    </>
  );
}
