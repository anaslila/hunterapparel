// Premium Indian-themed product data with INR pricing and high-quality images
const products = [
    {
        id: 1,
        name: "Royal Silk Kurta Set",
        price: 2499,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1622543925917-763c34215146?w=600&q=80",
        category: "men",
        rating: 4.8,
        badge: "Premium",
        description: "Handwoven silk kurta with intricate embroidery"
    },
    {
        id: 2,
        name: "Designer Banarasi Saree",
        price: 4999,
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        category: "women",
        rating: 4.9,
        badge: "Bestseller",
        description: "Pure silk Banarasi saree with gold zari work"
    },
    {
        id: 3,
        name: "Heritage Sherwani",
        price: 8999,
        originalPrice: 12999,
        image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80",
        category: "men",
        rating: 4.7,
        badge: "Wedding Collection",
        description: "Regal sherwani with detailed craftsmanship"
    },
    {
        id: 4,
        name: "Kundan Jewelry Set",
        price: 3499,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
        category: "accessories",
        rating: 4.6,
        badge: "Handcrafted",
        description: "Traditional kundan necklace and earring set"
    },
    {
        id: 5,
        name: "Premium Cotton Kurta",
        price: 1299,
        originalPrice: 1899,
        image: "https://images.unsplash.com/photo-1506629905607-45eb3e96147a?w=600&q=80",
        category: "men",
        rating: 4.4,
        badge: "Sale",
        description: "Comfortable cotton kurta for daily wear"
    },
    {
        id: 6,
        name: "Elegant Anarkali Suit",
        price: 3999,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
        category: "women",
        rating: 4.5,
        badge: "New Arrival",
        description: "Flowing anarkali with delicate embroidery"
    },
    {
        id: 7,
        name: "Handcrafted Mojaris",
        price: 2499,
        originalPrice: 3299,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
        category: "footwear",
        rating: 4.3,
        badge: "Artisan Made",
        description: "Traditional leather mojaris with gold work"
    },
    {
        id: 8,
        name: "Silk Dupatta Collection",
        price: 1999,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
        category: "accessories",
        rating: 4.4,
        badge: null,
        description: "Pure silk dupatta with traditional motifs"
    },
    {
        id: 9,
        name: "Designer Blazer",
        price: 4499,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1507679799987-c73c94d1ad23?w=600&q=80",
        category: "men",
        rating: 4.6,
        badge: "Modern Classic",
        description: "Contemporary blazer with Indian touch"
    },
    {
        id: 10,
        name: "Bridal Lehenga Choli",
        price: 15999,
        originalPrice: 22999,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276ff8c2?w=600&q=80",
        category: "women",
        rating: 4.9,
        badge: "Bridal Collection",
        description: "Exquisite bridal lehenga with heavy embellishments"
    },
    {
        id: 11,
        name: "Kolhapuri Sandals",
        price: 1799,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
        category: "footwear",
        rating: 4.2,
        badge: "Authentic",
        description: "Genuine Kolhapuri chappals from Maharashtra"
    },
    {
        id: 12,
        name: "Pearl Necklace Set",
        price: 2999,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        category: "accessories",
        rating: 4.7,
        badge: "Elegant",
        description: "Classic pearl necklace with matching earrings"
    },
    {
        id: 13,
        name: "Festive Dhoti Kurta",
        price: 2199,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1622543925917-763c34215146?w=600&q=80",
        category: "men",
        rating: 4.5,
        badge: "Festival Special",
        description: "Traditional dhoti kurta set for festivals"
    },
    {
        id: 14,
        name: "Designer Palazzo Set",
        price: 2799,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
        category: "women",
        rating: 4.4,
        badge: "Trending",
        description: "Contemporary palazzo with embroidered kurti"
    },
    {
        id: 15,
        name: "Ethnic Sandals",
        price: 2299,
        originalPrice: 2899,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
        category: "footwear",
        rating: 4.1,
        badge: "Comfortable",
        description: "Stylish ethnic sandals with cushioned sole"
    },
    {
        id: 16,
        name: "Traditional Bangles Set",
        price: 899,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
        category: "accessories",
        rating: 4.3,
        badge: "Value Pack",
        description: "Set of 12 traditional metal bangles"
    },
    {
        id: 17,
        name: "Nehru Jacket",
        price: 1899,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1507679799987-c73c94d1ad23?w=600&q=80",
        category: "men",
        rating: 4.4,
        badge: "Classic",
        description: "Timeless Nehru jacket in premium fabric"
    },
    {
        id: 18,
        name: "Embroidered Kurti",
        price: 1599,
        originalPrice: 2199,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
        category: "women",
        rating: 4.6,
        badge: "Daily Wear",
        description: "Casual kurti with beautiful embroidery"
    },
    {
        id: 19,
        name: "Leather Juttis",
        price: 1999,
        originalPrice: 2699,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
        category: "footwear",
        rating: 4.5,
        badge: "Punjabi Style",
        description: "Authentic Punjabi juttis with mirror work"
    },
    {
        id: 20,
        name: "Oxidized Silver Jewelry",
        price: 1299,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        category: "accessories",
        rating: 4.2,
        badge: "Boho Chic",
        description: "Trendy oxidized silver jewelry set"
    }
];

