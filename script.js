document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('modal');
    const startButton = document.getElementById('start-button');
    const closeButton = document.querySelector('.close');
    
    // Add initial animations
    setTimeout(() => {
        document.querySelector('header').classList.add('show');
        document.getElementById('intro').classList.add('show');
    }, 300);
    
    // Open modal when start button is clicked
    startButton.addEventListener('click', function() {
        modal.style.display = 'block';
        
        // Add button click effect
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
    
    // Close modal when X is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card');
    const steps = document.querySelectorAll('.step');
    
    function checkElements() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            }
        });
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('show');
                }, 200);
            }
        });
        
        steps.forEach((step, index) => {
            const stepTop = step.getBoundingClientRect().top;
            
            if (stepTop < triggerBottom) {
                setTimeout(() => {
                    step.classList.add('show');
                }, 200 * (index + 1)); // Staggered animation
            }
        });
    }
    
    // Initial check
    checkElements();
    
    // Check on scroll
    window.addEventListener('scroll', checkElements);
    
    // Add hover effects to icons
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});