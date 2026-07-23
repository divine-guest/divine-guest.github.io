// === ОБРАБОТКА ФОРМЫ ===
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Заявка принята! Мы свяжемся с вами.');
    this.reset();
});

// === ПРИВЕТСТВИЕ В КОНСОЛИ ===
console.log('🔥 AI Solutions — профессиональный сайт');
