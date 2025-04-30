const textSpan = document.getElementById('intro-text');
const cursorSpan = document.getElementById('cursor');
const nameSpan = document.getElementById('name'); 
const desc = document.querySelector('.desc');

const introText = "Hi, I'm ";
const nameText = "Aoife";
nameSpan.style.color = "#68172f";
let index = 0;

function blinkCursor() {
  cursorSpan.style.visibility = cursorSpan.style.visibility === 'hidden' ? 'visible' : 'hidden';
}

function typeWriter() {
  if (index < introText.length) {

    textSpan.textContent = introText.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 30); 
  } else {

    cursorSpan.style.visibility = 'hidden';


    let nameIndex = 0;
    const nameTypingInterval = setInterval(() => {
      nameSpan.textContent = nameText.substring(0, nameIndex + 1);
      nameIndex++;
      blinkCursor();

      if (nameIndex === nameText.length) {
        clearInterval(nameTypingInterval);
        cursorSpan.style.visibility = 'hidden';

        setTimeout(() => {
          desc.classList.add('show');
        }, 200);
      }
    }, 30);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  typeWriter();

  const totalTypingTime = introText.length * 30 + nameText.length * 100;
  setTimeout(() => {
    document.querySelector('.desc').classList.add('show');
  }, totalTypingTime + 100);
});
