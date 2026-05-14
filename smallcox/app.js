// Smallcox — wojak rebuild. No frameworks. No tracking.

// Dead social links: prevent jumps, soft bounce instead
document.querySelectorAll("[data-soon]").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (a.getAttribute("href") === "#") {
      e.preventDefault();
      a.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-4px)" }, { transform: "translateY(0)" }],
        { duration: 240, easing: "ease-out" }
      );
    }
  });
});

// Back-to-top — show after the hero
const toTop = document.getElementById("toTop");
if (toTop) {
  const onScroll = () => {
    toTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Hero art: subtle cursor parallax (desktop only)
const wojak = document.querySelector(".hero-art img");
if (wojak && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    wojak.style.translate = `${x}px ${y}px`;
  }, { passive: true });
}

// Wordmark entrance — single fade-up
const wordmark = document.querySelector(".wordmark span");
if (wordmark) {
  wordmark.style.opacity = "0";
  wordmark.style.transform = "translateY(20px)";
  wordmark.style.transition = "opacity .6s ease, transform .7s cubic-bezier(.2,.7,.2,1)";
  requestAnimationFrame(() => requestAnimationFrame(() => {
    wordmark.style.opacity = "1";
    wordmark.style.transform = "translateY(0)";
  }));
}
