const wave = document.querySelector("#wave");

for (let i = 0; i < 32; i += 1) {
  const bar = document.createElement("span");
  const height = 8 + Math.abs(Math.sin(i * 0.78) * 30);
  bar.className = "bar";
  bar.style.height = `${height}px`;
  bar.style.animationDelay = `${i * -0.06}s`;
  wave.appendChild(bar);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(element);
});
