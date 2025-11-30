// ============================================
// Smooth Scroll & Navigation
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Mobile Menu
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Typewriter Effect
// ============================================

const typewriter = document.getElementById('typewriter');
let phrases = [
    'Software Developer',
    'Backend Developer (Python)',
    'AI Developer',
    'Automation Specialist',
    'n8n Expert',
    'REST API Developer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}

// Start typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// ============================================
// Particles.js Background
// ============================================

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ff6b00'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff6b00',
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// ============================================
// Scroll Animations (AOS Alternative)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
});

// ============================================
// Contact Form Validation & Submission
// ============================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate field
function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    let isValid = true;
    
    if (field.value.trim() === '') {
        isValid = false;
        errorMessage.textContent = 'This field is required';
    } else if (field.type === 'email' && !isValidEmail(field.value)) {
        isValid = false;
        errorMessage.textContent = 'Please enter a valid email address';
    } else if (field.name === 'name' && field.value.trim().length < 2) {
        isValid = false;
        errorMessage.textContent = 'Name must be at least 2 characters';
    } else if (field.name === 'message' && field.value.trim().length < 10) {
        isValid = false;
        errorMessage.textContent = 'Message must be at least 10 characters';
    }
    
    if (isValid) {
        formGroup.classList.remove('error');
        errorMessage.textContent = '';
    } else {
        formGroup.classList.add('error');
    }
    
    return isValid;
}

// Real-time validation
if (contactForm) {
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.closest('.form-group').classList.contains('error')) {
                validateField(input);
            }
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        // Validate all fields before submitting
        let isFormValid = true;
        formInputs.forEach(input => {
            // Skip hidden fields in validation
            if (input.type !== 'hidden' && input.name !== '_honey') {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            }
        });
        
        if (!isFormValid) {
            e.preventDefault();
            return;
        }
        
        // If validation passes, disable submit button and let form submit naturally
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Form will submit normally to FormSubmit
    });
}

// ============================================
// Project Card Interactions
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ============================================
// Terminal Animation
// ============================================

const terminalLines = document.querySelectorAll('.terminal-body p');
let lineDelay = 0;

terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        line.style.transition = 'all 0.5s ease';
        line.style.opacity = '1';
        line.style.transform = 'translateX(0)';
    }, 500 + (index * 200));
});

// ============================================
// Skill Items Hover Effect
// ============================================

const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Add subtle animation or effect
        this.style.transition = 'transform 0.3s ease';
    });
});

// ============================================
// Timeline Item Animation Enhancement
// ============================================

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });
    
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.8s ease';
    
    observer.observe(item);
});

// ============================================
// Certification Cards Animation
// ============================================

const certCards = document.querySelectorAll('.cert-card');

certCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// Scroll to Top Functionality (Hidden by default)
// ============================================

// Create scroll to top button dynamically
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: var(--bg-primary);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 107, 0, 0.4);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 10px 25px rgba(255, 107, 0, 0.6)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 5px 15px rgba(255, 107, 0, 0.4)';
});

