
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
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
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
    
    // Mobile dropdown navigation
    const mobileDropdown = document.querySelector('.mobile-nav-dropdown');
    if (mobileDropdown) {
        // Set default selected option based on current page
        Array.from(mobileDropdown.options).forEach(opt => {
            if (currentLocation.endsWith(opt.value)) {
                mobileDropdown.value = opt.value;
            }
        });

        mobileDropdown.addEventListener('change', (e) => {
            const target = e.target.value;
            if (target) window.location.href = target;
        });
    }
    
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
