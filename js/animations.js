// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Add scanlines
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);

    // Hero animations
    gsap.from('#hero h1', {
        duration: 2,
        opacity: 0,
        y: 30,
        ease: 'power4.out',
        skewX: 15,
        stagger: {
            amount: 0.3
        }
    });

    // Glitch effect on scroll
    const glitchTexts = document.querySelectorAll('.glitch-text');
    glitchTexts.forEach(text => {
        ScrollTrigger.create({
            trigger: text,
            start: 'top center',
            onEnter: () => {
                text.classList.add('animate-glitch');
                setTimeout(() => {
                    text.classList.remove('animate-glitch');
                }, 1000);
            }
        });
    });

    // Cyber cards animation
    gsap.from('.cyber-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top center'
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out',
        onComplete: () => {
            gsap.to('.cyber-card', {
                duration: 0.5,
                borderColor: '#00ff00',
                repeat: -1,
                yoyo: true
            });
        }
    });

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    // Skills section
    gsap.from('.cyber-skill-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top center'
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate skill levels
    gsap.from('.level-bar', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top center'
        },
        width: '0%',
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.5
    });

    // Add hover effect for skill cards
    document.querySelectorAll('.cyber-skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.skill-icon'), {
                rotate: 360,
                duration: 0.5,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.level-bar'), {
                scale: 1.1,
                duration: 0.3,
                yoyo: true,
                repeat: 1
            });
        });
    });

    // Project cards
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top center'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2
    });
}); 