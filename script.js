// Initialize Particles
particlesJS('particles', {
    particles: {
        number: { value: 80 },
        color: { value: '#ff69b4' },
        shape: { type: 'heart' },
        size: { value: 10 },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'repulse' }
        }
    }
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reason-card, .photo-card').forEach(card => {
        observer.observe(card);
    });
});

// Add clickable hearts
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'click-heart';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    heart.innerHTML = '💖';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
});