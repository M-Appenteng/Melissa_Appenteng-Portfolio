// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60,  // Adjust for the navbar height
      behavior: 'smooth'
    });
  });
});