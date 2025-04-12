import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="hidden lg:flex xl:flex">
        <ul className="flex xl:gap-6">
          <li>
            <a href="/en/#home">Home</a>
          </li>
          <li>
            <a href="/en/#about">About me</a>
          </li>
          <li>
            <a href="/en/#projects">Projects</a>
          </li>
          <li>
            <a href="/en/#skills">Education & Skills</a>
          </li>
          <li>
            <Link to="/en/blog">Blog</Link>
          </li>
          <li>
            <a href="/en/#contacts">Contacts</a>
          </li>
        </ul>
        <div className="flex gap-2 pl-6">
          <button>
            <Link to="/en">
              <img
                className="border-primary w-7 border-b pb-0.5 opacity-100"
                src="/lang/USA.svg"
                alt="USA Flag"
              />
            </Link>
          </button>
          <button>
            <Link to="/pt">
              <img
                className="w-7 opacity-50 transition hover:opacity-100"
                src="/lang/BR.svg"
                alt="Brazil Flag"
              />
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
