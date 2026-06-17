// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollAnimations();
    initCounter();
    updateCartBadge();
    calculatePrice();
    
    // Protection against inspection
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('🚫 Cópia não autorizada. Direitos reservados.');
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            alert('🚫 Inspeção não autorizada. Direitos reservados.');
        }
    });
});

// Particle Background
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    
    const colors = ['#8B00FF', '#FF00FF', '#00D4FF'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Counter Animation
function initCounter() {
    const counter = document.getElementById('soldCounter');
    const target = Math.floor(Math.random() * 5000) + 10000; // Random between 10000-15000
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 20);
}

// Cart Functions
function addToCart(platform, quantity, price) {
    const item = {
        id: Date.now(),
        platform,
        quantity,
        price
    };
    
    cart.push(item);
    saveCart();
    updateCartBadge();
    
    // Show notification
    showNotification(`${platform} - ${quantity.toLocaleString('pt-BR')} seguidores adicionado ao carrinho!`);
}

function addCalculatedToCart() {
    const quantity = parseInt(document.getElementById('calcQuantity').value);
    const platform = document.getElementById('calcPlatform').value;
    const price = parseFloat(document.getElementById('calculatedPrice').textContent.replace('R$ ', '').replace(',', '.'));
    
    const platformNames = {
        'instagram': 'Instagram',
        'tiktok': 'TikTok',
        'youtube': 'YouTube',
        'twitter': 'Twitter/X',
        'kwai': 'Kwai'
    };
    
    addToCart(platformNames[platform], quantity, price);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartBadge();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartBadge();
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    badge.textContent = cart.length;
    
    if (cart.length > 0) {
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function openCart() {
    document.getElementById('cartModal').classList.add('active');
    renderCart();
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalContainer = document.getElementById('cartTotal');
    const actionsContainer = document.getElementById('cartActions');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-center py-8">Seu carrinho está vazio</p>';
        totalContainer.classList.add('hidden');
        actionsContainer.classList.add('hidden');
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center p-4 bg-dark/50 rounded-lg">
            <div>
                <p class="font-bold">${item.platform}</p>
                <p class="text-sm text-gray-400">${item.quantity.toLocaleString('pt-BR')} seguidores</p>
            </div>
            <div class="flex items-center gap-4">
                <p class="text-accent font-bold">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300">✕</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalPrice').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    
    totalContainer.classList.remove('hidden');
    actionsContainer.classList.remove('hidden');
}

// Price Calculator
function calculatePrice() {
    const quantity = parseInt(document.getElementById('calcQuantity').value) || 1000;
    const platform = document.getElementById('calcPlatform').value;
    
    const basePrices = {
        'instagram': 0.0159,  // R$ 15.90 per 1000
        'tiktok': 0.0199,     // R$ 19.90 per 1000
        'youtube': 0.149,     // R$ 14.90 per 100 (subscribers)
        'twitter': 0.0258,    // R$ 12.90 per 500
        'kwai': 0.0099        // R$ 9.90 per 1000
    };
    
    const multipliers = {
        'youtube': 100,       // YouTube is per 100
        'twitter': 500        // Twitter is per 500
    };
    
    const baseUnit = multipliers[platform] || 1000;
    const basePrice = basePrices[platform];
    
    // Calculate base price
    let price = (quantity / baseUnit) * basePrice;
    
    // Apply discount for larger quantities
    if (quantity >= 10000) {
        price *= 0.85; // 15% discount
    } else if (quantity >= 5000) {
        price *= 0.90; // 10% discount
    } else if (quantity >= 2500) {
        price *= 0.95; // 5% discount
    }
    
    document.getElementById('calculatedPrice').textContent = 'R$ ' + price.toFixed(2).replace('.', ',');
}

// WhatsApp Integration
function sendWhatsApp() {
    const phone = '5511999999999'; // Replace with your WhatsApp number
    
    if (cart.length > 0) {
        checkoutWhatsApp();
        return;
    }
    
    const message = `Olá! 👋\n\nGostaria de comprar seguidores para minhas redes sociais.\n\nPoderia me ajudar?`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const phone = '5511999999999'; // Replace with your WhatsApp number
    
    let message = `🛒 *NOVO PEDIDO*\n\n`;
    message += `*ITENS:*\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.platform} - ${item.quantity.toLocaleString('pt-BR')} seguidores\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\n*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    message += `💳 *FORMA DE PAGAMENTO:*\n`;
    message += `Pix: 000.000.000-00\n`;
    message += `Banco: Seu Banco\n\n`;
    message += `Após o pagamento, envie o comprovante e informaremos o usuário/perfil para entrega.\n\n`;
    message += `⚡ Entrega em 24-72 horas após confirmação!`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Save order to admin
    saveOrderToAdmin(total);
    
    // Clear cart
    clearCart();
    closeCart();
}

function saveOrderToAdmin(total) {
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    
    const order = {
        id: Date.now().toString(),
        client: 'Cliente WhatsApp',
        phone: '5511999999999',
        service: cart.map(item => item.platform).join(', '),
        value: total,
        quantity: cart.reduce((sum, item) => sum + item.quantity, 0),
        profile: '',
        status: 'pending',
        date: new Date().toISOString()
    };
    
    orders.unshift(order);
    localStorage.setItem('adminOrders', JSON.stringify(orders));
}

// FAQ Accordion
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('span:last-child');
    
    answer.classList.toggle('active');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
}

// Mobile Menu
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// Form Submission
function submitForm(event) {
    event.preventDefault();
    
    const phone = '5511999999999'; // Replace with your WhatsApp number
    const message = `📩 *NOVA MENSAGEM DO SITE*\n\n`;
    message += `Olá! Entrei em contato pelo site.\n\n`;
    message += `Aguardo retorno!`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Mensagem enviada! Redirecionando para o WhatsApp...');
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="text-2xl">✅</span>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Close modal on outside click
document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCart();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCart();
        document.getElementById('mobileMenu').classList.remove('active');
    }
});
