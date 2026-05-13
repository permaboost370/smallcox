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
document.querySelectorAll(".social[data-soon]").forEach((a) => {
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

// Subtle parallax on the hero specimen — desktop only
const specimen = document.querySelector(".hero-art img");
if (specimen && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    specimen.style.translate = `${x}px ${y}px`;
  }, { passive: true });
}

// Letter-stagger entrance for the wordmark
const wordmark = document.querySelector(".wordmark");
if (wordmark) {
  wordmark.querySelectorAll("span").forEach((s, i) => {
    s.style.opacity = "0";
    s.style.transform = "translateY(20px)";
    s.style.transition = `opacity .5s ease ${i * 60}ms, transform .6s cubic-bezier(.2,.7,.2,1) ${i * 60}ms`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
      });
    });
  });
}
