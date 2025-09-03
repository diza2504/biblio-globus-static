// Tour data with 24 destinations
const toursData = [
    {
        id: 1,
        name: "Турция, Анталья",
        image: "https://same-assets.com/biblio-globus/turkey.jpg",
        price: "от 35 000 ₽",
        nights: "7 ночей",
        rating: 4.5,
        type: "Пляжный отдых",
        description: "Прекрасные отели на берегу Средиземного моря с системой все включено",
        features: ["AI", "Пляж", "Анимация", "SPA"]
    },
    {
        id: 2,
        name: "Египет, Хургада",
        image: "https://same-assets.com/biblio-globus/egypt.jpg",
        price: "от 42 000 ₽",
        nights: "10 ночей",
        rating: 4.3,
        type: "Пляжный отдых",
        description: "Коралловые рифы Красного моря и первоклассные отели",
        features: ["AI", "Дайвинг", "Пляж", "Аквапарк"]
    },
    {
        id: 3,
        name: "ОАЭ, Дубай",
        image: "https://same-assets.com/biblio-globus/uae.jpg",
        price: "от 55 000 ₽",
        nights: "7 ночей",
        rating: 4.8,
        type: "Городской туризм",
        description: "Город будущего с роскошными отелями и торговыми центрами",
        features: ["BB", "Шоппинг", "Экскурсии", "Luxury"]
    },
    {
        id: 4,
        name: "Греция, Крит",
        image: "https://same-assets.com/biblio-globus/greece.jpg",
        price: "от 48 000 ₽",
        nights: "8 ночей",
        rating: 4.4,
        type: "Пляжный отдых",
        description: "Остров богов с кристально чистым морем и древней историей",
        features: ["HB", "Пляж", "История", "Природа"]
    },
    {
        id: 5,
        name: "Кипр, Айя-Напа",
        image: "https://same-assets.com/biblio-globus/cyprus.jpg",
        price: "от 52 000 ₽",
        nights: "9 ночей",
        rating: 4.6,
        type: "Пляжный отдых",
        description: "Молодежная столица Кипра с великолепными пляжами",
        features: ["AI", "Пляж", "Ночная жизнь", "Аквапарк"]
    },
    {
        id: 6,
        name: "Испания, Майорка",
        image: "https://same-assets.com/biblio-globus/spain.jpg",
        price: "от 58 000 ₽",
        nights: "7 ночей",
        rating: 4.7,
        type: "Пляжный отдых",
        description: "Жемчужина Балеарских островов с роскошными курортами",
        features: ["HB", "Пляж", "Гольф", "SPA"]
    },
    {
        id: 7,
        name: "Тунис, Хаммамет",
        image: "https://same-assets.com/biblio-globus/tunisia.jpg",
        price: "от 38 000 ₽",
        nights: "8 ночей",
        rating: 4.2,
        type: "Пляжный отдых",
        description: "Экзотическая Африка с французским шармом",
        features: ["AI", "Пляж", "Талассо", "История"]
    },
    {
        id: 8,
        name: "Италия, Римини",
        image: "https://same-assets.com/biblio-globus/italy.jpg",
        price: "от 65 000 ₽",
        nights: "7 ночей",
        rating: 4.5,
        type: "Пляжный отдых",
        description: "Адриатическое побережье с богатой историей и культурой",
        features: ["BB", "Пляж", "История", "Экскурсии"]
    },
    {
        id: 9,
        name: "Болгария, Солнечный берег",
        image: "https://same-assets.com/biblio-globus/bulgaria.jpg",
        price: "от 32 000 ₽",
        nights: "10 ночей",
        rating: 4.1,
        type: "Пляжный отдых",
        description: "Доступный отдых на Черном море с отличными отелями",
        features: ["AI", "Пляж", "Аквапарк", "Анимация"]
    },
    {
        id: 10,
        name: "Хорватия, Дубровник",
        image: "https://same-assets.com/biblio-globus/croatia.jpg",
        price: "от 72 000 ₽",
        nights: "8 ночей",
        rating: 4.8,
        type: "Экскурсионный",
        description: "Жемчужина Адриатики с средневековой архитектурой",
        features: ["BB", "История", "Природа", "UNESCO"]
    },
    {
        id: 11,
        name: "Черногория, Будва",
        image: "https://same-assets.com/biblio-globus/montenegro.jpg",
        price: "от 45 000 ₽",
        nights: "8 ночей",
        rating: 4.3,
        type: "Пляжный отдых",
        description: "Нетронутая природа Балкан и чистейшее море",
        features: ["HB", "Пляж", "Горы", "Природа"]
    },
    {
        id: 12,
        name: "Португалия, Лиссабон",
        image: "https://same-assets.com/biblio-globus/portugal.jpg",
        price: "от 68 000 ₽",
        nights: "7 ночей",
        rating: 4.6,
        type: "Городской туризм",
        description: "Колоритная столица с трамваями и портвейном",
        features: ["BB", "История", "Гастрономия", "Архитектура"]
    },
    {
        id: 13,
        name: "Таиланд, Пхукет",
        image: "https://same-assets.com/biblio-globus/thailand.jpg",
        price: "от 85 000 ₽",
        nights: "10 ночей",
        rating: 4.7,
        type: "Экзотика",
        description: "Тропический рай с белоснежными пляжами и тайским массажем",
        features: ["BB", "Пляж", "Экзотика", "SPA"]
    },
    {
        id: 14,
        name: "Мальдивы",
        image: "https://same-assets.com/biblio-globus/maldives.jpg",
        price: "от 150 000 ₽",
        nights: "7 ночей",
        rating: 4.9,
        type: "Luxury",
        description: "Элитный отдых в водных бунгало посреди океана",
        features: ["AI", "Luxury", "Дайвинг", "SPA"]
    },
    {
        id: 15,
        name: "Вьетнам, Нячанг",
        image: "https://same-assets.com/biblio-globus/vietnam.jpg",
        price: "от 78 000 ₽",
        nights: "11 ночей",
        rating: 4.4,
        type: "Экзотика",
        description: "Азиатская экзотика с французским наследием",
        features: ["BB", "Пляж", "Экзотика", "История"]
    },
    {
        id: 16,
        name: "Индонезия, Бали",
        image: "https://same-assets.com/biblio-globus/indonesia.jpg",
        price: "от 95 000 ₽",
        nights: "10 ночей",
        rating: 4.6,
        type: "Экзотика",
        description: "Остров богов с древними храмами и рисовыми террасами",
        features: ["BB", "Культура", "Природа", "SPA"]
    },
    {
        id: 17,
        name: "Франция, Ницца",
        image: "https://same-assets.com/biblio-globus/france.jpg",
        price: "от 85 000 ₽",
        nights: "6 ночей",
        rating: 4.8,
        type: "Городской туризм",
        description: "Лазурный берег и французская ривьера",
        features: ["BB", "Luxury", "Культура", "Гастрономия"]
    },
    {
        id: 18,
        name: "Германия, Берлин",
        image: "https://same-assets.com/biblio-globus/germany.jpg",
        price: "от 55 000 ₽",
        nights: "5 ночей",
        rating: 4.5,
        type: "Экскурсионный",
        description: "Столица с богатой историей и современной культурой",
        features: ["BB", "История", "Музеи", "Архитектура"]
    },
    {
        id: 19,
        name: "Австрия, Вена",
        image: "https://same-assets.com/biblio-globus/austria.jpg",
        price: "от 62 000 ₽",
        nights: "6 ночей",
        rating: 4.7,
        type: "Экскурсионный",
        description: "Имперская столица с великолепными дворцами",
        features: ["BB", "История", "Музыка", "Архитектура"]
    },
    {
        id: 20,
        name: "Чехия, Прага",
        image: "https://same-assets.com/biblio-globus/czech.jpg",
        price: "от 48 000 ₽",
        nights: "5 ночей",
        rating: 4.6,
        type: "Экскурсионный",
        description: "Золотая сотня башен и знаменитое чешское пиво",
        features: ["BB", "История", "Архитектура", "Гастрономия"]
    },
    {
        id: 21,
        name: "Венгрия, Будапешт",
        image: "https://same-assets.com/biblio-globus/hungary.jpg",
        price: "от 42 000 ₽",
        nights: "5 ночей",
        rating: 4.4,
        type: "Экскурсионный",
        description: "Жемчужина Дуная с термальными купальнями",
        features: ["BB", "История", "Термы", "Архитектура"]
    },
    {
        id: 22,
        name: "Польша, Краков",
        image: "https://same-assets.com/biblio-globus/poland.jpg",
        price: "от 38 000 ₽",
        nights: "5 ночей",
        rating: 4.3,
        type: "Экскурсионный",
        description: "Средневековый город с богатой историей",
        features: ["BB", "История", "UNESCO", "Архитектура"]
    },
    {
        id: 23,
        name: "Норвегия, Берген",
        image: "https://same-assets.com/biblio-globus/norway.jpg",
        price: "от 95 000 ₽",
        nights: "7 ночей",
        rating: 4.8,
        type: "Природа",
        description: "Ворота к фьордам и северное сияние",
        features: ["BB", "Природа", "Фьорды", "Круизы"]
    },
    {
        id: 24,
        name: "Исландия, Рейкьявик",
        image: "https://same-assets.com/biblio-globus/iceland.jpg",
        price: "от 108 000 ₽",
        nights: "6 ночей",
        rating: 4.7,
        type: "Природа",
        description: "Остров льда и огня с уникальными ландшафтами",
        features: ["BB", "Природа", "Гейзеры", "Северное сияние"]
    }
];

