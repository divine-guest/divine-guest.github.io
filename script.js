// === CURSOR GLOW ===
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// === BURGER (если нужен) ===
// добавить по желанию

// === FORM ===
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Заявка принята! Мы свяжемся с вами.');
    e.target.reset();
});

console.log('🔥 AI Solutions — КИСЛОТНЫЙ ПРОФИ');
