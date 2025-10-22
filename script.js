document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks   = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId      = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;

        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });

        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuToggle.classList.remove('active');
        }
      });
    });
    
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }

  const projectItems = document.querySelectorAll('.project-item');
  
  const overlay = document.createElement('div');
  overlay.classList.add('project-overlay');
  document.body.appendChild(overlay);

  function closeExpanded() {
    projectItems.forEach(i => i.classList.remove('active'));
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  projectItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      projectItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      overlay.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });
  
  overlay.addEventListener('click', closeExpanded);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExpanded();
  });
  document.addEventListener('click', (e) => {
    if (overlay.classList.contains('active') && !e.target.closest('.project-item')) {
      closeExpanded();
    }
  });

  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const fullText     = document.getElementById('fullText');
  const summary      = document.getElementById('summary');

  if (learnMoreBtn && fullText && summary) {
    learnMoreBtn.addEventListener('click', () => {
      const expanded = fullText.style.display !== 'none';
      if (expanded) {
        fullText.style.display = 'none';
        summary.style.display  = 'block';
        learnMoreBtn.textContent = 'Learn More';
      } else {
        fullText.style.display = 'block';
        summary.style.display  = 'none';
        learnMoreBtn.textContent = 'Summarize';
      }
    });
  }

  const skillItems       = document.querySelectorAll('.skill-item');
  const skillModal       = document.getElementById('skillModal');
  const skillTitle       = document.getElementById('skillTitle');
  const skillDescription = document.getElementById('skillDescription');
  const skillCloseBtn    = document.querySelector('#skillModal .close-btn');

  const descriptions = {
    'CSS': 'Cascading Style Sheets, used for styling web pages.',
    'HTML5': 'Hypertext Markup Language, the standard for structuring web pages.',
    'Python': 'A versatile programming language used in various domains.',
    'Tableau': 'A data visualization tool for interactive dashboards.',
    'PHP': 'Server-side scripting language used for web development.',
    'MySQL': 'A relational database management system.',
    'VB.NET': 'A multi-paradigm language developed by Microsoft.',
    'C++': 'A general-purpose language known for performance.',
    'Java': 'A language for building platform-independent apps.',
    'JavaScript': 'The language of the web for interactive UI.',
    'Google Suite': 'Cloud productivity and collaboration tools.',
    'Office 365': 'Microsoft productivity tools like Word/Excel/Outlook.'
  };

  function getSkillDescription(skill) {
    return descriptions[skill] || 'Description not available.';
  }

  if (skillModal && skillTitle && skillDescription) {
    skillItems.forEach(item => {
      item.addEventListener('click', () => {
        const skillName = item.getAttribute('data-skill');
        skillTitle.textContent       = skillName;
        skillDescription.textContent = getSkillDescription(skillName);
        skillModal.style.display     = 'block';
        document.body.classList.add('no-scroll');
      });
    });

    if (skillCloseBtn) {
      skillCloseBtn.addEventListener('click', () => {
        skillModal.style.display = 'none';
        document.body.classList.remove('no-scroll');
      });
    }

    window.addEventListener('click', (event) => {
      if (event.target === skillModal) {
        skillModal.style.display = 'none';
        document.body.classList.remove('no-scroll');
      }
    });
  }

  const imgModal     = document.getElementById("image-modal");
  const imgModalImg  = document.getElementById("modal-img");
  const melissaName  = document.getElementById("melissa-name");
  const imgCloseBtn  = document.querySelector("#image-modal .close-btn");

  if (melissaName && imgModal) {
    melissaName.addEventListener("click", function () {
      imgModal.style.display = "block";
      document.body.classList.add('no-scroll');
    });
  }

  if (imgCloseBtn) {
    imgCloseBtn.addEventListener("click", function () {
      imgModal.style.display = "none";
      document.body.classList.remove('no-scroll');
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target === imgModal) {
      imgModal.style.display = "none";
      document.body.classList.remove('no-scroll');
    }
  });
});
