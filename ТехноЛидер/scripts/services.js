document.addEventListener('DOMContentLoaded', function() {
    // Эффекты при наведении на карточки
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.card-image img');
            image.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.card-image img');
            image.style.transform = 'scale(1)';
        });
    });
    
    // Подсветка строк таблицы
    const tableRows = document.querySelectorAll('.price-table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            if (this.rowIndex % 2 === 0) {
                this.style.backgroundColor = '#f8f9fa';
            } else {
                this.style.backgroundColor = 'white';
            }
        });
    });
    
    // Модальное окно
    const modal = document.getElementById('order-modal');
    const quickOrderBtns = document.querySelectorAll('.quick-order');
    const closeBtn = document.querySelector('.close');
    const orderForm = document.getElementById('order-form');
    
    quickOrderBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            
            // Определяем услугу из карточки
            const card = this.closest('.service-card');
            const serviceName = card.querySelector('h3').textContent;
            document.getElementById('service').value = serviceName;
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Валидация формы
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        
        if (!name || !phone || !email || !service) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert('Пожалуйста, введите корректный email');
            return;
        }
        
        // Здесь можно добавить отправку формы на сервер
        alert(`Спасибо, ${name}! Ваша заявка на "${service}" принята. Мы свяжемся с вами в ближайшее время.`);
        modal.style.display = 'none';
        orderForm.reset();
    });
});