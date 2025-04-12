import { Link } from "react-router-dom";

export default function Menu({ onClose }) {
  return (
    <>
      <nav className="bg-tertiary absolute top-0 left-0 flex h-screen w-full flex-col justify-center text-black lg:hidden">
        <img
          className="absolute top-10 right-10 size-4.5 self-end"
          src="/close.svg"
          alt="X icon"
          onClick={onClose}
        />
        <ul className="flex flex-col items-center gap-10">
          <li>
            <a href="/#home" onClick={onClose}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" onClick={onClose}>
              About me
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={onClose}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={onClose}>
              Education & Skills
            </a>
          </li>
          <li>
            <Link to="/blog" onClick={onClose}>
              Blog
            </Link>
          </li>
          <li>
            <a href="/#contacts" onClick={onClose}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
