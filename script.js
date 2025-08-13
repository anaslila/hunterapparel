// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let appliedPromo = JSON.parse(localStorage.getItem('appliedPromo')) || null;
let isSearchOpen = false;
let searchTimeout;

// DOM elements
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchDropdown = document.getElementById('searchDropdown');
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
    updatePromoUI();
    setupEventListeners();
    if (typeof loadProducts === 'function') {
        loadProducts();
    }
    setupIntersectionObserver();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchIcon.addEventListener('click', toggleSearch);
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', handleSearchKeydown);
    
    // Close search when clicking outside
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
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

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

    // View toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            toggleView(btn.dataset.view);
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
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }

    // Modal functionality
    setupModals();

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Promo code functionality
    setupPromoCodeListeners();
}

// Enhanced Search functionality
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
    searchDropdown.classList.remove('active');
    searchInput.value = '';
    isSearchOpen = false;
    showAllProducts();
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    // Clear previous timeout
    clearTimeout(searchTimeout);
    
    // Debounce search
    searchTimeout = setTimeout(() => {
        if (searchTerm.length > 0) {
            performSearch(searchTerm);
            showSearchDropdown(searchTerm);
        } else {
            hideSearchDropdown();
            showAllProducts();
        }
    }, 300);
}

function performSearch(searchTerm) {
    const productCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const isVisible = productName.includes(searchTerm);
        card.style.display = isVisible ? 'block' : 'none';
        if (isVisible) visibleCount++;
    });

    // Update filter buttons
    if (searchTerm) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    }

    // Show no results message if needed
    if (visibleCount === 0) {
        showNoResultsMessage(searchTerm);
    } else {
        hideNoResultsMessage();
    }
}

function showSearchDropdown(searchTerm) {
    if (!searchTerm || typeof products === 'undefined') return;
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    ).slice(0, 5); // Limit to 5 suggestions

    if (filteredProducts.length > 0) {
        searchDropdown.innerHTML = filteredProducts.map(product => `
            <div class="search-item" onclick="selectProduct(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="search-item-info">
                    <h4>${product.name}</h4>
                    <p>₹${product.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        `).join('');
        searchDropdown.classList.add('active');
    } else {
        hideSearchDropdown();
    }
}

function hideSearchDropdown() {
    searchDropdown.classList.remove('active');
}

function selectProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Scroll to product
        const productCard = document.querySelector(`[data-id="${productId}"]`);
        if (productCard) {
            productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight the product briefly
            productCard.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
            setTimeout(() => {
                productCard.style.boxShadow = '';
            }, 2000);
        }
        closeSearch();
    }
}

function handleSearchKeydown(e) {
    if (e.key === 'Escape') {
        closeSearch();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        const firstSuggestion = searchDropdown.querySelector('.search-item');
        if (firstSuggestion) {
            firstSuggestion.click();
        }
    }
}

function showAllProducts() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.display = 'block';
    });
    hideNoResultsMessage();
}

