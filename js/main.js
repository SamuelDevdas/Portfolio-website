/**
 * main.js - TrueVine Insights Portfolio
 * Custom cursor, scroll animations, and mobile nav
 */

document.addEventListener('DOMContentLoaded', () => {
    const c = document.getElementById('c');
    const f = document.getElementById('f');
    const mainNav = document.querySelector('nav');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ═══════════════════════════════════════════════════════════════════
    // Hero Slideshow - 4-Phase Visual Narrative
    // ROOTS → CLIMB → INTERTWINE → HARVEST
    // The TrueVine Metaphor: foundation → growth → partnership → results
    // ═══════════════════════════════════════════════════════════════════
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        const totalSlides = heroSlides.length;

        // Premium timing: 6 seconds per phase, 2.5s crossfade
        // Full narrative cycle: 24 seconds (6s × 4 phases)
        const slideInterval = 6000;

        function advanceSlide() {
            // Remove active from current
            heroSlides[currentSlide].classList.remove('active');

            // Move to next slide (loop back to start)
            currentSlide = (currentSlide + 1) % totalSlides;

            // Add active to new slide
            heroSlides[currentSlide].classList.add('active');
        }

        // Only auto-advance if user doesn't prefer reduced motion
        if (!prefersReducedMotion) {
            setInterval(advanceSlide, slideInterval);
        }
    }

    // Scroll-aware navigation background
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    mainNav.classList.add('scrolled');
                } else {
                    mainNav.classList.remove('scrolled');
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    // Custom cursor with throttling via requestAnimationFrame
    let cursorX = 0, cursorY = 0, rafPending = false;

    function updateCursor() {
        c.style.transform = `translate(${cursorX}px,${cursorY}px)`;
        f.style.transform = `translate(${cursorX}px,${cursorY}px)`;
        rafPending = false;
    }

    document.addEventListener('mousemove', e => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(updateCursor);
        }
    });

    // Intersection Observer for scroll animations
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
        }
    }), { threshold: .15 });

    document.querySelectorAll('.card,.skill,.item').forEach(el => io.observe(el));

    // Card tilt effect (skip if user prefers reduced motion or no hover support)
    if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.card').forEach(card => {
            let rect = null;

            card.addEventListener('mouseenter', () => {
                rect = card.getBoundingClientRect();
            });

            card.addEventListener('mousemove', e => {
                if (!rect) rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - .5;
                const y = (e.clientY - rect.top) / rect.height - .5;
                card.style.transform = `rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0) rotateY(0)';
                rect = null;
            });
        });
    }

    // Burger Menu Logic
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Contact Form Toggle
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const contactForm = document.getElementById('contactForm');
    
    toggleFormBtn.addEventListener('click', () => {
        contactForm.classList.toggle('open');
        toggleFormBtn.textContent = toggleFormBtn.textContent.includes('Book') ? 'Close' : 'Book a Free Consultation';
    });

    // Contact Form Submission - Web3Forms (AJAX for feedback)
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const formStatus = document.getElementById('formStatus');
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formStatus.style.display = 'none';
        
        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Success
                formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
                formStatus.style.color = '#4ade80';
                formStatus.style.display = 'block';
                contactForm.reset();
                
                // Close form after delay
                setTimeout(() => {
                    toggleFormBtn.click();
                    formStatus.style.display = 'none';
                }, 3000);
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formStatus.textContent = '✗ Failed to send. Please email me directly.';
            formStatus.style.color = '#f87171';
            formStatus.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
});