// DOM Elements
const toursGrid = document.getElementById('toursGrid');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchForm = document.querySelector('.tour-search');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderTours(toursData);
    initMobileMenu();
    initSearchForm();
    initAnimations();
    initDatePicker();
});

// Render tour cards
function renderTours(tours) {
    if (!toursGrid) return;

    toursGrid.innerHTML = '';

    tours.forEach((tour, index) => {
        const tourCard = createTourCard(tour);
        tourCard.style.animationDelay = `${index * 0.1}s`;
        tourCard.classList.add('fade-in');
        toursGrid.appendChild(tourCard);
    });
}

// Create individual tour card
function createTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.innerHTML = `
        <div class="tour-image">
            <img src="${tour.image}" alt="${tour.name}" loading="lazy">
            <div class="tour-price">${tour.price}</div>
        </div>
        <div class="tour-info">
            <h3>${tour.name}</h3>
            <div class="tour-details">
                <span>${tour.nights}</span>
                <span>${tour.type}</span>
            </div>
            <div class="tour-description">${tour.description}</div>
            <div class="tour-features">
                ${tour.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="tour-rating">
                ${generateStars(tour.rating)}
                <span>${tour.rating}</span>
            </div>
        </div>
    `;

    // Add click event
    card.addEventListener('click', () => {
        showTourDetails(tour);
    });

    return card;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }

    if (hasHalfStar) {
        stars += '☆';
    }

    return stars;
}