function showNoResultsMessage(searchTerm) {
    const productGrid = document.getElementById('productGrid');
    let noResultsMsg = document.querySelector('.no-results');
    
    if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.className = 'no-results';
        noResultsMsg.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--medium-gray);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>No products found for "${searchTerm}"</h3>
                <p>Try adjusting your search or browse our categories</p>
            </div>
        `;
        productGrid.appendChild(noResultsMsg);
    }
}

function hideNoResultsMessage() {
    const noResultsMsg = document.querySelector('.no-results');
    if (noResultsMsg) {
        noResultsMsg.remove();
    }
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
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);

    // Add to cart button animation
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    button.style.background = 'var(--success)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 1500);
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
        showMessage(`${item.name} removed from cart`, 'success');
    }
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
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const cartDiscount = document.getElementById('cartDiscount');
    const discountRow = document.getElementById('discountRow');
    const shippingCost = document.getElementById('shippingCost');
    const shippingRow = document.getElementById('shippingRow');
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
                <p>Add some beautiful pieces to get started!</p>
            </div>
        `;
        cartSubtotal.textContent = '0';
        cartTotal.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toLocaleString('en-IN')}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span style="margin: 0 10px; font-weight: 600;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" 
                                style="margin-left: 15px; color: var(--error); border-color: var(--error);">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Calculate totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0;
        let shipping = subtotal >= 999 ? 0 : 50;
        
        // Apply promo discount
        if (appliedPromo) {
            if (appliedPromo.code === 'SAVE10' && subtotal >= 1500) {
                discount = subtotal * 0.1;
            } else if (appliedPromo.code === 'FREEDEL' && subtotal >= 999) {
                shipping = 0;
            } else if (appliedPromo.code === 'BUY2GET1') {
                // Calculate buy 2 get 1 free discount
                const sortedItems = [...cart].sort((a, b) => a.price - b.price);
                let freeItems = 0;
                let totalQty = 0;
                
                for (let item of sortedItems) {
                    totalQty += item.quantity;
                    if (totalQty >= 3) {
                        freeItems += Math.floor(totalQty / 3);
                        discount += item.price * Math.floor(totalQty / 3);
                        break;
                    }
                }
            }
        }
        
        const total = subtotal - discount + shipping;
        
        cartSubtotal.textContent = subtotal.toFixed(2);
        cartTotal.textContent = Math.max(0, total).toFixed(2);
        
        // Show/hide discount row
        if (discount > 0) {
            cartDiscount.textContent = discount.toFixed(2);
            discountRow.style.display = 'flex';
        } else {
            discountRow.style.display = 'none';
        }
        
        // Update shipping display
        shippingCost.textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
        if (subtotal >= 999) {
            shippingCost.innerHTML = '<span style="color: var(--success);">Free</span>';
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Promo Code System
function setupPromoCodeListeners() {
    const promoButtons = document.querySelectorAll('.apply-promo');
    promoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const promoItem = this.closest('.promo-item');
            const code = promoItem.dataset.code;
            const minAmount = parseInt(promoItem.dataset.min);
            applyPromo(code, minAmount);
        });
    });
}

function applyPromo(code, minAmount) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (subtotal < minAmount && minAmount > 0) {
        showMessage(`Minimum order of ₹${minAmount} required for this offer`, 'error');
        return;
    }
    
    appliedPromo = { code, minAmount };
    localStorage.setItem('appliedPromo', JSON.stringify(appliedPromo));
    
    updateCartUI();
    updatePromoUI();
    
    const promoNames = {
        'BUY2GET1': 'Buy 2 Get 1 Free',
        'SAVE10': '10% Discount',
        'FREEDEL': 'Free Delivery'
    };
    
    showMessage(`${promoNames[code]} applied successfully!`, 'success');
}

function removePromo() {
    appliedPromo = null;
    localStorage.removeItem('appliedPromo');
    updateCartUI();
    updatePromoUI();
    showMessage('Promo code removed', 'success');
}

function updatePromoUI() {
    const appliedPromoElement = document.getElementById('appliedPromo');
    const appliedPromoCode = document.getElementById('appliedPromoCode');
    const promoButtons = document.querySelectorAll('.apply-promo');
    
    if (appliedPromo) {
        appliedPromoElement.style.display = 'block';
        appliedPromoCode.textContent = appliedPromo.code;
        
        // Disable other promo buttons
        promoButtons.forEach(btn => {
            const itemCode = btn.closest('.promo-item').dataset.code;
            if (itemCode !== appliedPromo.code) {
                btn.disabled = true;
                btn.textContent = 'Active';
                btn.style.opacity = '0.5';
            } else {
                btn.textContent = 'Applied';
                btn.style.background = 'var(--success)';
            }
        });
    } else {
        appliedPromoElement.style.display = 'none';
        
        // Enable all promo buttons
        promoButtons.forEach(btn => {
            btn.disabled = false;
            btn.textContent = 'Apply';
            btn.style.opacity = '1';
            btn.style.background = '';
        });
    }
}

