// Typing Animation Effect
const text = "I dream in algorithms...";
const typingElement = document.querySelector('.typing-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // 100ms between each character
    }
}

// Start typing when page loads
window.addEventListener('load', () => {
    typingElement.textContent = ''; // Clear initial text
    typeText();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add "glitch" effect to hero text on hover
const heroTitle = document.querySelector('h1');
const originalText = heroTitle.innerHTML;

heroTitle.addEventListener('mouseenter', () => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;
    
    const interval = setInterval(() => {
        heroTitle.innerText = heroTitle.innerText
            .split('')
            .map((letter, index) => {
                if(index < iteration) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if(iteration >= originalText.length){ 
            clearInterval(interval);
            heroTitle.innerHTML = originalText; // Restore HTML structure
        }
        
        iteration += 1/3;
    }, 30);
});

// Particle effect on mouse move (subtle AI vibe)
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.97) { // Only create particles occasionally
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #6366f1;
        border-radius: 50%;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        z-index: 9999;
    `;
    document.body.appendChild(particle);
    
    // Animate and remove
    particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.random()*100 - 50}px, ${Math.random()*100 - 50}px) scale(0)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

console.log("🚀 Portfolio loaded! Ready to explore AI/ML.");