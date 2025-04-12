import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactsSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmailPortfolio", "portofolio_contact", form.current, {
        publicKey: "005bsHQE3xYi5Qb37",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            style: {
              background: "#f1efec",
              color: "#393939",
              fontFamily: "Gill Sans MT, sans-serif",
            },
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again!");
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <section
        className="bg-tertiary px-60 py-10 portrait:px-6 portrait:py-5"
        id="contacts"
      >
        <h1 className="mb-10 text-3xl font-bold text-white portrait:mb-6 portrait:text-xl">
          <span className="text-quaternary mr-3 rounded bg-white px-2 py-1.5 font-[Gill_Sans_MT]">
            04
          </span>
          Contacts
        </h1>
        <div className="flex gap-10 portrait:flex-col portrait:gap-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex w-2/3 flex-col gap-2.5 portrait:w-full"
          >
            <input
              className="bg-secondary focus:outline-primary rounded px-3 py-1.5 text-lg focus:outline-2 portrait:text-base"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="bg-secondary focus:outline-primary rounded px-3 py-1.5 text-lg focus:outline-2 portrait:text-base"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="bg-secondary focus:outline-primary resize-none rounded px-3 py-1.5 text-lg focus:outline-2 portrait:text-base"
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button
              className="bg-primary text-secondary rounded px-3 py-1.5 text-lg active:bg-[#0a213a] portrait:text-base"
              type="submit"
              value="Send"
            >
              Send
            </button>
          </form>
          <hr className="border-primary my-3 h-auto border-1 portrait:mx-3 portrait:my-0 portrait:w-auto" />
          <ul className="flex w-1/3 flex-col justify-center gap-6 text-lg portrait:w-full portrait:flex-row portrait:justify-evenly">
            <li>
              <a
                className="flex items-center gap-3 portrait:gap-2"
                href="https://www.linkedin.com/in/andrerosacolombo/"
                target="_blank"
              >
                <img
                  className="size-9 rounded portrait:size-7"
                  src="/Socials/linkedin.png"
                  alt="Linkedin logo"
                />
                <span className="portrait:hidden">andrerosacolombo</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 portrait:gap-2"
                href="mailto:andrerosacolombo18@gmail.com?subject=Portfolio%20Contact"
              >
                <img
                  className="size-9 rounded portrait:size-7"
                  src="/Socials/gmail.png"
                  alt="Gmail logo"
                />
                <span className="portrait:hidden">
                  andrerosacolombo18@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 portrait:gap-2"
                href="https://wa.me/5511976761158"
                target="_blank"
              >
                <img
                  className="size-9 rounded portrait:size-7"
                  src="/Socials/whatsapp.png"
                  alt="Gmail logo"
                />
                <span className="portrait:hidden">+55 (11) 97676-1158</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ToastContainer position="bottom-center" />
    </>
  );
}
