// Script principal pour le portfolio de recherche
document.addEventListener('DOMContentLoaded', function() {
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
