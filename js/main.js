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
});
