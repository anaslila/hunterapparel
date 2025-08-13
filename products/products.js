// Indian-themed product data with INR pricing
const products = [
    {
        id: 1,
        name: "Classic Kurta Set",
        price: 1299,
        originalPrice: 1699,
        image: "https://images.unsplash.com/photo-1506629905607-45eb3e96147a?w=400",
        category: "men",
        rating: 4.5,
        badge: "Sale"
    },
    {
        id: 2,
        name: "Elegant Saree Collection",
        price: 2499,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
        category: "women",
        rating: 4.8,
        badge: "New"
    },
    {
        id: 3,
        name: "Designer Sherwani",
        price: 4999,
        originalPrice: 6499,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        category: "men",
        rating: 4.7,
        badge: "Premium"
    },
    {
        id: 4,
        name: "Traditional Jhumkas",
        price: 899,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        category: "accessories",
        rating: 4.6,
        badge: null
    },
    {
        id: 5,
        name: "Cotton Casual Shirt", 
        price: 799,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "men",
        rating: 4.4,
        badge: "Sale"
    },
    {
        id: 6,
        name: "Anarkali Dress",
        price: 1899,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276ff8c2?w=400",
        category: "women",
        rating: 4.3,
        badge: null
    },
    {
        id: 7,
        name: "Leather Mojaris",
        price: 1599,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        category: "footwear",
        rating: 4.5,
        badge: "Trending"
    },
    {
        id: 8,
        name: "Silk Dupatta",
        price: 699,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
        category: "accessories",
        rating: 4.2,
        badge: null
    },
    {
        id: 9,
        name: "Formal Blazer",
        price: 2299,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1507679799987-c73c94d1ad23?w=400",
        category: "men",
        rating: 4.6,
        badge: "Hot"
    },
    {
        id: 10,
        name: "Lehenga Choli",
        price: 3999,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
        category: "women",
        rating: 4.9,
        badge: "Designer"
    },
    {
        id: 11,
        name: "Kolhapuri Chappals",
        price: 899,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
        category: "footwear",
        rating: 4.3,
        badge: "Authentic"
    },
    {
        id: 12,
        name: "Statement Necklace",
        price: 1499,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        category: "accessories",
        rating: 4.7,
        badge: "Handcrafted"
    }
];

// Function to create product HTML
function createProductHTML(product) {
    const discountPercent = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    return `
        <div class="product-card ${product.category}" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                ${discountPercent > 0 ? `<span class="product-badge" style="top: 15px; right: 15px; left: auto; background: #e74c3c;">${discountPercent}% OFF</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
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
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Function to generate star ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Function to load products into the grid
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        // Add loading state
        productGrid.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading products...</div>';
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            productGrid.innerHTML = products.map(product => createProductHTML(product)).join('');
            
            // Add fade-in animation to products
            const productCards = productGrid.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 800);
    }
}

// Function to add new product
function addProduct(productData) {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    const newProduct = { ...productData, id: newId };
    products.push(newProduct);
    loadProducts();
    showMessage(`${productData.name} added to catalog!`, 'success');
}

// Function to remove product
function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        const productName = products[index].name;
        products.splice(index, 1);
        loadProducts();
        showMessage(`${productName} removed from catalog!`, 'success');
        
        // Remove from cart if exists
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        if (typeof updateCartUI === 'function') {
            updateCartUI();
        }
    }
}

// Function to update product
function updateProduct(productId, updates) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        products[index] = { ...products[index], ...updates };
        loadProducts();
        showMessage('Product updated successfully!', 'success');
    }
}

// Function to get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Function to search products
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

// Export functions for external use
window.addProduct = addProduct;
window.removeProduct = removeProduct;
window.updateProduct = updateProduct;
window.loadProducts = loadProducts;
window.getProductsByCategory = getProductsByCategory;
window.searchProducts = searchProducts;
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
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => message.style.transform = 'translateX(0)', 100);
        setTimeout(() => {
            message.style.transform = 'translateX(400px)';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    };
}
