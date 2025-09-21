const openBtn = document.getElementById("open-btn");
const closedWrapper = document.getElementById("closed-card-wrapper");
const openWrapper = document.getElementById("open-card-wrapper");
const ribbon = document.getElementById("ribbon");
const audio = document.getElementById("bg-audio");
const audioBtn = document.getElementById("audio-btn");

let playing = false;

openBtn.addEventListener("click", () => {
  // show ribbon for 1.2s then open card
  ribbon.style.display = "block";
  setTimeout(() => {
    ribbon.style.display = "none";
    closedWrapper.style.display = "none";
    openWrapper.style.display = "flex";

    // try to play audio
    audio.play().then(() => {
      playing = true;
      audioBtn.textContent = "🔊";
    }).catch(() => {
      playing = false;
      audioBtn.textContent = "🔈";
    });
  }, 1200);
});

// toggle audio
audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playing = true;
    audioBtn.textContent = "🔊";
  } else {
    audio.pause();
    playing = false;
    audioBtn.textContent = "🔈";
  }
});
// 🎉 Confetti when card opens
function launchConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
  
  // trigger confetti when card opens
  openBtn.addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(launchConfetti, i * 150);
    }
  });
  document.querySelector('.wedding-card-viewport::before').style.opacity = 1;
  