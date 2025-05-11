const textSpan = document.getElementById('intro-text');
const nameSpan = document.getElementById('name');
const desc = document.querySelector('.desc');
const nav = document.querySelector('nav');

const introText = "Hi, my name is ";
const nameText = "Aoife 👋🏼";
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
      nameSpan.textContent = nameText.substring(0, nameIndex + 1);
      nameIndex++;

      if (nameIndex === nameText.length) {
        clearInterval(nameTypingInterval);
        setTimeout(() => {
          desc.classList.add('show');
          nav.classList.add('show');
        }, 300);
      }
    }, 40);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});
