
// Script principal pour le portfolio de recherche
document.addEventListener('DOMContentLoaded', function() {
    
    // Publications tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const publicationSections = document.querySelectorAll('.publications-section');
    const sortDropdown = document.getElementById('sort-select');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-target');
                
                // Remove active class from all buttons and sections
                tabButtons.forEach(btn => btn.classList.remove('active'));
                publicationSections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked button and corresponding section
                button.classList.add('active');
                const targetSection = document.getElementById(target);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }
    
    // Sort functionality
    function sortPublications(order) {
        const activeSection = document.querySelector('.publications-section.active');
        if (!activeSection) return;

        const grid = activeSection.querySelector('.publications-grid');
        if (!grid) return;

        const articles = Array.from(grid.querySelectorAll('.publication-card'));
        // If there are no articles, keep placeholder content intact
        if (articles.length === 0) return;

        articles.sort((a, b) => {
            const yearA = parseInt(a.getAttribute('data-year'));
            const yearB = parseInt(b.getAttribute('data-year'));
            return order === 'newest' ? yearB - yearA : yearA - yearB;
        });

        // Clear only article cards; preserve other nodes (e.g., placeholders)
        grid.querySelectorAll('.publication-card').forEach(card => card.remove());
        articles.forEach(article => grid.appendChild(article));
    }
    
    // Sort dropdown change handler
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            sortPublications(e.target.value);
        });
        
        // Initial sort - default to latest research
        sortPublications('newest');
    }
    
    // Initialize Interns Carousel
    if (document.querySelector('.internsSwiper')) {
        const internsSwiper = new Swiper('.internsSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.intern-nav-next',
                prevEl: '.intern-nav-prev',
            },
            pagination: {
                el: '.intern-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    centeredSlides: false,
                }
            },
            effect: 'slide',
            speed: 500,
            grabCursor: true,
        });
    }
    // Navigation responsive
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Scroll behavior for minimized navigation
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('navbar-minimized');
        } else {
            header.classList.remove('navbar-minimized');
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile navigation icon functionality
    const mobileNavIcon = document.getElementById('mobile-nav-icon');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    
    if (mobileNavIcon && mobileNavOverlay) {
        mobileNavIcon.addEventListener('click', function() {
            mobileNavOverlay.classList.add('active');
            const icon = mobileNavIcon.querySelector('i');
            icon.className = 'fas fa-times';
        });

        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === mobileNavOverlay) {
                mobileNavOverlay.classList.remove('active');
                const icon = mobileNavIcon.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });

        // Close mobile nav when clicking on menu items
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNavOverlay.classList.remove('active');
                const icon = mobileNavIcon.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }
    
    // Marquer le lien actif dans la navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.endsWith(href)) {
            link.classList.add('active');
        }
    });
    
    
    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une fois au chargement
    
    // Formulaire de contact avec Formspree
    // Le formulaire est maintenant géré par Formspree, donc nous n'avons plus besoin
    // d'empêcher la soumission par défaut
});



// document.getElementById('nav-toggle').addEventListener('click', () => {
//     const menu = document.getElementById('nav-menu');
//     menu.classList.toggle('open');

//     /* update accessibility state */
//     const expanded = menu.classList.contains('open');
//     document.getElementById('nav-toggle')
//             .setAttribute('aria-expanded', expanded);
// });
document.addEventListener('DOMContentLoaded', () => {
    /* Slider des publications */
    const pubsSwiper = new Swiper('.publicationsSwiper', {
        loop: true,
        slidesPerView: 1,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev' },
        /* Exemple : 2 slides dès 768 px */
        breakpoints: { 768: { slidesPerView: 2 } }
    });

    /* Menu hamburger */
    const toggle = document.getElementById('nav-toggle');
    const menu   = document.getElementById('nav-menu');

    if (toggle && menu) {    // évite « null »
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded',
                                menu.classList.contains('open'));
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.articlesSwiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640:  { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 24 },
      1280: { slidesPerView: 3, spaceBetween: 32 },
    },
  });
});

window.addEventListener('DOMContentLoaded', () => {
  new Swiper('.conferencesSwiper', {
    loop: true,
    navigation: {
      nextEl: '.conferences-carousel .swiper-button-next',
      prevEl: '.conferences-carousel .swiper-button-prev',
    },
    pagination: {
      el: '.conferences-carousel .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640:  { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 24 },
      1280: { slidesPerView: 3, spaceBetween: 32 },
    },
  });
});
