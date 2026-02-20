document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
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
  const fullText = document.getElementById('fullText');
  const summary = document.getElementById('summary');

  if (learnMoreBtn && fullText && summary) {
    learnMoreBtn.addEventListener('click', () => {
      const expanded = fullText.style.display !== 'none';
      if (expanded) {
        fullText.style.display = 'none';
        summary.style.display = 'block';
        learnMoreBtn.textContent = 'Learn More';
      } else {
        fullText.style.display = 'block';
        summary.style.display = 'none';
        learnMoreBtn.textContent = 'Summarize';
      }
    });
  }

  const skillItems = document.querySelectorAll('.skill-item');
  const skillModal = document.getElementById('skillModal');
  const skillTitle = document.getElementById('skillTitle');
  const skillDescription = document.getElementById('skillDescription');
  const skillCloseBtn = document.querySelector('#skillModal .close-btn');

  const descriptions = {
    'CSS': 'Cascading Style Sheets, used for styling and responsive layout design.',
    'HTML5': 'The standard markup language for structuring modern web applications.',
    'Python': 'A versatile programming language used for scripting, automation, data analysis, and backend development.',
    'Tableau': 'A data visualization tool used to create interactive dashboards and analytical reports.',
    'PHP': 'A server-side scripting language commonly used for dynamic web development.',
    'SQL': 'Structured Query Language used to query, manage, and manipulate relational databases.',
    'VB.NET': 'A Microsoft-developed language used for building Windows applications and enterprise tools.',
    'C++': 'A high-performance programming language used for systems programming and performance-critical applications.',
    'Java': 'An object-oriented programming language used for cross-platform application development.',
    'JavaScript': 'The primary language of the web used to create interactive and dynamic user interfaces.',
    'Google Suite': 'Cloud-based productivity and collaboration tools including Docs, Sheets, and Drive.',
    'Office 365': 'Microsoft productivity suite including Word, Excel, Outlook, and Teams.',
    'Documentation and Assessment Support': 'Experience creating technical documentation, supporting audits, and assisting with enterprise-level system assessments.',
    'Microsoft Access': 'A relational database management tool used for building and managing structured data applications.',
    'Active Directory': 'Microsoft directory service used for user authentication, permissions management, and enterprise identity control.',
    'Microsoft Azure': 'Microsoft’s cloud computing platform used for hosting applications, managing virtual machines, and cloud-based services.',
    'C#': 'An object-oriented language developed by Microsoft for building applications within the .NET framework.'
  };

  function getSkillDescription(skill) {
    return descriptions[skill] || 'Description not available.';
  }

  if (skillModal && skillTitle && skillDescription) {
    skillItems.forEach(item => {
      item.addEventListener('click', () => {
        const skillName = item.getAttribute('data-skill');
        skillTitle.textContent = skillName;
        skillDescription.textContent = getSkillDescription(skillName);
        skillModal.style.display = 'block';
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

  const imgModal = document.getElementById("image-modal");
  const imgModalImg = document.getElementById("modal-img");
  const melissaName = document.getElementById("melissa-name");
  const imgCloseBtn = document.querySelector("#image-modal .close-btn");

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
