import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SecaoContatos() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmailPortfolio", "contato_portfolio", form.current, {
        publicKey: "005bsHQE3xYi5Qb37",
      })
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!", {
            style: {
              background: "#f1efec",
              color: "#393939",
              fontFamily: "Gill Sans MT, sans-serif",
            },
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Falha ao enviar mensagem. Tente novamente!");
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <section
        className="bg-tertiary px-[6.25vw] py-[5.21vw] xl:px-[12.5vw] xl:py-[4vh]"
        id="contatos"
      >
        <h1 className="mb-6 text-xl font-bold text-white xl:mb-10 xl:text-3xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            04
          </span>
          Contatos
        </h1>
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex w-full flex-col gap-2.5 xl:w-2/3"
          >
            <input
              className="bg-secondary focus:outline-primary rounded px-3 py-1.5 text-base focus:outline-2 xl:text-lg"
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              required
            />
            <input
              className="bg-secondary focus:outline-primary rounded px-3 py-1.5 text-base focus:outline-2 xl:text-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="bg-secondary focus:outline-primary resize-none rounded px-3 py-1.5 text-base focus:outline-2 xl:text-lg"
              type="text"
              id="mensagem"
              name="mensagem"
              placeholder="Mensagem"
              required
            ></textarea>
            <button
              className="bg-primary text-secondary rounded px-3 py-1.5 text-base active:bg-[#0a213a] xl:text-lg"
              type="submit"
              value="Send"
            >
              Enviar
            </button>
          </form>
          <hr className="border-primary mx-3 my-0 h-auto w-auto border-1 xl:my-3" />
          <ul className="flex w-full flex-row justify-evenly gap-6 text-lg xl:w-1/3 xl:flex-col xl:justify-center">
            <li>
              <a
                className="flex items-center gap-2 xl:gap-3"
                href="https://www.linkedin.com/in/andrerosacolombo/"
                target="_blank"
              >
                <img
                  className="size-7 rounded xl:size-9"
                  src="/Socials/linkedin.png"
                  alt="Linkedin logo"
                />
                <span className="hidden xl:flex">andrerosacolombo</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 xl:gap-3"
                href="mailto:andrerosacolombo18@gmail.com?subject=Portfolio%20Contact"
              >
                <img
                  className="size-7 rounded xl:size-9"
                  src="/Socials/gmail.png"
                  alt="Gmail logo"
                />
                <span className="hidden xl:flex">
                  andrerosacolombo18@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 xl:gap-3"
                href="https://wa.me/5511976761158"
                target="_blank"
              >
                <img
                  className="size-7 rounded xl:size-9"
                  src="/Socials/whatsapp.png"
                  alt="Gmail logo"
                />
                <span className="hidden xl:flex">(11) 97676-1158</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ToastContainer position="bottom-center" />
    </>
  );
}