// Enhanced product creation with better styling and functionality
function createProductHTML(product) {
    const discountPercent = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    const badgeClass = getBadgeClass(product.badge);

    return `
        <div class="product-card ${product.category}" data-id="${product.id}" data-name="${product.name.toLowerCase()}" data-price="${product.price}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="handleImageError(this, ${product.id})">
                ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
                ${discountPercent > 0 ? `<span class="product-badge discount-badge">${discountPercent}% OFF</span>` : ''}
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" data-product-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    `;
}

// Get badge class based on badge type
function getBadgeClass(badge) {
    const badgeClasses = {
        'Premium': 'premium-badge',
        'Bestseller': 'bestseller-badge',
        'Wedding Collection': 'wedding-badge',
        'Handcrafted': 'handcrafted-badge',
        'Sale': 'sale-badge',
        'New Arrival': 'new-badge',
        'Artisan Made': 'artisan-badge',
        'Modern Classic': 'modern-badge',
        'Bridal Collection': 'bridal-badge',
        'Authentic': 'authentic-badge',
        'Elegant': 'elegant-badge',
        'Festival Special': 'festival-badge',
        'Trending': 'trending-badge',
        'Comfortable': 'comfort-badge',
        'Value Pack': 'value-badge',
        'Classic': 'classic-badge',
        'Daily Wear': 'daily-badge',
        'Punjabi Style': 'punjabi-badge',
        'Boho Chic': 'boho-badge'
    };
    return badgeClasses[badge] || 'default-badge';
}

// Enhanced star generation with half stars
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Enhanced product loading with animation
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    // Show loading state
    productGrid.innerHTML = `
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading premium collection...</p>
        </div>
    `;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        productGrid.innerHTML = products.map(product => createProductHTML(product)).join('');
        
        // Add staggered fade-in animation
        const productCards = productGrid.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1200);
}

// Image error handling with fallback
function handleImageError(img, productId) {
    const fallbackImages = {
        'men': 'https://images.unsplash.com/photo-1506629905607-45eb3e96147a?w=600&q=80',
        'women': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80',
        'accessories': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
        'footwear': 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80'
    };
    
    const product = products.find(p => p.id === productId);
    if (product && fallbackImages[product.category]) {
        img.src = fallbackImages[product.category];
        img.alt = `${product.name} - Image not available`;
        console.warn(`Image failed to load for product: ${product.name}`);
    }
}

