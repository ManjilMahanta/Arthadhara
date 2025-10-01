// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// Modal Example
document.querySelectorAll("[data-modal-open]").forEach(button => {
  button.onclick = () => {
    document.querySelector("#modal").classList.remove("hidden");
  };
});

document.querySelectorAll("[data-modal-close]").forEach(button => {
  button.onclick = () => {
    document.querySelector("#modal").classList.add("hidden");
  };
});

// Dark/Light Mode
const toggle = document.createElement("button");
toggle.id = "toggle";
toggle.innerText = "🌙";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "10px";
toggle.style.borderRadius = "50%";
toggle.style.border = "none";
toggle.style.cursor = "pointer";
document.body.appendChild(toggle);

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.body.style.background = "linear-gradient(135deg, #000, #111)";
    document.body.style.color = "#f5f5f5";
    toggle.innerText = "☀️";
  } else {
    document.body.style.background = "linear-gradient(135deg, #0d0d0d, #1a1a1a)";
    document.body.style.color = "#f5f5f5";
    toggle.innerText = "🌙";
  }
};

// Custom Cursor
const cursor = document.createElement("div");
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.border = "2px solid gold";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "9999";
cursor.style.transform = "translate(-50%, -50%)";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Scroll Animation (AOS-like)
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
