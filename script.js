function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Typing effect
const typingText = document.getElementById('typing-text');
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

// Scroll to top
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
  scrollBtn.style.display = document.documentElement.scrollTop > 200 ? 'block' : 'none';
};
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mode-toggle");
  const body = document.body;

  // Check local storage preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

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
});
// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
