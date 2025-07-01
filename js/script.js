// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('nav')?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Smooth page transition (fade-out on link click)
document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, window.location.origin);

    const isSamePageAnchor =
        url.pathname === window.location.pathname && url.hash.startsWith('#');

    if (
        link.target !== '_blank' &&
        !link.href.includes('mailto:') &&
        !link.hasAttribute('download') &&
        !isSamePageAnchor &&
        url.origin === window.location.origin
    ) {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = link.href;
            }, 150);
        });
    }
});

// Fade-in effect on page load
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});