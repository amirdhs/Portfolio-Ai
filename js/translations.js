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
        'hero-title': 'Building Intelligent <br><span class="text-gradient">Backend Solutions</span>',
        'hero-desc': 'I\'m Amir Dehestani, a Software Engineer specializing in Python, AI integration, and scalable backend architecture. I transform complex problems into elegant, automated solutions.',
        'hero-btn-projects': 'View Projects <i class="fas fa-arrow-right"></i>',
        'hero-btn-chat': 'Talk to AI Agent <i class="fas fa-robot"></i>',
        'hero-btn-meeting': 'Book a Meeting <i class="fas fa-calendar-check"></i>',

        // About Section
        'section-about': 'About Me',
        'about-exp-badge': 'Years of<br>Experience',
        'about-title': 'Architecting Digital Solutions with <span class="highlight">Python & AI</span>',
        'about-p1': 'I\'m a passionate backend developer and AI specialist based in Germany. I don\'t just write code; I build robust ecosystems where <strong>Python, FastAPI, and AI</strong> converge to solve complex real-world problems.',
        'about-p2': 'My philosophy is simple: automate the boring, optimize the complex, and innovate the future. Whether it\'s designing high-performance APIs or creating intelligent agents, I thrive on turning abstract concepts into deployed reality.',
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
        'exp-1-title': 'AI Agent & Chatbot Developer',
        'exp-2-title': 'Web Developer',
        'exp-3-title': 'n8n Automation Specialist',
        'exp-4-title': 'Web Developer',

        // Cross-Functional Section
        'cross-func-title': 'I\'m currently looking to join a <span style="color: var(--primary-color);">cross-functional</span> team',
        'cross-func-desc': 'that values improving people\'s lives through accessible design',

        // Projects Section
        'section-projects': 'Featured Projects',
        'proj-1-title': 'AI-Powered API System',
        'proj-1-desc': 'A comprehensive RESTful API built with FastAPI integrating machine learning models for intelligent data processing. Features JWT authentication, PostgreSQL database, and Docker containerization for seamless deployment.',
        'proj-2-title': 'Business Workflow Automation',
        'proj-2-desc': 'Custom n8n workflows automating business processes including data synchronization, email notifications, and CRM integration. Reduced manual tasks by 60% and improved operational efficiency across departments.',
        'proj-3-title': 'E-Commerce Backend Platform',
        'proj-3-desc': 'Scalable e-commerce backend built with Flask and SQLAlchemy. Features include user authentication, order management, payment processing integration, and real-time inventory tracking.',

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

        // Education Section
        'section-education': 'Education',
        'edu-1-title': 'Computer Software Engineering',
        'edu-1-school': 'Masterschool',
        'edu-1-desc': 'Comprehensive software engineering program focused on backend development, API design, database management, and modern development practices.',
        'edu-2-title': 'Bachelor\'s Degree in Avionics Engineering',
        'edu-2-school': 'Civil Aviation Technology College',
        'edu-2-desc': 'Specialized in aviation electronics, systems integration, and technical problem-solving. Developed strong analytical and engineering fundamentals.',

        // Contact Section
        'section-contact': 'Get In Touch',
        'contact-title': 'Let\'s Connect and Build the Future Together!',
        'contact-desc': 'I\'m always interested in hearing about new projects, opportunities, and collaborations. Whether you have a question or just want to say hi, feel free to reach out!',
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
        'footer-rights': '&copy; 2025 Amir Dehestani. All rights reserved.',
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
        'hero-title': 'Entwicklung intelligenter <br><span class="text-gradient">Backend-Lösungen</span>',
        'hero-desc': 'Ich bin Amir Dehestani, ein Softwareentwickler, der sich auf Python, KI-Integration und skalierbare Backend-Architektur spezialisiert hat. Ich verwandle komplexe Probleme in elegante, automatisierte Lösungen.',
        'hero-btn-projects': 'Projekte ansehen <i class="fas fa-arrow-right"></i>',
        'hero-btn-chat': 'Mit KI-Agent sprechen <i class="fas fa-robot"></i>',
        'hero-btn-meeting': 'Termin buchen <i class="fas fa-calendar-check"></i>',

        // About Section
        'section-about': 'Über mich',
        'about-exp-badge': 'Jahre<br>Erfahrung',
        'about-title': 'Architektur digitaler Lösungen mit <span class="highlight">Python & KI</span>',
        'about-p1': 'Ich bin ein leidenschaftlicher Backend-Entwickler und KI-Spezialist mit Sitz in Deutschland. Ich schreibe nicht nur Code; ich baue robuste Ökosysteme, in denen <strong>Python, FastAPI und KI</strong> zusammenkommen, um komplexe reale Probleme zu lösen.',
        'about-p2': 'Meine Philosophie ist einfach: das Langweilige automatisieren, das Komplexe optimieren und die Zukunft innovieren. Ob es um das Design von Hochleistungs-APIs oder die Erstellung intelligenter Agenten geht, ich liebe es, abstrakte Konzepte in die Realität umzusetzen.',
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
        'exp-1-title': 'KI-Agent & Chatbot-Entwickler',
        'exp-2-title': 'Webentwickler',
        'exp-3-title': 'n8n Automatisierungsspezialist',
        'exp-4-title': 'Webentwickler',

        // Cross-Functional Section
        'cross-func-title': 'Ich suche derzeit nach einem <span style="color: var(--primary-color);">funktionsübergreifenden</span> Team',
        'cross-func-desc': 'das Wert darauf legt, das Leben der Menschen durch barrierefreies Design zu verbessern',

        // Projects Section
        'section-projects': 'Ausgewählte Projekte',
        'proj-1-title': 'KI-gestütztes API-System',
        'proj-1-desc': 'Eine umfassende RESTful API, entwickelt mit FastAPI, die Machine-Learning-Modelle für intelligente Datenverarbeitung integriert. Verfügt über JWT-Authentifizierung, PostgreSQL-Datenbank und Docker-Containerisierung für nahtlose Bereitstellung.',
        'proj-2-title': 'Geschäftsprozess-Automatisierung',
        'proj-2-desc': 'Benutzerdefinierte n8n-Workflows zur Automatisierung von Geschäftsprozessen, einschließlich Datensynchronisation, E-Mail-Benachrichtigungen und CRM-Integration. Reduzierte manuelle Aufgaben um 60% und verbesserte die betriebliche Effizienz abteilungsübergreifend.',
        'proj-3-title': 'E-Commerce Backend-Plattform',
        'proj-3-desc': 'Skalierbares E-Commerce-Backend, entwickelt mit Flask und SQLAlchemy. Funktionen umfassen Benutzerauthentifizierung, Bestellverwaltung, Integration von Zahlungsabwicklungen und Bestandsverfolgung in Echtzeit.',

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

        // Education Section
        'section-education': 'Ausbildung',
        'edu-1-title': 'Computer Software Engineering',
        'edu-1-school': 'Masterschool',
        'edu-1-desc': 'Umfassendes Software-Engineering-Programm mit Schwerpunkt auf Backend-Entwicklung, API-Design, Datenbankmanagement und modernen Entwicklungspraktiken.',
        'edu-2-title': 'Bachelor-Abschluss in Avionik-Ingenieurwesen',
        'edu-2-school': 'Civil Aviation Technology College',
        'edu-2-desc': 'Spezialisiert auf Luftfahrtelektronik, Systemintegration und technische Problemlösung. Entwicklung starker analytischer und technischer Grundlagen.',

        // Contact Section
        'section-contact': 'Kontakt aufnehmen',
        'contact-title': 'Lassen Sie uns verbinden und die Zukunft gemeinsam bauen!',
        'contact-desc': 'Ich bin immer daran interessiert, von neuen Projekten, Möglichkeiten und Kooperationen zu hören. Ob Sie eine Frage haben oder einfach nur Hallo sagen wollen, zögern Sie nicht, mich zu kontaktieren!',
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
        'footer-rights': '&copy; 2025 Amir Dehestani. Alle Rechte vorbehalten.',
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