// Quick view functionality
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal quick-view-modal active';
    modal.innerHTML = `
        <div class="modal-content quick-view-content">
            <span class="close-modal">&times;</span>
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="quick-view-info">
                    <h2>${product.name}</h2>
                    <p class="quick-view-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="stars">${generateStars(product.rating)}</div>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>
                    <div class="quick-view-actions">
                        <button class="add-to-cart" onclick="addToCart(${product.id}); closeQuickView();">
                            <i class="fas fa-shopping-bag"></i>
                            Add to Cart
                        </button>
                        <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeQuickView());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeQuickView();
    });
}

function closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const index = wishlist.findIndex(item => item.id === productId);
    const wishlistBtns = document.querySelectorAll(`[onclick="toggleWishlist(${productId})"]`);
    
    if (index > -1) {
        // Remove from wishlist
        wishlist.splice(index, 1);
        wishlistBtns.forEach(btn => {
            btn.innerHTML = '<i class="far fa-heart"></i>';
            btn.style.color = '';
        });
        showMessage(`${product.name} removed from wishlist`, 'success');
    } else {
        // Add to wishlist
        wishlist.push(product);
        wishlistBtns.forEach(btn => {
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.style.color = '#e74c3c';
        });
        showMessage(`${product.name} added to wishlist`, 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    wishlist.forEach(item => {
        const wishlistBtns = document.querySelectorAll(`[onclick="toggleWishlist(${item.id})"]`);
        wishlistBtns.forEach(btn => {
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.style.color = '#e74c3c';
        });
    });
}

// Enhanced product management functions
function addProduct(productData) {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    const newProduct = { 
        id: newId,
        rating: 4.0,
        badge: null,
        description: 'New premium product',
        ...productData 
    };
    
    products.push(newProduct);
    loadProducts();
    showMessage(`${productData.name} added to catalog!`, 'success');
}

function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        const productName = products[index].name;
        products.splice(index, 1);
        loadProducts();
        showMessage(`${productName} removed from catalog!`, 'success');
        
        // Remove from cart and wishlist if exists
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        if (typeof updateCartUI === 'function') {
            updateCartUI();
        }
    }
}

function updateProduct(productId, updates) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        products[index] = { ...products[index], ...updates };
        loadProducts();
        showMessage('Product updated successfully!', 'success');
    }
}

// Advanced filtering and sorting
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function getProductsByPriceRange(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch (sortBy) {
        case 'price-low-high':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            break;
    }
    
    return sortedProducts;
}

function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        (product.badge && product.badge.toLowerCase().includes(searchTerm))
    );
}

// Product analytics
function getProductStats() {
    const stats = {
        total: products.length,
        categories: {},
        priceRange: {
            min: Math.min(...products.map(p => p.price)),
            max: Math.max(...products.map(p => p.price)),
            average: products.reduce((sum, p) => sum + p.price, 0) / products.length
        },
        averageRating: products.reduce((sum, p) => sum + p.rating, 0) / products.length,
        onSale: products.filter(p => p.originalPrice).length
    };
    
    products.forEach(product => {
        stats.categories[product.category] = (stats.categories[product.category] || 0) + 1;
    });
    
    return stats;
}

// Initialize wishlist UI on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        updateWishlistUI();
    }, 1500);
});

// Export functions for external use
window.addProduct = addProduct;
window.removeProduct = removeProduct;
window.updateProduct = updateProduct;
window.loadProducts = loadProducts;
window.getProductsByCategory = getProductsByCategory;
window.getProductsByPriceRange = getProductsByPriceRange;
window.sortProducts = sortProducts;
window.searchProducts = searchProducts;
window.getProductStats = getProductStats;
window.quickView = quickView;
window.closeQuickView = closeQuickView;
window.toggleWishlist = toggleWishlist;
window.handleImageError = handleImageError;
window.products = products;

// Show message function (if not already defined)
if (typeof showMessage === 'undefined') {
    window.showMessage = function(text, type = 'success') {
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
        
        message.style.cssText = `
            position: fixed;
            top: 120px;
            right: 30px;
            padding: 18px 30px;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            z-index: 3000;
            transform: translateX(450px);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 15px 50px rgba(0,0,0,0.15);
            font-size: 0.95rem;
            border-left: 4px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            gap: 10px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #27ae60, #2ecc71)' : 'linear-gradient(135deg, #e74c3c, #c0392b)'};
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => message.style.transform = 'translateX(0)', 100);
        setTimeout(() => {
            message.style.transform = 'translateX(450px)';
            setTimeout(() => message.remove(), 400);
        }, 4000);
    };
}

