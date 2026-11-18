document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".module-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
      const icon = button.querySelector("[data-toggle-icon]");
      if (icon) icon.textContent = expanded ? "+" : "−";
    });
  });
});
