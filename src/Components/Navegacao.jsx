import { Link } from "react-router-dom";

export default function Navegacao() {
  return (
    <>
      <nav className="hidden lg:flex xl:flex">
        <ul className="flex xl:gap-6">
          <li>
            <a href="/pt/#inicio">Início</a>
          </li>
          <li>
            <a href="/pt/#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="/pt/#projetos">Projetos</a>
          </li>
          <li>
            <a href="/pt/#habilidades">Formação e Habilidades</a>
          </li>
          <li>
            <Link to="/pt/blog">Blog</Link>
          </li>
          <li>
            <a href="/pt/#contatos">Contatos</a>
          </li>
        </ul>
        <div className="flex gap-2 pl-6">
          <button>
            <Link to="/en">
              <img
                className="w-7 opacity-50 transition hover:opacity-100"
                src="/lang/USA.svg"
                alt="Bandeira dos EUA"
              />
            </Link>
          </button>
          <button>
            <Link to="/pt">
              <img
                className="border-primary w-7 border-b pb-0.5 opacity-100"
                src="/lang/BR.svg"
                alt="Bandeira do Brasil"
              />
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
