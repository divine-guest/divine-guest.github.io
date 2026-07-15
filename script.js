// === БУРГЕР-МЕНЮ ===
document.getElementById('burger').addEventListener('click', function () {
    const nav = document.querySelector('.nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#fff';
        nav.style.padding = '20px';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        nav.style.gap = '16px';
    }
});

// === ФОРМА ===
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Заявка отправлена! Я свяжусь с вами в ближайшее время.');
    this.reset();
});

console.log('🚀 AI Solutions | Внедрение ИИ в бизнес');
console.log('📞 Свяжитесь со мной для консультации');
