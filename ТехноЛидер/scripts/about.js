document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления текста при прокрутке
    const articles = document.querySelectorAll('.about-content article');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    articles.forEach(article => {
        observer.observe(article);
    });
    
    // Галерея с горизонтальным скроллом
    const galleryScroll = document.querySelector('.gallery-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    galleryScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - galleryScroll.offsetLeft;
        scrollLeft = galleryScroll.scrollLeft;
    });
    
    galleryScroll.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    galleryScroll.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    galleryScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryScroll.offsetLeft;
        const walk = (x - startX) * 2;
        galleryScroll.scrollLeft = scrollLeft - walk;
    });
    
    // Увеличение отзывов при клике
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('click', function() {
            this.classList.toggle('expanded');
            if (this.classList.contains('expanded')) {
                this.style.transform = 'scale(1.05)';
                this.style.zIndex = '10';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            } else {
                this.style.transform = 'translateY(-10px)';
                this.style.zIndex = '1';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            }
        });
    });
    
    // Анимация кнопок при наведении
    const buttons = document.querySelectorAll('.btn, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});