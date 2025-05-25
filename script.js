// Smooth scrolling and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Add hover effects to modules and benefits
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => {
        module.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        module.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach(benefit => {
        benefit.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        benefit.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click animation to pain points
    const painPoints = document.querySelectorAll('.pain-point');
    painPoints.forEach(point => {
        point.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Animate statistics on scroll
    const stats = document.querySelectorAll('.stat');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Function to start the course (CTA button)
function startCourse() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 20px;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;

    modalContent.innerHTML = `
        <h2 style="color: #333; margin-bottom: 20px;">🎉 Добро пожаловать!</h2>
        <p style="color: #666; font-size: 1.1rem; margin-bottom: 30px; line-height: 1.6;">
            Спасибо за интерес к нашему курсу! Мы свяжемся с вами в ближайшее время для начала трансформации процесса адаптации в вашей компании.
        </p>
        <div style="margin-bottom: 30px;">
            <input type="email" placeholder="Ваш email" style="
                width: 100%;
                padding: 15px;
                border: 2px solid #ddd;
                border-radius: 10px;
                font-size: 1rem;
                margin-bottom: 15px;
            ">
            <input type="text" placeholder="Название компании" style="
                width: 100%;
                padding: 15px;
                border: 2px solid #ddd;
                border-radius: 10px;
                font-size: 1rem;
                margin-bottom: 15px;
            ">
            <input type="tel" placeholder="Телефон" style="
                width: 100%;
                padding: 15px;
                border: 2px solid #ddd;
                border-radius: 10px;
                font-size: 1rem;
            ">
        </div>
        <button onclick="submitForm()" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 1.1rem;
            cursor: pointer;
            margin-right: 15px;
            transition: transform 0.3s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Отправить заявку
        </button>
        <button onclick="closeModal()" style="
            background: #ccc;
            color: #333;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Закрыть
        </button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Animate modal appearance
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);

    // Store modal reference for closing
    window.currentModal = modal;
}

// Function to close modal
function closeModal() {
    const modal = window.currentModal;
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('div').style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(modal);
            window.currentModal = null;
        }, 300);
    }
}

// Function to submit form
function submitForm() {
    const inputs = window.currentModal.querySelectorAll('input');
    let allFilled = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = '#4ecdc4';
        }
    });

    if (allFilled) {
        // Simulate form submission
        const modalContent = window.currentModal.querySelector('div');
        modalContent.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
                <h2 style="color: #4ecdc4; margin-bottom: 20px;">Заявка отправлена!</h2>
                <p style="color: #666; font-size: 1.1rem; margin-bottom: 30px;">
                    Мы получили вашу заявку и свяжемся с вами в течение 24 часов.
                </p>
                <button onclick="closeModal()" style="
                    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Отлично!
                </button>
            </div>
        `;
    } else {
        // Show error message
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Пожалуйста, заполните все поля';
        errorMsg.style.cssText = 'color: #ff6b6b; margin-top: 10px; font-weight: bold;';
        
        const existingError = window.currentModal.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        errorMsg.className = 'error-message';
        window.currentModal.querySelector('div').appendChild(errorMsg);
    }
}

// Function to animate numbers
function animateNumber(element) {
    const text = element.textContent;
    const isPercentage = text.includes('%');
    const isMultiplier = text.includes('x');
    const isCurrency = text.includes('₽');
    
    let targetNumber;
    if (isPercentage) {
        targetNumber = parseInt(text);
    } else if (isMultiplier) {
        targetNumber = parseInt(text);
    } else if (isCurrency) {
        targetNumber = 500000;
    } else {
        return;
    }

    let currentNumber = 0;
    const increment = targetNumber / 50;
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        
        if (isPercentage) {
            element.textContent = Math.floor(currentNumber) + '%';
        } else if (isMultiplier) {
            element.textContent = Math.floor(currentNumber) + 'x';
        } else if (isCurrency) {
            element.textContent = '₽' + Math.floor(currentNumber).toLocaleString() + '+';
        }
    }, 50);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (window.currentModal && e.target === window.currentModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && window.currentModal) {
        closeModal();
    }
});