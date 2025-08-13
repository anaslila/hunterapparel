// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isSearchOpen = false;

// DOM elements
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');
const closeCart = document.querySelector('.close-cart');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartCount = document.querySelector('.cart-count');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    setupEventListeners();
    if (typeof loadProducts === 'function') {
        loadProducts();
    }
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchIcon.addEventListener('click', toggleSearch);
    searchInput.addEventListener('input', handleSearch);
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && isSearchOpen) {
            closeSearch();
        }
    });

    // Cart functionality
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    overlay.addEventListener('click', closeCartSidebar);

    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });

    // Product filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            filterProducts(filter);
        });
    });

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterProducts(category);
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            
            // Update filter buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            const targetBtn = document.querySelector(`[data-filter="${category}"]`);
            if (targetBtn) targetBtn.classList.add('active');
        });
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', handleContactForm);

    // Modal functionality
    setupModals();

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

// Search functionality
function toggleSearch() {
    if (isSearchOpen) {
        closeSearch();
    } else {
        openSearch();
    }
}

function openSearch() {
    searchInput.classList.add('active');
    searchInput.focus();
    isSearchOpen = true;
}

function closeSearch() {
    searchInput.classList.remove('active');
    searchInput.value = '';
    isSearchOpen = false;
    showAllProducts();
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const isVisible = productName.includes(searchTerm);
        card.style.display = isVisible ? 'block' : 'none';
    });

    // Update filter buttons
    if (searchTerm) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    }
}

function showAllProducts() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.display = 'block';
    });
}

// Cart functionality
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showMessage(`${product.name} added to cart!`, 'success');
    
    // Add animation to cart icon
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showMessage('Item removed from cart', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCountElement = document.querySelector('.cart-count');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        cartTotal.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: #e74c3c;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Product filtering
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

// Contact form
function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    
    showMessage(`Thank you ${name}! We'll get back to you soon.`, 'success');
    e.target.reset();
}

// Modal functionality
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    closeModals.forEach(close => {
        close.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Auth form submissions
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isLogin = form.closest('#loginModal');
            showMessage(isLogin ? 'Login successful!' : 'Account created successfully!', 'success');
            form.closest('.modal').classList.remove('active');
        });
    });
}

function showLogin() {
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('signupModal').classList.remove('active');
}

function showSignup() {
    document.getElementById('signupModal').classList.add('active');
    document.getElementById('loginModal').classList.remove('active');
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
}

// Show message function
function showMessage(text, type = 'success') {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    document.body.appendChild(message);
    
    setTimeout(() => message.classList.add('show'), 100);
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Checkout functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkout-btn')) {
        if (cart.length === 0) {
            showMessage('Your cart is empty!', 'error');
            return;
        }
        
        showMessage('Redirecting to checkout...', 'success');
        // Here you would typically redirect to a payment gateway
        setTimeout(() => {
            alert('This would redirect to payment gateway in a real application');
        }, 1000);
    }
});

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.showLogin = showLogin;
window.showSignup = showSignup;
