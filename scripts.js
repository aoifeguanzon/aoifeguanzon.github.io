const textSpan = document.getElementById('intro-text');
const nameSpan = document.getElementById('name');
const desc = document.querySelector('.desc');
const nav = document.querySelector('nav');
const toggle = document.getElementById('nav-toggle');
const sections = document.querySelector('.nav-sections');

const introText = "Hi, my name is ";
const nameOnly = "Aoife";
const emoji = " 👋🏼";

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
          nameSpan.textContent += emoji;

          setTimeout(() => {
            desc.classList.add('show');
            nav.classList.add('show');
          }, 300);
        }, 50);
      }
    }, 40);
  }
}

toggle.addEventListener('click', () => {
  sections.classList.toggle('show');
  nav.classList.toggle('nav-expanded');
});

window.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});
