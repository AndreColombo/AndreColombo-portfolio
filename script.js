// Functionality to handle the typewriter effect
const phrases = [
  "console.log('Building ideas...');",
  "print('Creating something awesome')",
  "System.out.println('Keep learning!');",
  "git commit -m 'Solving problems...'",
];
let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("animation");
  const current = phrases[i];

  element.innerHTML = current.substring(0, j);

  j += isDeleting ? -1 : 1;

  if (j === current.length + 1) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 75 : 125);
}

typeEffect();

// Functionality to handle the course popups
function openPopup(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closePopup(id) {
  document.getElementById(id).classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

// Functionality to handle the articles popups
function openArticle(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeArticle(id) {
  document.getElementById(id).classList.add("hidden");
  document.body.classList.remove("no-scroll");
}
