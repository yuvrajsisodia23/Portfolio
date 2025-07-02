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

//screen loader
document.addEventListener("DOMContentLoaded", () => {
const loader = document.getElementById("loader");
const percentage = document.getElementById("loading-percentage");
const mainContent = document.getElementById("main-content");

// Check if loader has already been shown globally
const hasLoaded = localStorage.getItem("hasLoadedOnce");

if (!hasLoaded) {
    let count = 0;
    const speed = 7;

    const interval = setInterval(() => {
    if (count >= 100) {
        clearInterval(interval);
        loader.classList.add("hidden");
        mainContent.classList.remove("opacity-0");
        localStorage.setItem("hasLoadedOnce", "true"); // Mark loader as shown
    } else {
        count++;
        percentage.textContent = `${count}%`;
    }
    }, speed);
} else {
    // Skip loader entirely
    loader.classList.add("hidden");
    mainContent.classList.remove("opacity-0");
}
});

//animations
document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", e => {
    if (!link.classList.contains("no-transition")) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => window.location = link.href, 300);
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-up");
    }
  });
});
document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));