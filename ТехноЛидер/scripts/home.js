// Параллакс эффект
document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + offset * 0.5 + 'px)';
    });
    
    // Интерактивная кнопка
    const interactiveBtn = document.getElementById('interactive-btn');
    interactiveBtn.addEventListener('click', function() {
        if (this.textContent === 'Нажми меня') {
            this.textContent = 'Спасибо!';
            this.style.backgroundColor = '#2ecc71';
        } else {
            this.textContent = 'Нажми меня';
            this.style.backgroundColor = '#3498db';
        }
    });
    
    // Анимация при наведении на контакты
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(0deg)';
        });
    });
});