// WhatsApp Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    let shipping = subtotal >= 999 ? 0 : 50;
    
    // Calculate discount if promo applied
    if (appliedPromo) {
        if (appliedPromo.code === 'SAVE10' && subtotal >= 1500) {
            discount = subtotal * 0.1;
        } else if (appliedPromo.code === 'FREEDEL' && subtotal >= 999) {
            shipping = 0;
        } else if (appliedPromo.code === 'BUY2GET1') {
            // Calculate buy 2 get 1 free discount
            const sortedItems = [...cart].sort((a, b) => a.price - b.price);
            let totalQty = 0;
            for (let item of sortedItems) {
                totalQty += item.quantity;
                if (totalQty >= 3) {
                    discount += item.price * Math.floor(totalQty / 3);
                    break;
                }
            }
        }
    }
    
    const total = subtotal - discount + shipping;
    
    // Create WhatsApp message
    let message = "*🛍️ New Order from Hunter Apparel*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    message += "*📦 Order Details:*\n";
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Price: ₹${item.price.toLocaleString('en-IN')}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Subtotal: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
    });
    
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "*💰 Order Summary:*\n";
    message += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
    
    if (discount > 0) {
        message += `Discount (${appliedPromo.code}): -₹${discount.toLocaleString('en-IN')}\n`;
    }
    
    message += `Shipping: ${shipping === 0 ? 'Free' : '₹' + shipping}\n`;
    message += `*Total Amount: ₹${total.toLocaleString('en-IN')}*\n\n`;
    
    if (appliedPromo) {
        message += `🎉 *Applied Offer:* ${appliedPromo.code}\n\n`;
    }
    
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "*📍 Next Steps:*\n";
    message += "• Please confirm this order\n";
    message += "• Share your delivery address\n";
    message += "• Choose payment method\n\n";
    
    message += "*🌟 Hunter Apparel*\n";
    message += "_Exquisite Craftsmanship, Modern Grace_\n";
    message += "Thank you for choosing us! 🙏";
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918879706046?text=${encodedMessage}`;
    
    // Show loading message
    showMessage('Redirecting to WhatsApp...', 'success');
    
    // Open WhatsApp after a short delay
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        
        // Optional: Clear cart after successful redirect
        setTimeout(() => {
            if (confirm('Order sent! Would you like to clear your cart?')) {
                cart = [];
                appliedPromo = null;
                saveCart();
                localStorage.removeItem('appliedPromo');
                updateCartUI();
                updatePromoUI();
                closeCartSidebar();
            }
        }, 2000);
    }, 1000);
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

// Product filtering with animation
function filterProducts(filter) {
    const products = document.querySelectorAll('.product-card');
    
    // First hide all products
    products.forEach(product => {
        product.style.opacity = '0';
        product.style.transform = 'translateY(20px)';
    });
    
    setTimeout(() => {
        let visibleCount = 0;
        products.forEach((product, index) => {
            if (filter === 'all' || product.classList.contains(filter)) {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'translateY(0)';
                }, index * 50);
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });
        
        // Show no products message if needed
        if (visibleCount === 0) {
            showMessage('No products found in this category', 'error');
        }
    }, 200);
}

// View toggle functionality
function toggleView(view) {
    const productGrid = document.getElementById('productGrid');
    
    if (view === 'list') {
        productGrid.classList.add('list-view');
    } else {
        productGrid.classList.remove('list-view');
    }
}

// Contact form
function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Here you would typically send the data to your server
    console.log('Contact form submitted:', { name, email, phone, message });
    
    showMessage(`Thank you ${name}! We'll get back to you soon.`, 'success');
    e.target.reset();
}

// Newsletter form
function handleNewsletterForm(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your server
    console.log('Newsletter subscription:', email);
    
    showMessage('Successfully subscribed to our newsletter!', 'success');
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
            const formData = new FormData(form);
            
            if (isLogin) {
                console.log('Login attempt:', Object.fromEntries(formData));
                showMessage('Login successful! Welcome back.', 'success');
            } else {
                console.log('Signup attempt:', Object.fromEntries(formData));
                showMessage('Account created successfully! Welcome to Hunter Apparel.', 'success');
            }
            
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
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // ESC key to close modals/sidebar
    if (e.key === 'Escape') {
        // Close cart sidebar
        if (cartSidebar.classList.contains('active')) {
            closeCartSidebar();
        }
        
        // Close modals
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        
        // Close search
        if (isSearchOpen) {
            closeSearch();
        }
        
        // Close mobile menu
        if (navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
    
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (!isSearchOpen) {
            openSearch();
        }
    }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.product-card, .category-card, .feature, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Show message function
function showMessage(text, type = 'success') {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${text}</span>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => message.classList.add('show'), 100);
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 4000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization
const debouncedSearch = debounce(handleSearch, 300);
const throttledScroll = throttle(handleNavbarScroll, 100);

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.showLogin = showLogin;
window.showSignup = showSignup;
window.removePromo = removePromo;
window.proceedToCheckout = proceedToCheckout;
window.selectProduct = selectProduct;

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showMessage('Something went wrong. Please refresh the page.', 'error');
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
        }
    });
});

