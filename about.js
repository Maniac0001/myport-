document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.addEventListener('mouseover', () => {
      contentContainer.style.backgroundColor = '#3e3e3e';
    });
    contentContainer.addEventListener('mouseout', () => {
      contentContainer.style.backgroundColor = '#1b1b1b';
    });
  });
  

  // Scroll-triggered animation for skill items
document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll('.skill-item');

    function animateSkills() {
        skillItems.forEach(item => {
            const position = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 150) {
                item.classList.add('visible');
            }
        });
    }

    // Trigger skill animation when scrolling
    window.addEventListener('scroll', animateSkills);
    animateSkills();
});