// Show tour details (modal simulation)
function showTourDetails(tour) {
    alert(`${tour.name}\n\n${tour.description}\n\nЦена: ${tour.price}\nДлительность: ${tour.nights}\nРейтинг: ${tour.rating}\n\nОсобенности: ${tour.features.join(', ')}`);
}

// Initialize mobile menu
function initMobileMenu() {
    if (!mobileMenuToggle || !navMenu) return;

    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');

        // Animate hamburger
        const spans = this.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (this.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
}

// Initialize search form
function initSearchForm() {
    if (!searchForm) return;

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const searchParams = {
            destination: formData.get('destination'),
            hotel: formData.get('hotel'),
            meal: formData.get('meal'),
            departure_date: formData.get('departure_date'),
            nights: formData.get('nights'),
            tourists: formData.get('tourists')
        };

        searchTours(searchParams);
    });

    // Real-time filtering
    const destinationSelect = searchForm.querySelector('select[name="destination"]');
    const hotelSelect = searchForm.querySelector('select[name="hotel"]');
    const mealSelect = searchForm.querySelector('select[name="meal"]');

    [destinationSelect, hotelSelect, mealSelect].forEach(select => {
        if (select) {
            select.addEventListener('change', function() {
                const formData = new FormData(searchForm);
                const searchParams = {
                    destination: formData.get('destination'),
                    hotel: formData.get('hotel'),
                    meal: formData.get('meal')
                };
                filterTours(searchParams);
            });
        }
    });
}

// Search tours
function searchTours(params) {
    showLoading();

    // Simulate API call
    setTimeout(() => {
        const filteredTours = filterToursData(params);
        renderTours(filteredTours);
        hideLoading();

        // Scroll to results
        if (toursGrid) {
            toursGrid.scrollIntoView({ behavior: 'smooth' });
        }
    }, 1000);
}

