// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Product filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const productGrid = document.getElementById('productGrid');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Filter products
        const filter = btn.getAttribute('data-filter');
        filterProducts(filter);
    });
});

function filterProducts(filter) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (filter === 'all' || product.classList.contains(filter)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadProducts === 'function') {
        loadProducts();
    }
});
