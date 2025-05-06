// Sample product data since we don't have a real API
const productData = [
    { id: 1, name: "Imported Art Paper", image: "https://www.lalshah.com/web/image/product.product/1143/image_512?unique=471ed10" },
    { id: 2, name: "SBS", image: "https://4.imimg.com/data4/RM/OJ/MY-3737139/sbs-board-500x500.jpg" },
    { id: 3, name: "Art Card", image: "https://5.imimg.com/data5/SELLER/Default/2020/10/KL/GX/ON/39491090/250-gsm-white-art-card-paper.jpg" },
    { id: 4, name: "Carbonless", image: "https://m.media-amazon.com/images/I/41kPkc073TL._AC_UF1000,1000_QL80_.jpg" },
    { id: 5, name: "Bond", image: "https://m.media-amazon.com/images/I/61Tlg+IfTPL.jpg" },
    { id: 6, name: "DO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmACyAX0tZ1sJ3k7grJ3dbRDOL3c5Gp9F0Eg&s" },
    { id: 7, name: "White/colour ptg", image: "https://m.media-amazon.com/images/I/51OSe8iZ5SL.jpg" },
    { id: 8, name: "Sunshine", image: "https://5.imimg.com/data5/SELLER/Default/2023/9/340869948/GW/KX/BR/26647012/sunshine-a4-paper-sheet.jpg" },
    { id: 9, name: "Maplitho", image: "https://5.imimg.com/data5/YR/OJ/SC/SELLER-101599188/maplitho-paper-500x500.jpg" },
    { id: 10, name: "Butter Paper", image: "https://m.media-amazon.com/images/I/412R2PmTjJL.jpg" },
    { id: 11, name: "A4 Paper", image: "https://i.etsystatic.com/19232050/r/il/6233a6/3092080944/il_570xN.3092080944_mra0.jpg" },
    { id: 12, name: "Ivory board", image: "https://m.media-amazon.com/images/I/71pKGtUFTEL.jpg" },
    { id: 13, name: "Gum Sheet", image: "https://5.imimg.com/data5/FU/SH/EE/SELLER-42159720/20x30-inch-chromo-gum-sheet-500x500.jpg" },
    { id: 14, name: "Cordenons", image: "https://static.wixstatic.com/media/7e43e2_f7d22491663042ea9ef8c5e2096648c2~mv2.png/v1/fill/w_567,h_368,al_c/Cordenons%20Paper%20Mill.png" },
    { id: 15, name: "Galgo", image: "https://5.imimg.com/data5/FO/TS/MY-25554570/galgo-fine-coated-paper-500x500.jpg" },
    { id: 16, name: "Handmade Paper", image: "https://m.media-amazon.com/images/I/717HJ-MvaqL._AC_UF894,1000_QL80_.jpg" },
    { id: 17, name: "Metallic fine Papers", image: "https://www.rajpaperproducts.com/images/product-Metallic-Papers.jpg" },
    { id: 18, name: "Hi-Kote Premium Coated", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353224680/BW/FE/WH/3128320/art-card-paper.jpeg" },
    { id: 19, name: "Galge Digital Paper 12x18", image: "https://5.imimg.com/data5/DH/CD/II/SELLER-8100514/digital-500x500.jpeg" },
    { id: 20, name: "Galge Digital Paper 13x19", image: "https://5.imimg.com/data5/ES/CA/SW/SELLER-8100514/80g-700g-art-card-paper-sheet-gloss-500x500.jpg" },
    { id: 21, name: "Coloured", image: "https://m.media-amazon.com/images/I/612dp1+ubjL.jpg" },
    { id: 25, name: "Ivory", image: "https://rukminid2.flixcart.com/image/850/1000/xif0q/paper/r/p/e/lotus-a4-size-210-gsm-ivory-paper-50-sheets-white-unruled-original-imahae2rgvhyg7dz.jpeg?q=90&crop=false" },
];

// Function to check if we're on the inventory page
function isInventoryPage() {
    return window.location.pathname.includes('inventory.html');
}

// Function to load product data
function loadProducts() {
    if (!isInventoryPage()) return;

    const productsGrid = document.getElementById('products-grid');
    const loadingMessage = document.getElementById('loading-message');
    const errorMessage = document.getElementById('error-message');

    // Simulate API delay
    setTimeout(() => {
        try {
            loadingMessage.classList.add('hidden');

            // Display products
            productData.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h3 class="product-name">${product.name}</h3>
                `;

                productsGrid.appendChild(productCard);
            });
        } catch (error) {
            loadingMessage.classList.add('hidden');
            errorMessage.textContent = 'Error loading products. Please try again later.';
            errorMessage.classList.remove('hidden');
        }
    }, 800); // Simulate a delay of 800ms
}

// Dark mode functionality
function setupDarkModeToggle() {
    // Create toggle button
    const nav = document.querySelector('.nav-links');
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('title', 'Toggle dark mode');
    themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="moon" style="display: block;">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sun" style="display: none;">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    `;
    nav.appendChild(themeToggle);

    // Check for saved theme preference or system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        updateToggleIcons(true);
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateToggleIcons(isDarkMode);
    });

    // Function to update toggle icons
    function updateToggleIcons(isDarkMode) {
        const moonIcon = themeToggle.querySelector('.moon');
        const sunIcon = themeToggle.querySelector('.sun');

        if (isDarkMode) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }
}

// Add active class to current nav item
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to animate elements when they come into view
function setupScrollAnimations() {
    // Only run on browsers that support IntersectionObserver
    if (!('IntersectionObserver' in window)) return;

    const elements = document.querySelectorAll('.about-content, .about-values, .about-gallery, .team-section, .gallery-item, .team-member, .value-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-element');
                // Unobserve after animation is added
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
}

// Function to check if we're on the about page
function isAboutPage() {
    return window.location.pathname.includes('about.html');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavItem();
    setupDarkModeToggle();

    if (isInventoryPage()) {
        loadProducts();
    }

    if (isAboutPage()) {
        setupScrollAnimations();
    }
}); 
