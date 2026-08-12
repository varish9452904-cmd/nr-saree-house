// ===========================
// Scroll Animation
// ===========================

const hiddenElements = document.querySelectorAll(
    '.featured, .why-us, .about-preview, .reviews, .cta, .faq, .instagram, .newsletter'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach((el) => {

    el.classList.add('hidden');
    observer.observe(el);

});


// ===========================
// Loader
// ===========================

window.addEventListener('load', () => {

    const loader = document.getElementById('loader');

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = '0';

            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);

        }, 1200);

    }

});


// ===========================
// Header Scroll
// ===========================

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});


// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

}


// ===========================
// Product Search
// ===========================

const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.card');

if (searchBox) {

    searchBox.addEventListener('keyup', function () {

        const value = this.value.toLowerCase();

        cards.forEach((card) => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }

        });

    });

}


// ===========================
// Category Filter
// ===========================

const categoryFilter = document.getElementById('categoryFilter');

if (categoryFilter) {

    categoryFilter.addEventListener('change', function () {

        const category = this.value;

        cards.forEach((card) => {

            if (
                category === 'all' ||
                card.dataset.category === category
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }

        });

    });

}


// ===========================
// Quick View Popup
// ===========================

const quickView = document.getElementById('quickView');
const closePopup = document.getElementById('closePopup');

const productButtons = document.querySelectorAll('.card .hero-btn');

if (quickView) {

    productButtons.forEach((button) => {

        button.addEventListener('click', function (e) {

            e.preventDefault();

            const card = this.closest('.card');

            if (!card) return;

            const image = card.querySelector('img');
            const title = card.querySelector('h3');
            const price = card.querySelector('h4');

            const popupImage = document.getElementById('popupImage');
            const popupTitle = document.getElementById('popupTitle');
            const popupPrice = document.getElementById('popupPrice');

            if (popupImage && image) {
                popupImage.src = image.src;
            }

            if (popupTitle && title) {
                popupTitle.innerText = title.innerText;
            }

            if (popupPrice && price) {
                popupPrice.innerText = price.innerText;
            }

            quickView.style.display = 'flex';

        });

    });

}


// Close popup

if (closePopup && quickView) {

    closePopup.addEventListener('click', () => {
        quickView.style.display = 'none';
    });

    window.addEventListener('click', (e) => {

        if (e.target === quickView) {
            quickView.style.display = 'none';
        }

    });

}


// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById('topBtn');

if (topBtn) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }

    });

    topBtn.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}


// ===========================
// Wishlist
// ===========================

document.querySelectorAll('.wishlist').forEach((heart) => {

    heart.addEventListener('click', function () {

        this.innerHTML =
            this.innerHTML === '♡' ? '♥' : '♡';

    });

});
