// DOM elements
const container = document.getElementById('container');
const progressBar = document.getElementById('progressBar');
const scrollTopBtn = document.getElementById('scrollTop');
const themeToggle = document.getElementById('themeToggle');
const navigation = document.getElementById('navigation');
const sectionIndicator = document.getElementById('sectionIndicator');
const imageZoom = document.getElementById('imageZoom');
const zoomedImage = document.getElementById('zoomedImage');
const closeZoom = document.getElementById('closeZoom');
const readingTime = document.getElementById('readingTime');

// Variables
let isDarkTheme = false;
let sections = [];
let currentSection = 0;
let lastScrollY = window.scrollY; // Track scroll position

// Initialize
function init() {
    createNavigation();
    createParticles();
    checkVisibleSections();
    addEventListeners();
    highlightSpecialText();
    updateSectionIndicator();
    updateProgressBar();
    
    // Set initial reading time
    calculateReadingTime();
}

// Calculate reading time
function calculateReadingTime() {
    const textContent = document.body.textContent || document.body.innerText;
    const wordCount = textContent.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / 200);
    readingTime.textContent = `Reading time: ~${readingTimeMinutes} minutes`;
}

// Create navigation dots
function createNavigation() {
    sections = Array.from(document.querySelectorAll('.speech-section'));
    navigation.innerHTML = ''; // Clear any existing dots
    
    sections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        dot.dataset.index = index;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `Section ${index + 1}`;
        
        dot.appendChild(tooltip);
        navigation.appendChild(dot);
        
        dot.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Create background particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) particlesContainer.remove();
    
    const particles = document.createElement('div');
    particles.className = 'particles';
    document.querySelector('.container').appendChild(particles);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particles.appendChild(particle);
        
        animateParticle(particle);
    }
}

// Animate particles
function animateParticle(particle) {
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ${delay}s infinite alternate`;
}

// Check visible sections and update their classes
function checkVisibleSections() {
    const windowHeight = window.innerHeight;
    const windowTop = window.scrollY;
    const windowBottom = windowTop + windowHeight;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + windowTop;
        const sectionBottom = sectionTop + rect.height;
        
        // Section is visible if its top or bottom is in the viewport,
        // or if it spans the entire viewport
        if (
            (sectionTop <= windowBottom && sectionTop >= windowTop) ||
            (sectionBottom <= windowBottom && sectionBottom >= windowTop) ||
            (sectionTop <= windowTop && sectionBottom >= windowBottom)
        ) {
            if (!section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        }
    });
}

// Add interactive effects to special text
function highlightSpecialText() {
    // Adding click events to highlight text
    document.querySelectorAll('.highlight-text').forEach(element => {
        element.addEventListener('click', function() {
            this.style.color = getRandomColor();
        });
    });
    
    // Adding effects to special text
    document.querySelectorAll('.special-text').forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.color = 'var(--accent-color)';
        });
        
        element.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.color = '';
        });
    });
}

// Get random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Update section indicator
function updateSectionIndicator() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const windowMiddle = scrollPosition + (windowHeight / 2);
    
    let activeSection = 0;
    let minDistance = Infinity;
    
    sections.forEach((section, index) => {
        const sectionMiddle = section.offsetTop + (section.offsetHeight / 2);
        const distance = Math.abs(windowMiddle - sectionMiddle);
        
        if (distance < minDistance) {
            minDistance = distance;
            activeSection = index;
        }
    });
    
    sectionIndicator.textContent = activeSection + 1;
    
    // Update navigation
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        if (index === activeSection) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    if (currentSection !== activeSection) {
        // Section changed
        currentSection = activeSection;
        // Trigger confetti for last section
        if (activeSection === sections.length - 1) {
            createConfetti();
        }
    }
}

// Update progress bar
function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    // Avoid division by zero
    if (maxScroll > 0) {
        const scrollPercentage = (scrollPosition / maxScroll) * 100;
        progressBar.style.width = scrollPercentage + '%';
    } else {
        progressBar.style.width = '0%';
    }
    
    // Show/hide scroll to top button
    if (scrollPosition > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// Create confetti animation
function createConfetti() {
    // Clean up any existing confetti
    document.querySelectorAll('.confetti').forEach(el => el.remove());
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-5vh';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.position = 'fixed';
        document.body.appendChild(confetti);
        
        // Animate falling
        const animationDuration = Math.random() * 3 + 2;
        
        // Use keyframe animation with JS
        const keyframes = [
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(100vh) rotate(720deg)`, opacity: 0 }
        ];
        
        const options = {
            duration: animationDuration * 1000,
            easing: 'linear',
            fill: 'forwards'
        };
        
        confetti.animate(keyframes, options);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Add event listeners
function addEventListeners() {
    // Scroll event for progress bar and section reveal
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        lastScrollY = currentScrollY;
        
        checkVisibleSections();
        updateSectionIndicator();
        updateProgressBar();
    });
    
    // Also update on resize
    window.addEventListener('resize', () => {
        checkVisibleSections();
        updateSectionIndicator();
        updateProgressBar();
        calculateReadingTime();
    });
    
    // Scroll to top
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        isDarkTheme = !isDarkTheme;
        
        // Update toggle icon
        if (isDarkTheme) {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
        } else {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            `;
        }
    });
    
    // Image zoom
    document.querySelectorAll('.parallax-image').forEach(img => {
        img.addEventListener('click', () => {
            zoomedImage.src = img.src;
            imageZoom.classList.add('active');
        });
    });
    
    // Close zoom
    closeZoom.addEventListener('click', () => {
        imageZoom.classList.remove('active');
    });
    
    // Escape key closes zoom
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            imageZoom.classList.remove('active');
        }
    });
    
    // Click outside to close zoom
    imageZoom.addEventListener('click', (e) => {
        if (e.target === imageZoom) {
            imageZoom.classList.remove('active');
        }
    });
    
    // Parallax effect on images
    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        wrapper.addEventListener('mousemove', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            const image = wrapper.querySelector('.parallax-image');
            image.style.transform = `translate(${(xPercent - 0.5) * -20}px, ${(yPercent - 0.5) * -20}px) scale(1.1)`;
        });
        
        wrapper.addEventListener('mouseleave', () => {
            const image = wrapper.querySelector('.parallax-image');
            image.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}