// Filter tours in real-time
function filterTours(params) {
    const filteredTours = filterToursData(params);
    renderTours(filteredTours);
}

// Filter tours data based on parameters
function filterToursData(params) {
    return toursData.filter(tour => {
        // Filter by destination
        if (params.destination) {
            const destinationMap = {
                'turkey': 'Турция',
                'egypt': 'Египет',
                'uae': 'ОАЭ',
                'greece': 'Греция',
                'cyprus': 'Кипр',
                'spain': 'Испания'
            };
            if (!tour.name.includes(destinationMap[params.destination])) {
                return false;
            }
        }

        // Filter by meal type
        if (params.meal) {
            const mealMap = {
                'bb': 'BB',
                'hb': 'HB',
                'fb': 'FB',
                'ai': 'AI'
            };
            if (!tour.features.includes(mealMap[params.meal])) {
                return false;
            }
        }

        return true;
    });
}

// Show loading animation
function showLoading() {
    if (toursGrid) {
        toursGrid.innerHTML = '<div class="loading-container" style="text-align: center; padding: 50px;"><div class="loading"></div><p style="margin-top: 20px;">Поиск туров...</p></div>';
    }
}

// Hide loading animation
function hideLoading() {
    // Loading will be hidden when tours are rendered
}

// Initialize animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.dubai-promo, .stats-widget, .latest-tours');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add smooth scroll to navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize date picker with minimum date
function initDatePicker() {
    const departureDateInput = document.querySelector('input[name="departure_date"]');
    if (departureDateInput) {
        // Set minimum date to today
        const today = new Date();
        const todayString = today.toISOString().split('T')[0];
        departureDateInput.min = todayString;

        // Set default date to one week from today
        const defaultDate = new Date(today);
        defaultDate.setDate(defaultDate.getDate() + 7);
        const defaultDateString = defaultDate.toISOString().split('T')[0];
        departureDateInput.value = defaultDateString;
    }
}

// Add scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// Dubai promo interaction
document.addEventListener('DOMContentLoaded', function() {
    const dubaiFruit = document.querySelector('.promo-btn');
    if (dubaiFruit) {
        dubaiFruit.addEventListener('click', function() {
            // Filter tours to show Dubai/UAE
            const dubaiTours = toursData.filter(tour => tour.name.includes('ОАЭ') || tour.name.includes('Дубай'));
            renderTours(dubaiTours);

            // Scroll to tours
            if (toursGrid) {
                toursGrid.scrollIntoView({ behavior: 'smooth' });
            }

            // Show notification
            showNotification('Показаны туры в Дубай и ОАЭ');
        });
    }
});

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add tour type filters
function addTourTypeFilters() {
    const centerContent = document.querySelector('.center-content');
    if (!centerContent) return;

    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'tour-filters';
    filtersContainer.style.cssText = `
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
        flex-wrap: wrap;
    `;

    const tourTypes = ['Все', 'Пляжный отдых', 'Экскурсионный', 'Городской туризм', 'Экзотика', 'Luxury', 'Природа'];

    tourTypes.forEach(type => {
        const filterBtn = document.createElement('button');
        filterBtn.className = 'filter-btn';
        filterBtn.textContent = type;
        filterBtn.style.cssText = `
            background: white;
            border: 2px solid #3498db;
            color: #3498db;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
        `;

        if (type === 'Все') {
            filterBtn.classList.add('active');
            filterBtn.style.background = '#3498db';
            filterBtn.style.color = 'white';
        }

        filterBtn.addEventListener('click', function() {
            // Remove active class from all buttons
            filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = 'white';
                btn.style.color = '#3498db';
            });

            // Add active class to clicked button
            this.classList.add('active');
            this.style.background = '#3498db';
            this.style.color = 'white';

            // Filter tours
            if (type === 'Все') {
                renderTours(toursData);
            } else {
                const filteredTours = toursData.filter(tour => tour.type === type);
                renderTours(filteredTours);
            }
        });

        filterBtn.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.background = '#ecf0f1';
            }
        });

        filterBtn.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = 'white';
            }
        });

        filtersContainer.appendChild(filterBtn);
    });

    centerContent.insertBefore(filtersContainer, centerContent.querySelector('h2').nextSibling);
}

// Initialize tour type filters after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addTourTypeFilters, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    }
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add error handling for image loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x200/3498db/ffffff?text=Изображение+не+найдено';
        });
    });
});
