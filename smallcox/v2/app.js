// Tabloid variant — minimal JS

// Dead social links: prevent jumps
document.querySelectorAll("[data-soon]").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (a.getAttribute("href") === "#") {
      e.preventDefault();
      a.animate(
        [{ transform: "translate(0,0)" }, { transform: "translate(-3px,-3px)" }, { transform: "translate(0,0)" }],
        { duration: 220, easing: "ease-out" }
      );
    }
  });
});

// Back-to-top
const toTop = document.getElementById("toTop");
if (toTop) {
  const onScroll = () => {
    toTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
