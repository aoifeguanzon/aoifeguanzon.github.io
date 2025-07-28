const textSpan = document.getElementById('intro-text');
const nameSpan = document.getElementById('name');
const desc = document.querySelector('.desc');
const nav = document.querySelector('nav');
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-sections a');
const navSections = document.querySelector('.nav-sections');
const overlay = document.getElementById('overlay');

const introText = "Hi ";
const nameOnly = " my name is ";
const specialName = "Aoife";
const emoji = " 👋🏼";

let index = 0;
let nameIndex = 0;
let specialIndex = 0;

function typeWriter() {
  if (index < introText.length) {
    textSpan.textContent = introText.substring(0, index + 1);

    if (introText.substring(0, index + 1) === "Hi " && !document.querySelector(".wave")) {
      const wave = document.createElement("span");
      wave.className = "wave";
      wave.textContent = emoji;
      textSpan.appendChild(wave);
    }

    index++;
    setTimeout(typeWriter, 50);

  } else if (nameIndex < nameOnly.length) {
    nameSpan.textContent = nameOnly.substring(0, nameIndex + 1);
    nameIndex++;
    setTimeout(typeWriter, 50);

  } else if (specialIndex < specialName.length) {
    if (!nameSpan.querySelector('.special-name')) {
      const specialSpan = document.createElement('span');
      specialSpan.className = 'special-name';
      specialSpan.style.color = '#e6ffc8';
      nameSpan.appendChild(specialSpan);
    }

    const specialSpan = nameSpan.querySelector('.special-name');
    specialSpan.textContent = specialName.substring(0, specialIndex + 1);
    specialIndex++;
    setTimeout(typeWriter, 50);

  } else {
    setTimeout(() => {
      desc.classList.add('show');
      nav.classList.add('show');
    }, 250);
  }
}

toggle.addEventListener('click', () => {
  navSections.classList.toggle('show');
  nav.classList.toggle('nav-expanded');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  navSections.classList.remove('show');
  nav.classList.remove('nav-expanded');
  overlay.classList.remove('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navSections.classList.remove('show');
    nav.classList.remove('nav-expanded');
    overlay.classList.remove('show');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  typeWriter();

  const contentSections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  contentSections.forEach(section => {
    section.classList.add("slide-up");
    observer.observe(section);
  });
});