// Add CSS for quick view modal and product enhancements
const productStyles = document.createElement('style');
productStyles.textContent = `
    /* Product overlay styles */
    .product-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .product-card:hover .product-overlay {
        opacity: 1;
    }
    
    .quick-view-btn,
    .wishlist-btn {
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: rgba(255,255,255,0.9);
        color: var(--charcoal);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
    }
    
    .quick-view-btn:hover,
    .wishlist-btn:hover {
        background: var(--primary-gold);
        color: var(--luxury-black);
        transform: scale(1.1);
    }
    
    /* Product description */
    .product-description {
        font-size: 0.9rem;
        color: var(--medium-gray);
        margin-bottom: 15px;
        line-height: 1.4;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    /* Badge styles */
    .product-badge.discount-badge {
        top: 15px;
        right: 15px;
        left: auto;
        background: var(--error);
        color: white;
    }
    
    .product-badge.premium-badge { background: linear-gradient(45deg, #d4af37, #f4d03f); }
    .product-badge.bestseller-badge { background: linear-gradient(45deg, #e74c3c, #c0392b); }
    .product-badge.wedding-badge { background: linear-gradient(45deg, #9b59b6, #8e44ad); }
    .product-badge.handcrafted-badge { background: linear-gradient(45deg, #e67e22, #d35400); }
    .product-badge.sale-badge { background: linear-gradient(45deg, #e74c3c, #c0392b); }
    .product-badge.new-badge { background: linear-gradient(45deg, #27ae60, #2ecc71); }
    .product-badge.artisan-badge { background: linear-gradient(45deg, #f39c12, #e67e22); }
    .product-badge.modern-badge { background: linear-gradient(45deg, #34495e, #2c3e50); }
    .product-badge.bridal-badge { background: linear-gradient(45deg, #e91e63, #ad1457); }
    .product-badge.authentic-badge { background: linear-gradient(45deg, #795548, #5d4037); }
    .product-badge.elegant-badge { background: linear-gradient(45deg, #607d8b, #455a64); }
    .product-badge.festival-badge { background: linear-gradient(45deg, #ff5722, #e64a19); }
    .product-badge.trending-badge { background: linear-gradient(45deg, #ff9800, #f57c00); }
    .product-badge.comfort-badge { background: linear-gradient(45deg, #4caf50, #388e3c); }
    .product-badge.value-badge { background: linear-gradient(45deg, #2196f3, #1976d2); }
    .product-badge.classic-badge { background: linear-gradient(45deg, #9e9e9e, #616161); }
    .product-badge.daily-badge { background: linear-gradient(45deg, #00bcd4, #0097a7); }
    .product-badge.punjabi-badge { background: linear-gradient(45deg, #ff7043, #f4511e); }
    .product-badge.boho-badge { background: linear-gradient(45deg, #8bc34a, #689f38); }
    
    /* Quick view modal */
    .quick-view-modal .modal-content {
        max-width: 900px;
        width: 90%;
    }
    
    .quick-view-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        align-items: center;
    }
    
    .quick-view-image img {
        width: 100%;
        border-radius: 12px;
        box-shadow: var(--shadow-medium);
    }
    
    .quick-view-info h2 {
        font-size: 2rem;
        margin-bottom: 15px;
        color: var(--luxury-black);
        font-weight: 700;
    }
    
    .quick-view-description {
        font-size: 1.1rem;
        color: var(--medium-gray);
        line-height: 1.6;
        margin-bottom: 20px;
    }
    
    .quick-view-actions {
        display: flex;
        gap: 15px;
        margin-top: 30px;
    }
    
    .quick-view-actions .add-to-cart {
        flex: 1;
    }
    
    .quick-view-actions .wishlist-btn {
        width: 50px;
        height: 50px;
        border-radius: 12px;
    }
    
    @media (max-width: 768px) {
        .quick-view-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .quick-view-info h2 {
            font-size: 1.5rem;
        }
    }
`;

document.head.appendChild(productStyles);

console.log('🎨 Premium Products Loaded - Hunter Apparel Collection Ready!');
