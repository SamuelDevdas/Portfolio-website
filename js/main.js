/**
 * main.js - TrueVine Insights Portfolio
 * Custom cursor, scroll animations, theme toggle, and mobile nav
 */

document.addEventListener('DOMContentLoaded', () => {
    const d = document.documentElement;
    const c = document.getElementById('c');
    const f = document.getElementById('f');

    // Custom cursor
    document.addEventListener('mousemove', e => {
        c.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        f.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    });

    // Intersection Observer for scroll animations
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
        }
    }), { threshold: .15 });

    document.querySelectorAll('.card,.skill,.item').forEach(el => io.observe(el));

    // Card tilt effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5;
            const y = (e.clientY - r.top) / r.height - .5;
            card.style.transform = `rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
        });
        card.addEventListener('mouseleave', () => card.style.transform = 'rotateX(0) rotateY(0)');
    });

    // Theme toggle
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('click', () => {
        const n = d.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        d.setAttribute('data-theme', n);
        localStorage.setItem('theme', n);
    });

    // Set initial theme
    d.setAttribute('data-theme', localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));

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

    // Contact Form Submission - Netlify Forms (AJAX for better UX)
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
            
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });
            
            if (response.ok) {
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
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formStatus.textContent = '✗ Failed to send. Please email me directly at SamuelDevdas01@gmail.com';
            formStatus.style.color = '#f87171';
            formStatus.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
});
