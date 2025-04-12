import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-4">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
