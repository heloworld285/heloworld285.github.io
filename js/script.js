// =======================
// Exel Nakano Portfolio JS
// =======================

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  // ===== Mobile Navigation Toggle =====
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }

  // ===== Header Background Scroll Effect =====
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
      header.style.backdropFilter = "blur(12px)";
    } else {
      header.style.backgroundColor = "rgba(10, 10, 10, 0.9)";
      header.style.backdropFilter = "blur(8px)";
    }
  });

  // ===== Typing Effect =====
  const typingEl = document.getElementById("typing");
  const words = [
    "Bug Bounty Hunter",
    "Web Pentester",
    "Security Researcher",
    "API & Mobile Security",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let typingForward = true;

  function typeLoop() {
    if (!typingEl) return;
    const current = words[wordIndex];

    if (typingForward) {
      charIndex++;
      typingEl.textContent = "$ " + current.slice(0, charIndex);
      if (charIndex === current.length) {
        typingForward = false;
        setTimeout(typeLoop, 1000);
        return;
      }
    } else {
      charIndex--;
      typingEl.textContent = "$ " + current.slice(0, charIndex);
      if (charIndex === 0) {
        typingForward = true;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeLoop, typingForward ? 80 : 40);
  }

  typeLoop();

  // ===== Scroll Reveal (fade-in effect) =====
  const revealElements = document.querySelectorAll(
    ".skill-item, .work-card, .section-title, .section-subtitle, .about-text, .contact-form, .contact-info"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.style.transition = "all 0.8s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Initial state: hidden + slightly offset
  revealElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ===== Contact Form =====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      // In production: replace with actual email or API call
      console.log("Message Sent:", { name, email, message });
      alert("✅ Thank you! I’ll reply within 24–48 hours.");

      this.reset();
    });
  }
});