if (typeof PerformanceObserver !== 'undefined') {
    perfObserver.observe({ entryTypes: ['navigation'] });
}

// Animation CSS for intersection observer
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .list-view .product-card {
        display: flex !important;
        flex-direction: row;
        height: 200px;
        margin-bottom: 20px;
    }
    
    .list-view .product-image {
        width: 200px;
        flex-shrink: 0;
    }
    
    .list-view .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
    }
`;
document.head.appendChild(style);

console.log('🎉 Hunter Apparel - Premium Fashion Store Loaded Successfully!');
// Add this to your existing script.js file

// Enhanced cart item tracking
let cartItemStates = new Map(); // Track which items are in cart

// Modified addToCart function
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
    updateProductCardState(productId);
    showMessage(`${product.name} added to cart!`, 'success');
    
    // Add animation to cart icon
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// Update product card state to show quantity controls
function updateProductCardState(productId) {
    const productCard = document.querySelector(`[data-id="${productId}"]`);
    if (!productCard) return;
    
    const cartItem = cart.find(item => item.id === productId);
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    
    if (cartItem && cartItem.quantity > 0) {
        // Replace add to cart button with quantity controls
        addToCartBtn.outerHTML = `
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantityOnCard(${productId}, -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-display">${cartItem.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantityOnCard(${productId}, 1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
    } else {
        // Show add to cart button
        const quantityControl = productCard.querySelector('.quantity-control');
        if (quantityControl) {
            quantityControl.outerHTML = `
                <button class="add-to-cart" onclick="addToCart(${productId})" data-product-id="${productId}">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
            `;
        }
    }
}

// Update quantity from product card
function updateQuantityOnCard(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        updateProductCardState(productId);
    } else {
        saveCart();
        updateCartUI();
        updateProductCardState(productId);
    }
}

// Update all product cards state on page load
function updateAllProductCardStates() {
    cart.forEach(item => {
        updateProductCardState(item.id);
    });
}

// Modified removeFromCart function
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
        updateProductCardState(productId);
        showMessage(`${item.name} removed from cart`, 'success');
    }
}

// Promo section toggle functionality
function setupPromoToggle() {
    const promoHeader = document.querySelector('.promo-header');
    const promoSection = document.querySelector('.promo-section');
    
    if (promoHeader && promoSection) {
        promoHeader.addEventListener('click', () => {
            promoSection.classList.toggle('expanded');
        });
    }
}

// Enhanced search positioning
function adjustSearchPosition() {
    const searchInput = document.querySelector('.search-input');
    const searchDropdown = document.querySelector('.search-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (searchInput && searchDropdown) {
        const navbarRect = navbar.getBoundingClientRect();
        const rightOffset = Math.min(40, window.innerWidth - 380); // Ensure it doesn't go off screen
        
        searchInput.style.right = rightOffset + 'px';
        searchDropdown.style.right = rightOffset + 'px';
    }
}

// Call this on window resize
window.addEventListener('resize', adjustSearchPosition);

// Add to your existing DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updatePromoUI();
    setupEventListeners();
    setupPromoToggle();
    adjustSearchPosition();
    
    if (typeof loadProducts === 'function') {
        loadProducts();
        // Update product card states after products load
        setTimeout(() => {
            updateAllProductCardStates();
        }, 1500);
    }
    setupIntersectionObserver();
});

// Make new functions globally available
window.updateQuantityOnCard = updateQuantityOnCard;
window.updateProductCardState = updateProductCardState;
window.updateAllProductCardStates = updateAllProductCardStates;

