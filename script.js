
// =========================
// Smooth Page Transitions
// =========================
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href && this.href.includes(window.location.origin)) {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});


// =========================
// Scroll Reveal Animation
// =========================
const revealElements = document.querySelectorAll(".card, h2, h1, p, li");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// =========================
// Navbar Blur on Scroll
// =========================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.6)";
    header.style.backdropFilter = "blur(15px)";
  } else {
    header.style.background = "transparent";
  }
});


// =========================
// Command Search (Commands Page)
// =========================
const searchInput = document.getElementById("commandSearch");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    const items = document.querySelectorAll("li");

    items.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
}


// =========================
// Fake Live Status Animation
// =========================
const uptime = document.getElementById("uptime");
const ping = document.getElementById("ping");
const servers = document.getElementById("servers");

function randomizeStats() {
  if (uptime) uptime.textContent = "99.9%";
  if (ping) ping.textContent = Math.floor(Math.random() * 60) + "ms";
  if (servers) servers.textContent = (14 + Math.floor(Math.random()*50)) + "+";
}

setInterval(randomizeStats, 3000);
randomizeStats();


// =========================
// Parallax Glow Background
// =========================
document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".bg");
  if (!bg) return;

  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});


// =========================
// Button Ripple Effect
// =========================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

