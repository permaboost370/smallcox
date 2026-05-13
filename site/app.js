// Smallcox — tiny enhancements only. No frameworks. No tracking.

// Copy-to-clipboard for the CA field
document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const targetSel = btn.getAttribute("data-copy");
    const el = document.querySelector(targetSel);
    if (!el) return;
    const text = el.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      const prev = btn.textContent;
      btn.textContent = "✓";
      btn.style.color = "#c2ff3a";
      setTimeout(() => { btn.textContent = prev; btn.style.color = ""; }, 1100);
    } catch {
      // graceful no-op
    }
  });
});

// Prevent dead social links from jumping to top; show a soft pulse instead
document.querySelectorAll(".social").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (a.getAttribute("href") === "#") {
      e.preventDefault();
      a.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-4px)" },
          { transform: "translateY(0)" },
        ],
        { duration: 320, easing: "ease-out" }
      );
    }
  });
});

// Subtle parallax on the orb — tied to cursor on desktop only
const orb = document.querySelector(".orb");
if (orb && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, { passive: true });
}
