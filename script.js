// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
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

      // Close the mobile menu after a link is clicked
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  // Close the mobile menu if the user clicks outside of it
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Project Item Click Effect
  const projectItems = document.querySelectorAll('.project-item');
  const overlay = document.createElement('div');

  overlay.classList.add('project-overlay');
  document.body.appendChild(overlay);

  projectItems.forEach(item => {
    const projectDate = item.querySelector('.project-date');

    item.addEventListener('mouseover', () => {
      projectDate.style.display = 'inline';  // Show project date on hover
    });

    item.addEventListener('mouseout', () => {
      projectDate.style.display = 'none';  // Hide project date when not hovering
    });

    item.addEventListener('click', (event) => {
      event.stopPropagation();  // Prevent click event from bubbling up to the document

      // Remove 'active' class from all items
      projectItems.forEach(i => i.classList.remove('active'));

      // Add 'active' class to the clicked item and show the overlay
      item.classList.add('active');
      overlay.classList.add('active');
    });
  });

  // Click event to close the project item and hide the overlay
  overlay.addEventListener('click', () => {
    // Remove 'active' class from all items
    projectItems.forEach(i => i.classList.remove('active'));

    // Hide the overlay
    overlay.classList.remove('active');
  });
});