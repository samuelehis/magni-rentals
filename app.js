const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#mobile-menu");

menuBtn?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

menu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// QR campaign attribution is preserved for the next workflow page.
// Example: ?source=qr&campaign=lagos-showroom&rep=rep-001&location=ikeja
const params = new URLSearchParams(window.location.search);
const attribution = Object.fromEntries(
  ["source","campaign","rep","location","qr"].map(k => [k, params.get(k)]).filter(([,v]) => v)
);
if (Object.keys(attribution).length) {
  sessionStorage.setItem("magnicarz_attribution", JSON.stringify(attribution));
}
