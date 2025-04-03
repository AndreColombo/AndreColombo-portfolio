(function () {
  emailjs.init("005bsHQE3xYi5Qb37");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("gmailPortfolio", "portofolio_contact", this).then(
      () => {
        alert("Message sent successfully!");
        this.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("Erro:", error);
      }
    );
  });
