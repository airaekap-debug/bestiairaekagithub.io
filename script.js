
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const decor = document.getElementById("decor");

openBtn.addEventListener("click", () => {
  const isOpen = letter.classList.toggle("show");

  openBtn.textContent = isOpen
    ? "udah dibaca belumm? hihiii 💗"
    : "pencet akuuu ♡";

  if (isOpen) {
    makeHearts(22);

    setTimeout(() => {
      letter.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 100);
  }
});

// Emoji gemoy yang terbang-terbang 🎀
const cuteThings = [
  "💗", "💕", "🎀", "🌸", "🧸",
  "💜", "♡", "✨", "🌷", "💌"
];

for (let i = 0; i < 32; i++) {
  const item = document.createElement("span");

  item.className = "floaty";
  item.textContent =
    cuteThings[Math.floor(Math.random() * cuteThings.length)];

  item.style.left = Math.random() * 100 + "%";
  item.style.fontSize = (13 + Math.random() * 15) + "px";
  item.style.setProperty("--time", (7 + Math.random() * 9) + "s");
  item.style.setProperty("--delay", (-Math.random() * 15) + "s");

  decor.appendChild(item);
}

// Hati-hati kecil muncul pas pesannya dibuka 💞
function makeHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.textContent =
      cuteThings[Math.floor(Math.random() * cuteThings.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-35px";
    heart.style.fontSize = (16 + Math.random() * 15) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "99";
    heart.style.transition =
      "transform 3s ease-out, opacity 3s ease-out";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translateY(-${window.innerHeight + 60}px) rotate(${Math.random() * 180}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 3100);
  }
}
