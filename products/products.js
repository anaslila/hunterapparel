// Premium Indian-themed product data with INR pricing and high-quality images
const products = [
    {
        id: 1,
        name: "Royal Silk Kurta Set",
        price: 2499,
        originalPrice: 3499,
        image: "data:image/jpeg;base64,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",
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
