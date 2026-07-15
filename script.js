/* === ОБЩИЕ === */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

:root {
    --primary: #6c63ff;
    --primary-dark: #5a52d5;
    --bg: #f8f9fe;
    --text: #1a1a2e;
    --card: #ffffff;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* === ШАПКА === */
header {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    padding: 16px 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    font-size: 32px;
}

.logo h1 {
    font-size: 24px;
    color: var(--primary);
}

nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

nav a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    transition: 0.3s;
}

nav a:hover {
    color: var(--primary);
}

.btn-nav {
    background: var(--primary);
    color: #fff !important;
    padding: 10px 25px;
    border-radius: 30px;
    transition: 0.3s;
}

.btn-nav:hover {
    background: var(--primary-dark);
    transform: scale(1.02);
}

/* === ГЛАВНЫЙ БАННЕР === */
.hero {
    padding: 80px 0 60px;
    background: linear-gradient(135deg, #f8f9fe 0%, #e8e9ff 100%);
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-text .badge {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
}

.hero-text h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-text .highlight {
    color: var(--primary);
}

.hero-text p {
    font-size: 20px;
    color: #555;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.btn-primary {
    background: var(--primary);
    color: #fff;
    padding: 14px 35px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
    display: inline-block;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(108, 99, 255, 0.3);
}

.btn-secondary {
    background: transparent;
    color: var(--text);
    padding: 14px 35px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid var(--primary);
    transition: 0.3s;
    display: inline-block;
}

.btn-secondary:hover {
    background: var(--primary);
    color: #fff;
}

.hero-stats {
    display: flex;
    gap: 30px;
    font-size: 14px;
    color: #555;
}

.demo-chat {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    overflow: hidden;
    max-width: 400px;
    margin: 0 auto;
}

.demo-chat-header {
    background: var(--primary);
    color: #fff;
    padding: 16px 20px;
    font-weight: 600;
}

.demo-chat-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.bot-msg {
    background: #f1f1f4;
    padding: 12px 16px;
    border-radius: 15px 15px 15px 5px;
    max-width: 85%;
    font-size: 14px;
}

.user-msg {
    background: var(--primary);
    color: #fff;
    padding: 12px 16px;
    border-radius: 15px 15px 5px 15px;
    max-width: 85%;
    align-self: flex-end;
    font-size: 14px;
}

/* === УСЛУГИ === */
.services {
    padding: 80px 0;
    background: #fff;
}

.services h2, .portfolio h2, .about h2, .contact h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 8px;
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 50px;
    font-size: 18px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.service-card {
    background: var(--bg);
    padding: 30px;
    border-radius: 20px;
    transition: 0.3s;
    border: 1px solid transparent;
}

.service-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 15px;
}

.service-card h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

.service-card p {
    color: #555;
    margin-bottom: 15px;
}

.service-card ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
}

.service-card ul li {
    padding: 4px 0;
    font-size: 14px;
    color: #444;
}

.service-price {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 16px;
}

/* === ПОРТФОЛИО === */
.portfolio {
    padding: 80px 0;
    background: var(--bg);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.portfolio-item {
    background: #fff;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.03);
    transition: 0.3s;
}

.portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}

.portfolio-badge {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    padding: 4px 14px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
}

.portfolio-item h4 {
    font-size: 20px;
    margin-bottom: 8px;
}

.portfolio-item p {
    color: #555;
    font-size: 15px;
    margin-bottom: 12px;
}

.portfolio-result {
    display: block;
    background: #f1f3f5;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 14px;
    color: var(--text);
}

/* === ОБО МНЕ === */
.about {
    padding: 80px 0;
    background: #fff;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-text .badge {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
}

.about-text h2 {
    text-align: left;
    font-size: 36px;
    margin-bottom: 16px;
}

.about-text p {
    color: #555;
    font-size: 18px;
    margin-bottom: 20px;
}

.about-text ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
}

.about-text ul li {
    padding: 6px 0;
    font-size: 16px;
}

.about-card {
    background: var(--bg);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    border: 2px solid var(--primary);
}

.about-card p {
    font-size: 18px;
    padding: 8px 0;
}

/* === КОНТАКТЫ === */
.contact {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--bg) 0%, #e8e9ff 100%);
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    max-width: 900px;
    margin: 0 auto;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-form input,
.contact-form textarea {
    padding: 14px 18px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-size: 16px;
    transition: 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
}

.contact-form button {
    background: var(--primary);
    color: #fff;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

.contact-form button:hover {
    background: var(--primary-dark);
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
}

.contact-info p {
    font-size: 18px;
}

.contact-info a {
    color: var(--primary);
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}

/* === ПОДВАЛ === */
footer {
    background: var(--text);
    color: #fff;
    padding: 30px 0;
    text-align: center;
}

footer p {
    opacity: 0.7;
    font-size: 14px;
}

footer p:last-child {
    margin-top: 6px;
    opacity: 0.5;
}

/* === АДАПТИВ === */
@media (max-width: 992px) {
    .hero .container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .hero-stats {
        justify-content: center;
    }
    .hero-buttons {
        justify-content: center;
    }
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .about-text h2 {
        text-align: center;
    }
    .contact-wrapper {
        grid-template-columns: 1fr;
    }
    .demo-chat {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    nav {
        display: none;
    }
    .hero-text h1 {
        font-size: 32px;
    }
    .services-grid, .portfolio-grid {
        grid-template-columns: 1fr;
    }
}