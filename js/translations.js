const translations = {
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-certifications': 'Certifications',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-badge': '<span class="status-dot"></span> Available for new projects',
        'hero-title': 'Building <em>software</em><br>that solves real problems',
        'hero-desc': 'I\'m <strong>Amir Dehestani</strong>, a <strong>Software Developer</strong> based in Germany — building web apps, AI-powered tools, scalable backends, and WordPress solutions.',
        'hero-btn-projects': 'View Projects <i class="fas fa-arrow-right"></i>',
        'hero-btn-chat': 'Talk to AI Agent <i class="fas fa-robot"></i>',
        'hero-btn-meeting': 'Book a Meeting <i class="fas fa-calendar-check"></i>',

        // About Section
        'section-about': 'About Me',
        'about-exp-badge': 'Years of<br>Experience',
        'about-title': 'Developer across the full stack',
        'about-p1': 'I\'m a <strong>software developer</strong> who\'s comfortable across multiple domains — from building robust Python backends and AI-integrated systems, to crafting polished WordPress sites and custom web applications.',
        'about-p2': 'My background spans <strong>backend engineering</strong>, <strong>AI/ML integration</strong>, <strong>workflow automation</strong>, and <strong>CMS development</strong>. I adapt to what a project needs, whether that means a production-grade API, a smart chatbot, or a fast and clean WordPress build.',
        'about-bring': 'My Core Focus:',
        
        // Focus Cards
        'focus-backend-title': 'Backend Excellence',
        'focus-backend-desc': 'Production-ready APIs with FastAPI & Flask, focused on security & scale.',
        'focus-ai-title': 'AI Integration',
        'focus-ai-desc': 'Intelligent chatbots & agents using NLP and modern ML frameworks.',
        'focus-auto-title': 'Workflow Automation',
        'focus-auto-desc': 'Sophisticated n8n workflows that streamline business operations.',
        'focus-db-title': 'Database Architecture',
        'focus-db-desc': 'Efficient schema design for PostgreSQL handling high-volume data.',

        // Skills Section
        'section-skills': 'Tech Stack & Skills',
        'skill-backend': 'Backend Development',
        'skill-db': 'Databases',
        'skill-auto': 'Automation & Workflow',
        'skill-ai': 'AI & Machine Learning',
        'skill-devops': 'DevOps & Tools',
        'skill-frontend': 'Frontend & CMS',

        // Experience Section
        'section-experience': 'Work Experience',
        'exp-1-title': 'Backend & AI Engineer',
        'exp-2-title': 'Web Developer',
        'exp-3-title': 'Web Developer',

        // Cross-Functional Section
        'cross-func-title': 'Open to new opportunities with <span class="highlight">innovative</span> teams',
        'cross-func-desc': 'that value building intelligent solutions and scalable architectures',

        // Projects Section
        'section-projects': 'Things I\'ve Built',
        'section-projects-subtitle': 'A mix of AI tools, web apps, automation systems, and WordPress solutions.',
        'proj-1-title': 'AI Resume Analyzer',
        'proj-1-short': 'LLM-powered tool that automatically analyses and optimises resumes via strategic prompting. Provides actionable feedback tailored to job descriptions.',
        'proj-2-title': 'RAG Knowledge Base',
        'proj-2-short': 'Interactive chatbot that processes internal documents for context-aware responses using semantic search and retrieval-augmented generation.',
        'proj-3-title': 'n8n Automation Suite',
        'proj-3-short': 'Automated workflows bridging CRM, email, and database systems for complete business process automation — eliminating manual data handoffs.',
        'proj-4-title': 'Personal Life Manager',
        'proj-4-short': 'Voice-enabled AI assistant integrating Telegram and Google Services for complete life management — calendar, tasks, reminders, and more.',
        'proj-5-title': 'n8n AI Workflow Generator',
        'proj-5-short': 'Browser extension that generates executable n8n workflows from natural language descriptions using AI — making automation accessible to non-developers.',
        'proj-6-title': 'Master Your Job Search',
        'proj-6-short': 'All-in-one workspace to manage job applications, optimise resumes with AI, and prepare for interviews. Built for job seekers who want a systematic approach.',
        'proj-7-title': 'Real Estate Landing Page',
        'proj-7-short': 'Modern, fully responsive landing page for real estate listings with advanced search and filtering features. Clean UI with fast performance.',

        // Certifications Section
        'section-certifications': 'Certifications',
        'cert-1-title': 'Software Engineering',
        'cert-1-issuer': 'Masterschool',
        'cert-1-focus': 'Back-end Development',
        'cert-2-title': 'Machine Learning with Python',
        'cert-2-issuer': 'Professional Certificate',
        'cert-2-focus': 'Foundations',
        'cert-3-title': 'Docker Foundations',
        'cert-3-issuer': 'Professional Certificate',
        'cert-3-focus': 'Container Technology',
        'cert-4-title': 'Webflow Layouts',
        'cert-4-issuer': 'Professional Certificate',
        'cert-4-focus': 'Web Design',
        'cert-5-title': 'n8n: No Code AI Agent Builder',
        'cert-5-issuer': 'n8n',
        'cert-5-focus': 'No-Code Automation',

        // Education Section
        'section-education': 'Education',
        'edu-1-title': 'Computer Software Engineering',
        'edu-1-school': 'Masterschool',
        'edu-1-desc': 'Software engineering program with a strong focus on backend development and modern engineering practices.',
        'edu-2-title': 'Bachelor\'s Degree, Avionics Engineering',
        'edu-2-school': 'Civil Aviation Technology College',
        'edu-2-desc': 'Focused on avionics fundamentals, systems integration, and technical problem-solving.',

        // Contact Section
        'section-contact': 'Get In Touch',
        'contact-title': 'Let\'s build something',
        'contact-desc': 'Open to freelance projects, full-time roles, and interesting collaborations. Don\'t hesitate to reach out.',
        'contact-email': 'Email',
        'contact-loc': 'Location',
        'contact-linkedin': 'LinkedIn',
        
        // Form
        'form-name': 'Name',
        'form-name-ph': 'Your Name',
        'form-email': 'Email',
        'form-email-ph': 'your.email@example.com',
        'form-subject': 'Subject',
        'form-subject-ph': 'What\'s this about?',
        'form-message': 'Message',
        'form-message-ph': 'Your message here...',
        'btn-send': 'Send Message',

        // Footer
        'footer-rights': '&copy; 2026 Amir Dehestani. All rights reserved.',
        'footer-design': 'Designed & Built with <i class="fas fa-heart"></i> by Amir Dehestani',

        // Chatbot
        'chat-title': 'Amir\'s AI Assistant',
        'chat-status': 'Online',
        'chat-welcome': 'Hello! I\'m Amir\'s AI assistant. Ask me anything about his skills, experience, or projects!',
        'chat-input-ph': 'Ask a question...',
        'chat-footer': 'Powered by Groq AI',

        // Typewriter Phrases
        'typewriter-phrases': [
            'Software Developer',
            'Backend Developer (Python)',
            'AI Developer',
            'Automation Specialist',
            'n8n Expert',
            'REST API Developer'
        ]
    },
    'de': {
        // Navigation
        'nav-home': 'Startseite',
        'nav-about': 'Über mich',
        'nav-skills': 'Fähigkeiten',
        'nav-experience': 'Erfahrung',
        'nav-projects': 'Projekte',
        'nav-certifications': 'Zertifikate',
        'nav-contact': 'Kontakt',

        // Hero Section
        'hero-badge': '<span class="status-dot"></span> Verfügbar für neue Projekte',
        'hero-title': 'Ich entwickle <em>Software</em><br>für echte Probleme',
        'hero-desc': 'Ich bin <strong>Amir Dehestani</strong>, ein <strong>Softwareentwickler</strong> in Deutschland — ich entwickle Web-Apps, KI-gestützte Tools, skalierbare Backends und WordPress-Lösungen.',
        'hero-btn-projects': 'Projekte ansehen <i class="fas fa-arrow-right"></i>',
        'hero-btn-chat': 'Mit KI-Agent sprechen <i class="fas fa-robot"></i>',
        'hero-btn-meeting': 'Termin buchen <i class="fas fa-calendar-check"></i>',

        // About Section
        'section-about': 'Über mich',
        'about-exp-badge': 'Jahre<br>Erfahrung',
        'about-title': 'Entwickler über den gesamten Stack',
        'about-p1': 'Ich bin ein <strong>Softwareentwickler</strong>, der sich in mehreren Bereichen wohlfühlt — von robusten Python-Backends und KI-integrierten Systemen bis hin zu modernen WordPress-Seiten und individuellen Webanwendungen.',
        'about-p2': 'Mein Hintergrund umfasst <strong>Backend-Engineering</strong>, <strong>KI/ML-Integration</strong>, <strong>Workflow-Automatisierung</strong> und <strong>CMS-Entwicklung</strong>. Ich passe mich an, was ein Projekt braucht: produktionsreife API, smarter Chatbot oder eine schnelle, saubere WordPress-Umsetzung.',
        'about-bring': 'Mein Kernfokus:',

        // Focus Cards
        'focus-backend-title': 'Backend-Exzellenz',
        'focus-backend-desc': 'Produktionsreife APIs mit FastAPI & Flask, fokussiert auf Sicherheit & Skalierbarkeit.',
        'focus-ai-title': 'KI-Integration',
        'focus-ai-desc': 'Intelligente Chatbots & Agenten unter Verwendung von NLP und modernen ML-Frameworks.',
        'focus-auto-title': 'Workflow-Automatisierung',
        'focus-auto-desc': 'Anspruchsvolle n8n-Workflows, die Geschäftsabläufe rationalisieren.',
        'focus-db-title': 'Datenbank-Architektur',
        'focus-db-desc': 'Effizientes Schema-Design für PostgreSQL zur Verarbeitung großer Datenmengen.',

        // Skills Section
        'section-skills': 'Tech Stack & Fähigkeiten',
        'skill-backend': 'Backend-Entwicklung',
        'skill-db': 'Datenbanken',
        'skill-auto': 'Automatisierung & Workflow',
        'skill-ai': 'KI & Maschinelles Lernen',
        'skill-devops': 'DevOps & Tools',
        'skill-frontend': 'Frontend & CMS',

        // Experience Section
        'section-experience': 'Berufserfahrung',
        'exp-1-title': 'Backend & KI Engineer',
        'exp-2-title': 'Webentwickler',
        'exp-3-title': 'Webentwickler',

        // Cross-Functional Section
        'cross-func-title': 'Offen für neue Möglichkeiten mit <span class="highlight">innovativen</span> Teams',
        'cross-func-desc': 'die intelligente Lösungen und skalierbare Architekturen schätzen',

        // Projects Section
        'section-projects': 'Projekte, die ich gebaut habe',
        'section-projects-subtitle': 'Eine Mischung aus KI-Tools, Web-Apps, Automatisierungssystemen und WordPress-Lösungen.',
        'proj-1-title': 'AI Resume Analyzer',
        'proj-1-short': 'LLM-gestütztes Tool zur automatischen Analyse und Optimierung von Lebensläufen mit konkretem Feedback je Stellenausschreibung.',
        'proj-2-title': 'RAG Knowledge Base',
        'proj-2-short': 'Interaktiver Chatbot, der interne Dokumente für kontextbezogene Antworten via semantischer Suche und RAG verarbeitet.',
        'proj-3-title': 'n8n Automation Suite',
        'proj-3-short': 'Automatisierte Workflows zwischen CRM, E-Mail und Datenbanken für durchgängige Geschäftsprozess-Automatisierung.',
        'proj-4-title': 'Personal Life Manager',
        'proj-4-short': 'Sprachfähiger KI-Assistent mit Telegram- und Google-Integration für Kalender, Aufgaben, Erinnerungen und mehr.',
        'proj-5-title': 'n8n AI Workflow Generator',
        'proj-5-short': 'Browser-Erweiterung, die ausführbare n8n-Workflows aus natürlicher Sprache mit KI generiert.',
        'proj-6-title': 'Master Your Job Search',
        'proj-6-short': 'All-in-one-Workspace zur Verwaltung von Bewerbungen, KI-Optimierung von Lebensläufen und Interviewvorbereitung.',
        'proj-7-title': 'Immobilien-Webseite',
        'proj-7-short': 'Moderne, vollständig responsive Landingpage für Immobilien mit erweiterter Suche und Filterfunktionen.',

        // Certifications Section
        'section-certifications': 'Zertifizierungen',
        'cert-1-title': 'Software Engineering',
        'cert-1-issuer': 'Masterschool',
        'cert-1-focus': 'Backend-Entwicklung',
        'cert-2-title': 'Maschinelles Lernen mit Python',
        'cert-2-issuer': 'Professionelles Zertifikat',
        'cert-2-focus': 'Grundlagen',
        'cert-3-title': 'Docker Grundlagen',
        'cert-3-issuer': 'Professionelles Zertifikat',
        'cert-3-focus': 'Container-Technologie',
        'cert-4-title': 'Webflow Layouts',
        'cert-4-issuer': 'Professionelles Zertifikat',
        'cert-4-focus': 'Webdesign',
        'cert-5-title': 'n8n: No Code AI Agent Builder',
        'cert-5-issuer': 'n8n',
        'cert-5-focus': 'No-Code Automatisierung',

        // Education Section
        'section-education': 'Ausbildung',
        'edu-1-title': 'Computer Software Engineering',
        'edu-1-school': 'Masterschool',
        'edu-1-desc': 'Software-Engineering-Programm mit Fokus auf Backend-Entwicklung und modernen Engineering-Praktiken.',
        'edu-2-title': 'Bachelor\'s Degree, Avionics Engineering',
        'edu-2-school': 'Civil Aviation Technology College',
        'edu-2-desc': 'Fokus auf Avionik-Grundlagen, Systemintegration und technische Problemlösung.',

        // Contact Section
        'section-contact': 'Kontakt aufnehmen',
        'contact-title': 'Lassen Sie uns etwas bauen',
        'contact-desc': 'Offen für Freelance-Projekte, Vollzeitrollen und spannende Kooperationen. Melden Sie sich gerne.',
        'contact-email': 'E-Mail',
        'contact-loc': 'Standort',
        'contact-linkedin': 'LinkedIn',
        
        // Form
        'form-name': 'Name',
        'form-name-ph': 'Ihr Name',
        'form-email': 'E-Mail',
        'form-email-ph': 'ihre.email@beispiel.de',
        'form-subject': 'Betreff',
        'form-subject-ph': 'Worum geht es?',
        'form-message': 'Nachricht',
        'form-message-ph': 'Ihre Nachricht hier...',
        'btn-send': 'Nachricht senden',

        // Footer
        'footer-rights': '&copy; 2026 Amir Dehestani. Alle Rechte vorbehalten.',
        'footer-design': 'Entworfen & Entwickelt mit <i class="fas fa-heart"></i> von Amir Dehestani',

        // Chatbot
        'chat-title': 'Amirs KI-Assistent',
        'chat-status': 'Online',
        'chat-welcome': 'Hallo! Ich bin Amirs KI-Assistent. Fragen Sie mich alles über seine Fähigkeiten, Erfahrungen oder Projekte!',
        'chat-input-ph': 'Stellen Sie eine Frage...',
        'chat-footer': 'Unterstützt von Groq KI',

        // Typewriter Phrases
        'typewriter-phrases': [
            'Softwareentwickler',
            'Backend-Entwickler (Python)',
            'KI-Entwickler',
            'Automatisierungsspezialist',
            'n8n Experte',
            'REST API Entwickler'
        ]
    }
};
