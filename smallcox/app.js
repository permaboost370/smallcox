// SMALLCOX — minimal scripts. No frameworks.

// Copy-to-clipboard for contract address
document.querySelectorAll(".copy").forEach((btn) => {
  const original = btn.textContent;
  btn.addEventListener("click", async () => {
    const sel = btn.getAttribute("data-copy");
    const el = sel && document.querySelector(sel);
    if (!el) return;
    try {
      await navigator.clipboard.writeText(el.textContent.trim());
      btn.textContent = "Copied!";
      btn.style.background = "#fff";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "";
      }, 1200);
    } catch { /* no-op */ }
  });
});

// Dead links: prevent jump-to-top + soft bounce
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

// Back-to-top
const toTop = document.getElementById("toTop");
if (toTop) {
  const onScroll = () => {
    toTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.7);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Subtle character tilt on cursor (desktop only)
const heroImg = document.querySelector(".hero-art img");
if (heroImg && matchMedia("(pointer:fine)").matches) {
  const art = document.querySelector(".hero-art");
  art.addEventListener("mousemove", (e) => {
    const rect = art.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroImg.style.transform = `rotate(${x * 3}deg) translate3d(${x * 6}px, ${y * 6}px, 0)`;
  });
  art.addEventListener("mouseleave", () => {
    heroImg.style.transform = "";
  });
}
