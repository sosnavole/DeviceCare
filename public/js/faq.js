// Get all accordion buttons
const accordionBtns = document.querySelectorAll('.faq-accordion-btn');

// Loop through buttons and add click event listener
accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active class on button
    btn.classList.toggle('active');

    // Toggle active class on content
    const content = btn.nextElementSibling;
    content.classList.toggle('active');
  });
});
