const textSpan = document.getElementById('intro-text');
const nameSpan = document.getElementById('name');
const desc = document.querySelector('.desc');
const nav = document.querySelector('nav');
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-sections a');
const navSections = document.querySelector('.nav-sections');
const overlay = document.getElementById('overlay');
const introText = "Hi, my name is ";
const nameOnly = "Aoife ";
const emoji = "👋🏼";

nameSpan.style.color = "#e6ffc8";

let index = 0;

function typeWriter() {
  if (index < introText.length) {
    textSpan.textContent = introText.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 50);
  } else {
    let nameIndex = 0;
    const nameTypingInterval = setInterval(() => {
      nameSpan.textContent = nameOnly.substring(0, nameIndex + 1);
      nameIndex++;

      if (nameIndex === nameOnly.length) {
        clearInterval(nameTypingInterval);

        setTimeout(() => {
          const wave = document.createElement("span");
          wave.className = "wave";
          wave.textContent = emoji;
          nameSpan.appendChild(wave);

          setTimeout(() => {
            desc.classList.add('show');
            nav.classList.add('show');
          }, 250);
        }, 100);
      }
    }, 50);
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
