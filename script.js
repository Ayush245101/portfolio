function showSection(id) {
  // Hide all sections and remove 'active'
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  // Show the selected section
  document.getElementById(id).classList.add('active');
  // Update tabs
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active-tab'));
  // Add highlight to clicked tab
  if (window.event && window.event.target && window.event.target.classList.contains('tab')) {
    window.event.target.classList.add('active-tab');
  } else {
    // fallback: highlight the correct tab by section order
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const idx = ['intro','projects','resume','contact'].indexOf(id);
    if (tabs[idx]) tabs[idx].classList.add('active-tab');
  }
}

// Typing effect (only run if typing-text element exists)
const typingText = document.getElementById('typing-text');
if (typingText) {
  const words = ["AI/ML Enthusiast", "Data Scientist", "Web Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
      typingText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();
}

// Scroll to top button logic (only if button exists)
const scrollBtn = document.getElementById('scrollToTopBtn');
if (scrollBtn) {
  window.onscroll = function() {
    scrollBtn.style.display = document.documentElement.scrollTop > 200 ? 'block' : 'none';
  };
  scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

// Dark/Light mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mode-toggle");
  const body = document.body;

  // Initial state from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️ Light Mode";
  } else {
    if (toggleBtn) toggleBtn.textContent = "🌙 Dark Mode";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
      } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
