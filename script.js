/* ===============================
NAVBAR TOGGLE (MOBILE)
================================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ===============================
ACTIVE LINK SAAT SCROLL
================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ===============================
SCROLL ANIMATION (REVEAL)
================================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* ===============================
MODAL PROJECT
================================= */
const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* ===============================
SMOOTH SCROLL
================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Mahasiswa";
  const el = document.getElementById("typingText");

  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting) {
      el.textContent = text.substring(0, index++);
      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeLoop, 50); // pause sebelum hapus
        return;
      }
    } else {
      el.textContent = text.substring(0, index--);
      if (index < 0) {
        isDeleting = false;
      }
    }

    setTimeout(typeLoop, isDeleting ? 400 : 300);
  }

  typeLoop();
});