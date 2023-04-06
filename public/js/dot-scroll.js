const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.offsetTop - 200; // offset -200 nahoru

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Get all sections and menu links
const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('.menu__link');

// Intersection Observer to detect section in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Get data-section value of current section
      const currentSection = entry.target.getAttribute('data-section');
      
      // Remove active class from all menu links
      menuLinks.forEach(link => link.classList.remove('menu__link--active'));
      
      // Add active class to corresponding menu link
      const activeLink = document.querySelector(`[data-target=${currentSection}]`);
      activeLink.classList.add('menu__link--active');
    }
  });
}, { threshold: 0.5 });

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});
