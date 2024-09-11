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

  // JavaScript for "Learn More" functionality
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  learnMoreBtn.addEventListener('click', () => {
    const fullText = document.getElementById('fullText');
    const summary = document.getElementById('summary');
    
    if (fullText.style.display === 'none') {
      fullText.style.display = 'block';
      summary.style.display = 'none';
      learnMoreBtn.textContent = 'Summarize';  // Change to "Summarize"
    } else {
      fullText.style.display = 'none';
      summary.style.display = 'block';
      learnMoreBtn.textContent = 'Learn More';  // Change back to "Learn More"
    }
  });

  // JavaScript for Skills Modal
  const skillItems = document.querySelectorAll('.skill-item');
  const skillModal = document.getElementById('skillModal');
  const skillTitle = document.getElementById('skillTitle');
  const skillDescription = document.getElementById('skillDescription');
  const closeBtn = document.querySelector('.modal .close-btn');

  skillItems.forEach(item => {
    item.addEventListener('click', () => {
      const skillName = item.getAttribute('data-skill');
      skillTitle.textContent = skillName;
      skillDescription.textContent = getSkillDescription(skillName);
      skillModal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    skillModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === skillModal) {
      skillModal.style.display = 'none';
    }
  });

  function getSkillDescription(skill) {
    const descriptions = {
      'CSS': 'Cascading Style Sheets, used for styling web pages.',
      'HTML5': 'Hypertext Markup Language, the standard for structuring web pages.',
      'Python': 'A versatile programming language used in various domains.',
      'Tableau': 'A data visualization tool that helps in creating interactive dashboards.',
      'PHP': 'A server-side scripting language used for web development.',
      'MySQL': 'A relational database management system.',
      'VB.NET': 'A multi-paradigm programming language developed by Microsoft.',
      'C++': 'A general-purpose programming language known for its performance and efficiency.',
      'Java': 'A high-level programming language used for building platform-independent applications.',
      'JavaScript': 'A scripting language used to create interactive effects within web browsers.',
      'Google Suite': 'A collection of cloud computing, productivity, and collaboration tools.',
      'Office 365': 'A suite of productivity tools from Microsoft including Word, Excel, and Outlook.'
    };
    return descriptions[skill] || 'Description not available.';
  }
});
