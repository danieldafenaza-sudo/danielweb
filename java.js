/* ================= HEADER SCROLL EFFECT ================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show-menu")) {
      icon.className = "ri-close-line";
    } else {
      icon.className = "ri-menu-3-line";
    }
  });
}


/* ================= CLOSE MENU WHEN LINK CLICKED ================= */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.className = "ri-menu-3-line";
    }
  });
});


/* ================= ACTIVE NAV LINK ON SCROLL ================= */
const sections = document.querySelectorAll("section[id]");

function activeLinkOnScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(
      `.nav-menu a[href="#${sectionId}"]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", activeLinkOnScroll);


/* ================= CONTACT FORM ================= */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Mohon isi semua form terlebih dahulu ya.");
      return;
    }

    alert("Pesan berhasil dibuat! Terima kasih sudah menghubungi Daniel.");

    contactForm.reset();
  });
}


/* ================= SCROLL REVEAL ANIMATION ================= */
const revealElements = document.querySelectorAll(
  ".home-content, .home-image, .about-image, .about-content, .skill-card, .project-card, .education-card, .contact-info, .contact-form"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================= BACK TO TOP ================= */
const backTop = document.querySelector(".back-top");

if (backTop) {
  backTop.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


/* ================= PROJECT BUTTON WARNING ================= */
const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const href = button.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      alert("Link project belum ditambahkan.");
    }
  });
});