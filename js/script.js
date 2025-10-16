// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(10, 10, 10, 0.9)";
    nav.style.backdropFilter = "blur(6px)";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
  }
});
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }