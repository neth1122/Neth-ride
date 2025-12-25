// GSAP setup
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: "power3.out"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 20,
  delay: 0.15
});

// STEPS
gsap.from(".step-card", {
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".step-card",
    start: "top 85%"
  }
});

// LOCATIONS
gsap.from(".location-card", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".location-grid",
    start: "top 85%"
  }
});

// PRICING
gsap.from(".pricing-card", {
  opacity: 0,
  y: 40,
  duration: .8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pricing",
    start: "top 75%"
  }
});


// THEME TOGGLE (SAFE)
const toggle = document.getElementById("themeToggle");

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

document.querySelectorAll('.metric').forEach(el => {
  if (el.dataset.value) {
    el.textContent = `${el.dataset.value}+ deliveries`;
  }
});