// ============================================
// Loading Animation
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero section on load
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations if needed
const debouncedScroll = debounce(() => {
    // Any heavy scroll operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// Easter Egg: Console Message
// ============================================

console.log('%c👋 Hello there!', 'color: #ff6b00; font-size: 24px; font-weight: bold;');
console.log('%cLooking at the code? I like your style!', 'color: #b0b0b0; font-size: 16px;');
console.log('%cFeel free to reach out: info@amirdhs.com', 'color: #ff6b00; font-size: 14px;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #ff8c00; font-size: 14px;');

// ============================================
// Accessibility: Focus Management
// ============================================

// Add focus visible style for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// Theme Toggle (Optional - Dark/Light Mode)
// ============================================

// This is a placeholder for future implementation
// Can be uncommented and customized if light mode is desired

/*
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.className = 'theme-toggle';
themeToggle.setAttribute('aria-label', 'Toggle theme');
// Add styling and functionality as needed
*/

// ============================================
// Cursor Effect (Optional Enhancement)
// ============================================

// Custom cursor effect for desktop
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Enhance cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(255, 107, 0, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// ============================================
// Dynamic Year in Footer
// ============================================

const footerYear = document.querySelector('.footer-content p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// ============================================
// Preload Images
// ============================================

function preloadImages() {
    const images = [
        'assets/profile-placeholder.jpg',
        'assets/project-1.jpg',
        'assets/project-2.jpg',
        'assets/project-3.jpg',
        'assets/project-4.jpg',
        'assets/project-5.jpg',
        'assets/project-6.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
document.addEventListener('DOMContentLoaded', preloadImages);

// ============================================
// Analytics (Placeholder)
// ============================================

// Add your analytics tracking code here
// Example: Google Analytics, Plausible, etc.

/*
// Google Analytics example
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
*/

console.log('🎉 Portfolio loaded successfully!');

// ============================================
// Chatbot Logic
// ============================================

const chatWidget = {
    elements: {
        toggleBtn: document.getElementById('chat-toggle-btn'),
        closeBtn: document.getElementById('chat-close-btn'),
        container: document.getElementById('chat-container'),
        messages: document.getElementById('chat-messages'),
        form: document.getElementById('chat-form'),
        input: document.getElementById('chat-input'),
        sendBtn: document.getElementById('chat-send-btn')
    },
    
    state: {
        isOpen: false,
        // API Key is loaded from js/config.js (which is gitignored)
        apiKey: (typeof CONFIG !== 'undefined' ? CONFIG.GROQ_API_KEY : '') || localStorage.getItem('groq_api_key') || '',
        context: '',
        history: []
    },

    init() {
        this.addEventListeners();
        this.loadContext();
    },

    addEventListeners() {
        this.elements.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.elements.closeBtn.addEventListener('click', () => this.toggleChat());
        this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Add listener for hero button
        const heroChatBtn = document.getElementById('hero-chat-btn');
        if (heroChatBtn) {
            heroChatBtn.addEventListener('click', () => this.toggleChat());
        }
    },

    toggleChat() {
        this.state.isOpen = !this.state.isOpen;
        this.elements.container.classList.toggle('active', this.state.isOpen);
        
        if (this.state.isOpen && this.elements.input) {
            setTimeout(() => this.elements.input.focus(), 300);
        }
    },

    async loadContext() {
        try {
            const response = await fetch('aboutme.md');
            if (response.ok) {
                this.state.context = await response.text();
            } else {
                console.warn('Could not load aboutme.md, using fallback context.');
                this.state.context = this.getFallbackContext();
            }
        } catch (error) {
            console.error('Error loading context:', error);
            this.state.context = this.getFallbackContext();
        }
    },

    getFallbackContext() {
        return `
        Name: Amir Dehestani
        Role: Backend Developer | AI Specialist | Automation Expert
        Location: Germany
        Skills: Python, FastAPI, Flask, PostgreSQL, n8n, AI/ML, Docker
        Experience: Freelance AI Developer, Web Developer at Nature's Gold Kohrang & Agroloader.
        Projects: AI-Powered API System, Business Workflow Automation, E-Commerce Backend.
        Contact: info@amirdhs.com
        `;
    },

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Parse Markdown for bot messages
        const formattedContent = type === 'bot' && typeof marked !== 'undefined' 
            ? marked.parse(content) 
            : content;

        messageDiv.innerHTML = `
            <div class="message-content">${formattedContent}</div>
            <div class="message-time">${time}</div>
        `;
        
        this.elements.messages.appendChild(messageDiv);
        this.scrollToBottom();
    },

    addTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        this.elements.messages.appendChild(indicator);
        this.scrollToBottom();
    },

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    },

    scrollToBottom() {
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    },

    async handleSubmit(e) {
        e.preventDefault();
        const message = this.elements.input.value.trim();
        
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.elements.input.value = '';
        this.elements.sendBtn.disabled = true;

        // Check for API Key
        if (!this.state.apiKey) {
            if (message.startsWith('gsk_')) {
                this.state.apiKey = message;
                localStorage.setItem('groq_api_key', message);
                this.addMessage("Thanks! API key saved. You can now ask me questions about Amir.", 'bot');
            } else {
                this.addMessage("To use this chatbot, please enter your Groq API Key first. (It will be saved locally in your browser).", 'bot');
                this.addMessage("You can get one at: https://console.groq.com/keys", 'bot');
            }
            this.elements.sendBtn.disabled = false;
            return;
        }

        // Show typing indicator
        this.addTypingIndicator();

        try {
            const response = await this.callGroqAPI(message);
            this.removeTypingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.removeTypingIndicator();
            this.addMessage(`Sorry, I encountered an error: ${error.message}. Please check your API key or try again later.`, 'bot');
            console.error('Groq API Error:', error);
            
            // If 401/403, maybe clear key
            if (error.message.includes('401') || error.message.includes('403')) {
                this.state.apiKey = '';
                localStorage.removeItem('groq_api_key');
                this.addMessage("It seems your API key is invalid. Please provide a new one.", 'bot');
            }
        }

        this.elements.sendBtn.disabled = false;
        this.elements.input.focus();
    },

    async callGroqAPI(userMessage) {
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
        
        const systemPrompt = `
        You are an AI assistant for Amir Dehestani's portfolio website. 
        Your role is to answer questions about Amir based strictly on the provided context.
        
        Context about Amir:
        ${this.state.context}
        
        Instructions:
        1. Be polite, professional, and concise.
        2. Only answer questions related to Amir's professional life, skills, projects, and experience.
        3. If the answer is not in the context, say "I don't have that information about Amir."
        4. Keep answers short (under 3-4 sentences) unless asked for details.
        5. You can use emojis occasionally.
        `;

        const requestBody = {
            model: "openai/gpt-oss-20b", // Using a standard high-performance model on Groq
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userMessage
                }
            ]
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData?.error?.message || `Status ${response.status}`;
            throw new Error(`API request failed: ${errorMessage}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Invalid response format from Groq API');
        }
    }
};

// Initialize Chatbot
document.addEventListener('DOMContentLoaded', () => {
    chatWidget.init();
});

// ============================================
// Language Switcher
// ============================================

const langButtons = document.querySelectorAll('.lang-btn');
const currentLang = localStorage.getItem('language') || 'en';

function updateContent(lang) {
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has HTML content (for bold tags etc)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update typewriter phrases
    if (translations[lang] && translations[lang]['typewriter-phrases']) {
        phrases = translations[lang]['typewriter-phrases'];
        // Reset typewriter to start with new language
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update active button state
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Save preference
    localStorage.setItem('language', lang);
}

// Event listeners for language buttons
langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        updateContent(lang);
    });
});

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
});
