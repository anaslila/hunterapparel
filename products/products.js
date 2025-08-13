// Product data - Add or remove products here
const products = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "men",
        rating: 4.5,
        badge: "Sale"
    },
    {
        id: 2,
        name: "Elegant Summer Dress",
        price: 89.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
        category: "women",
        rating: 4.8,
        badge: "New"
    },
    {
        id: 3,
        name: "Premium Leather Jacket",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        category: "men",
        rating: 4.7,
        badge: "Hot"
    },
    {
        id: 4,
        name: "Designer Handbag",
        price: 129.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        category: "accessories",
        rating: 4.6,
        badge: null
    },
    {
        id: 5,
        name: "Casual Denim Jeans",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        category: "men",
        rating: 4.4,
        badge: "Sale"
    },
    {
        id: 6,
        name: "Floral Print Blouse",
        price: 45.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
        category: "women",
        rating: 4.3,
        badge: null
    }
];

// Function to create product HTML
function createProductHTML(product) {
    return `
        <div class="product-card ${product.category}" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span>(${product.rating})</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
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
        productGrid.innerHTML = products.map(product => createProductHTML(product)).join('');
    }
}

// Function to add product to cart (you can customize this)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} added to cart!`);
        // Add your cart logic here
        console.log('Added to cart:', product);
    }
}

// Function to add new product (call this to add products dynamically)
function addProduct(productData) {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    const newProduct = { ...productData, id: newId };
    products.push(newProduct);
    loadProducts();
}

// Function to remove product (call this to remove products)
function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        products.splice(index, 1);
        loadProducts();
    }
}

// Export functions for external use
window.addProduct = addProduct;
window.removeProduct = removeProduct;
window.loadProducts = loadProducts;
window.addToCart = addToCart;
