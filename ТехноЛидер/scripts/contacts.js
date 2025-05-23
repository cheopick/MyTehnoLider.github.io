document.addEventListener('DOMContentLoaded', function() {
    // Инициализация карты
    function initMap() {
        const location = { lat: 55.7558, lng: 37.6173 }; // Координаты Москвы
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location,
            styles: [
                {
                    featureType: 'all',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#2c3e50' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#3498db' }]
                }
            ]
        });
        
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Технолидер',
            icon: {
                url: 'https://maps.app.goo.gl/TtMr7dumxWys6T56A'
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: '<h3>Технолидер</h3><p> Краснодарский край, ул. Ленина, 40б</p>'
        });
        
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
    
    window.initMap = initMap;
    
    // Валидация формы
    const feedbackForm = document.getElementById('feedback-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const messageInput = document.getElementById('contact-message');
    
    function validateName() {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Пожалуйста, введите ваше имя');
            return false;
        }
        hideError(nameInput);
        return true;
    }
    
    function validateEmail() {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Пожалуйста, введите email');
            return false;
        }
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Пожалуйста, введите корректный email');
            return false;
        }
        hideError(emailInput);
        return true;
    }
    
    function validatePhone() {
        if (phoneInput.value.trim() !== '') {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(phoneInput.value)) {
                showError(phoneInput, 'Пожалуйста, введите корректный телефон');
                return false;
            }
        }
        hideError(phoneInput);
        return true;
    }
    
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Пожалуйста, введите сообщение');
            return false;
        }
        hideError(messageInput);
        return true;
    }
    
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        input.style.borderColor = '#e74c3c';
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    
    function hideError(input) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        input.style.borderColor = '#ddd';
        errorMessage.style.display = 'none';
    }
    
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    messageInput.addEventListener('blur', validateMessage);
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            // Здесь можно добавить отправку формы на сервер
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            feedbackForm.reset();
        }
    });
    
    // Анимация иконок контактов
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});