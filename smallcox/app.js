// Smallcox — tiny enhancements only. No frameworks. No tracking.

// Copy-to-clipboard for the CA field
document.querySelectorAll(".copy").forEach((btn) => {
  const original = btn.textContent;
  btn.addEventListener("click", async () => {
    const sel = btn.getAttribute("data-copy");
    const el = sel && document.querySelector(sel);
    if (!el) return;
    try {
      await navigator.clipboard.writeText(el.textContent.trim());
      btn.textContent = "copied";
      btn.style.color = "#B07CFF";
      btn.style.borderColor = "#B07CFF";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.color = "";
        btn.style.borderColor = "";
      }, 1200);
    } catch { /* no-op */ }
  });
});

// Dead social links: prevent jumps, soft hover-bounce instead
document.querySelectorAll("[data-soon]").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (a.getAttribute("href") === "#") {
      e.preventDefault();
      a.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-4px)" }, { transform: "translateY(0)" }],
        { duration: 280, easing: "ease-out" }
      );
    }
  });
});

// Back-to-top button — show after the user scrolls past the hero
const toTop = document.getElementById("toTop");
if (toTop) {
  const onScroll = () => {
    toTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Subtle parallax on the hero specimen — desktop only
const specimen = document.querySelector(".hero-art img");
if (specimen && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    specimen.style.translate = `${x}px ${y}px`;
  }, { passive: true });
}

// Wordmark entrance — single fade-up
const wordmark = document.querySelector(".wordmark > span[aria-hidden]");
if (wordmark) {
  wordmark.style.opacity = "0";
  wordmark.style.transform = "translateY(24px)";
  wordmark.style.transition = "opacity .7s ease, transform .8s cubic-bezier(.2,.7,.2,1)";
  requestAnimationFrame(() => requestAnimationFrame(() => {
    wordmark.style.opacity = "1";
    wordmark.style.transform = "translateY(0)";
  }));
}
