// Navbar background and link color on scroll
        window.addEventListener('scroll', function () {
            const nav = document.getElementById('main-nav');
            const navLinks = document.getElementById('nav-links');
            const navToggle = document.getElementById('nav-toggle');
            if (window.scrollY > 10) {
                nav.classList.remove('bg-transparent');
                nav.classList.add('bg-white/75', 'backdrop-blur', 'shadow-md');
                navLinks.classList.remove('text-white');
                navLinks.classList.add('text-gray-800');
                navToggle.classList.remove('text-white');
                navToggle.classList.add('text-gray-800');
            } else {
                nav.classList.add('bg-transparent', 'backdrop-blur');
                nav.classList.remove('bg-white/75', 'shadow-md');
                navLinks.classList.add('text-white');
                navLinks.classList.remove('text-gray-800');
                navToggle.classList.add('text-white');
                navToggle.classList.remove('text-gray-800');
            }
        });
        // Mobile menu toggle
        document.getElementById('nav-toggle').onclick = function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        };

// swiper

const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 1000,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });

            // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
      // Split all elements with data-splitting into characters for animation
      Splitting();
      // Get references to animated elements
      const h2 = document.querySelector('#anime-para h2');
      const bar = document.querySelector('#anime-para .center-bar');
      const para = document.querySelector('#anime-para .fade-slide');
      // Sequence: after heading animation, animate bar, then show paragraph
      setTimeout(() => {
        // Animate the center bar
        
        // document.getElementById('anime-para').classList.add('bar-animate');
        setTimeout(() => {
          // Reveal and animate the paragraph lines
          para.style.visibility = 'visible';
          para.classList.add('fade-slide');
        }, 800); // Wait for bar animation
      }, 900); // Wait for heading scale animation
      // Hide paragraph initially
      para.style.visibility = 'hidden';
        });

// Initialize AOS (Animate On Scroll) library
         AOS.init();