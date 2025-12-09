// Language Translation Dictionary
const translations = {
    en: {
        'nav-about': 'About', 'nav-skills': 'Skills', 'nav-projects': 'Projects',
        'nav-experience': 'Experience', 'nav-education': 'Education', 'nav-hobbies': 'Hobbies',
        'nav-contact': 'Contact', 'lang-toggle': 'FR',
        'hero-name': 'Zaid Ababou', 'hero-title': 'Full Stack Web Developer',
        'hero-subtitle': 'Building reliable web applications with net interfaces and secure back-ends.',
        'hero-apprenticeship': 'Open to Alternance (Apprenticeship) - Starting September 2025',
        'hero-rhythm': 'Rhythm:', 'hero-rhythm-value': '1 week school / 2 weeks company',
        'hero-location': 'Location:', 'hero-location-value': 'Nantes, France',
        'hero-cta': 'Get In Touch', 'hero-cv': 'Download CV',
        'about-title': 'About Me',
        'about-p1': 'I master the full chain: front-end, API, database, and deployment. I explore modern frameworks continuously and aim to deliver stable, scalable solutions.',
        'about-p2': 'Currently pursuing my Master 1 in Computer Development at EPSI Rennes, I combine academic excellence with practical experience. My journey spans from managing databases to architecting user interfaces, always with a focus on clean code and best practices.',
        'about-p3': 'I\'m passionate about solving complex problems, collaborating with teams, and continuously learning the latest technologies to create impactful digital solutions.',
        'about-fullstack': 'Full Stack Development', 'about-fullstack-desc': 'Front-end, APIs, databases, and deployment',
        'about-continuous': 'Continuous Learning', 'about-continuous-desc': 'Always exploring modern frameworks and best practices',
        'skills-title': 'Skills', 'skills-frontend': 'Frontend', 'skills-backend': 'Backend', 'skills-tools': 'Tools & Databases',
        'projects-title': 'Projects', 'experience-title': 'Experience',
        'education-title': 'Education', 'education-master': 'Master 1 in Computer Development',
        'education-master-school': 'EPSI, Rennes',
        'education-master-desc': 'Pursuing advanced studies in computer development with focus on modern frameworks, full-stack development, and software architecture.',
        'education-master-date': '2025 - Present', 'education-licence': 'Licence in Computer Development',
        'education-licence-school': 'École Sup\'Management, Fès',
        'education-licence-desc': 'Completed comprehensive undergraduate program covering programming languages, databases, web development, and software engineering principles.',
        'education-licence-date': '2022 - 2025',
        'hobbies-title': 'Hobbies & Interests', 'hobbies-cars': 'Sports Cars',
        'hobbies-cars-desc': 'I\'m passionate about sports cars and automotive engineering. I enjoy exploring the latest models and understanding the technology behind high-performance vehicles.',
        'hobbies-travel': 'Trips & Travel',
        'hobbies-travel-desc': 'I love traveling and exploring new places. Whether it\'s discovering new cultures, cuisines, or landscapes, travel feeds my curiosity and broadens my perspective.',
        'hobbies-license': 'B Driver\'s License',
        'hobbies-license-desc': 'I hold a valid B driver\'s license, enabling me to travel independently and adding to my flexibility for work-related transportation and road trips.',
        'contact-title': 'Get In Touch', 'contact-subtitle': 'Ready to discuss opportunities? I\'m always interested in connecting with innovative teams and exploring new challenges.',
        'contact-phone': 'Phone', 'contact-email': 'Email', 'contact-location': 'Location',
        'contact-email-btn': 'Send Email', 'contact-github': 'GitHub Profile', 'contact-cv-btn': 'Download CV',
        'contact-form-title': 'Send Me a Message', 'contact-name-label': 'Name', 'contact-email-label': 'Email',
        'contact-subject-label': 'Subject', 'contact-message-label': 'Message', 'contact-submit': 'Send Message',
        'footer-copyright': '© 2025 Zaid Ababou. All rights reserved.',
        'footer-apprenticeship': 'Open to Alternance (Apprenticeship) - Starting September 2025'
    },
    fr: {
        'nav-about': 'À propos', 'nav-skills': 'Compétences', 'nav-projects': 'Projets',
        'nav-experience': 'Expérience', 'nav-education': 'Formation', 'nav-hobbies': 'Loisirs',
        'nav-contact': 'Contact', 'lang-toggle': 'EN',
        'hero-name': 'Zaid Ababou', 'hero-title': 'Développeur Web Full Stack',
        'hero-subtitle': 'Construire des applications web fiables avec des interfaces nettes et des backends sécurisés.',
        'hero-apprenticeship': 'Ouvert à l\'Alternance - À partir de septembre 2025',
        'hero-rhythm': 'Rythme:', 'hero-rhythm-value': '1 semaine école / 2 semaines entreprise',
        'hero-location': 'Localisation:', 'hero-location-value': 'Nantes, France',
        'hero-cta': 'Me Contacter', 'hero-cv': 'Télécharger CV',
        'about-title': 'À Propos de Moi',
        'about-p1': 'Je maîtrise la chaîne complète: frontend, API, base de données et déploiement. J\'explore continuellement les frameworks modernes et je vise à fournir des solutions stables et évolutives.',
        'about-p2': 'Actuellement en Master 1 Développement Informatique à EPSI Rennes, je combine l\'excellence académique avec l\'expérience pratique. Mon parcours s\'étend de la gestion des bases de données à l\'architecture des interfaces utilisateur, toujours en mettant l\'accent sur un code propre et les meilleures pratiques.',
        'about-p3': 'Je suis passionné par la résolution de problèmes complexes, la collaboration en équipe et l\'apprentissage continu des dernières technologies pour créer des solutions numériques percutantes.',
        'about-fullstack': 'Développement Full Stack', 'about-fullstack-desc': 'Frontend, APIs, bases de données et déploiement',
        'about-continuous': 'Apprentissage Continu', 'about-continuous-desc': 'Toujours à la recherche de nouveaux frameworks et meilleures pratiques',
        'skills-title': 'Compétences', 'skills-frontend': 'Frontend', 'skills-backend': 'Backend', 'skills-tools': 'Outils & Bases de Données',
        'projects-title': 'Projets', 'experience-title': 'Expérience',
        'education-title': 'Formation', 'education-master': 'Master 1 Développement Informatique',
        'education-master-school': 'EPSI, Rennes',
        'education-master-desc': 'Poursuite d\'études avancées en développement informatique avec focus sur les frameworks modernes, le développement full-stack et l\'architecture logicielle.',
        'education-master-date': '2025 - Présent', 'education-licence': 'Licence en Développement Informatique',
        'education-licence-school': 'École Sup\'Management, Fès',
        'education-licence-desc': 'Programme d\'études complètes couvrant les langages de programmation, les bases de données, le développement web et les principes d\'ingénierie logicielle.',
        'education-licence-date': '2022 - 2025',
        'hobbies-title': 'Loisirs & Intérêts', 'hobbies-cars': 'Voitures de Sport',
        'hobbies-cars-desc': 'Je suis passionné par les voitures de sport et l\'ingénierie automobile. J\'aime explorer les derniers modèles et comprendre la technologie derrière les véhicules haute performance.',
        'hobbies-travel': 'Voyages',
        'hobbies-travel-desc': 'J\'adore voyager et explorer de nouveaux lieux. Qu\'il s\'agisse de découvrir de nouvelles cultures, cuisines ou paysages, les voyages alimentent ma curiosité et élargissent ma perspective.',
        'hobbies-license': 'Permis de Conduire B',
        'hobbies-license-desc': 'Je possède un permis de conduire B valide, ce qui me permet de voyager de manière indépendante et ajoute de la flexibilité pour les transports liés au travail et les road trips.',
        'contact-title': 'Me Contacter', 'contact-subtitle': 'Prêt à discuter des opportunités? Je suis toujours intéressé par la connexion avec des équipes innovantes et l\'exploration de nouveaux défis.',
        'contact-phone': 'Téléphone', 'contact-email': 'E-mail', 'contact-location': 'Localisation',
        'contact-email-btn': 'Envoyer un E-mail', 'contact-github': 'Profil GitHub', 'contact-cv-btn': 'Télécharger CV',
        'contact-form-title': 'Envoyez-moi un Message', 'contact-name-label': 'Nom', 'contact-email-label': 'E-mail',
        'contact-subject-label': 'Sujet', 'contact-message-label': 'Message', 'contact-submit': 'Envoyer le Message',
        'footer-copyright': '© 2025 Zaid Ababou. Tous droits réservés.',
        'footer-apprenticeship': 'Ouvert à l\'Alternance - À partir de septembre 2025'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    const langToggle = document.getElementById('lang-toggle');
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    if (langToggle) langToggle.textContent = translations[lang]['lang-toggle'];
    if (mobileLangToggle) mobileLangToggle.textContent = translations[lang]['lang-toggle'];
    
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}

const langToggle = document.getElementById('lang-toggle');
const mobileLangToggle = document.getElementById('mobile-lang-toggle');

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        translatePage(currentLanguage);
    });
}

if (mobileLangToggle) {
    mobileLangToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        translatePage(currentLanguage);
    });
}

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('#menu-btn') && !e.target.closest('#mobile-menu') && !e.target.closest('#mobile-lang-toggle')) {
        mobileMenu.classList.add('hidden');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.classList.remove('text-teal-600', 'font-bold');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-teal-600', 'font-bold');
        }
    });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:zaid.ababouu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLanguage === 'en' ? '✓ Message Prepared!' : '✓ Message Préparé!';
    submitBtn.classList.add('bg-green-600');
    submitBtn.classList.remove('bg-teal-600', 'hover:bg-teal-700');
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('bg-green-600');
        submitBtn.classList.add('bg-teal-600', 'hover:bg-teal-700');
        contactForm.reset();
    }, 3000);
});

window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        if (scrollBtn) scrollBtn.style.display = 'block';
    } else {
        if (scrollBtn) scrollBtn.style.display = 'none';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

const downloadButtons = document.querySelectorAll('[download]');
downloadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
        // If href is a real file path, allow download
        if (href && href !== '#') {
            return; // Let browser handle the download
        }
        // If no valid path, show message
        e.preventDefault();
        const message = currentLanguage === 'en' 
            ? 'CV Download:\n\nTo add your CV, replace the href attribute with your CV file path.\nExample: href="path-to-your-cv.pdf"'
            : 'Téléchargement du CV:\n\nPour ajouter votre CV, remplacez l\'attribut href par le chemin d\'accès à votre fichier CV.\nExemple: href="chemin-vers-votre-cv.pdf"';
        alert(message);
    });
});

window.addEventListener('load', () => {
    translatePage(currentLanguage);
    
    const currentSection = document.querySelector('section[id]');
    if (currentSection) {
        const sectionId = currentSection.getAttribute('id');
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            if (link.getAttribute('href').slice(1) === sectionId) {
                link.classList.add('text-teal-600', 'font-bold');
            }
        });
    }
});

window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('hero');
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight) {
        heroSection.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
    }
});

window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
    document.querySelectorAll('nav').forEach(nav => nav.style.display = 'none');
});

window.addEventListener('afterprint', () => {
    document.querySelectorAll('nav').forEach(nav => nav.style.display = 'block');
});

console.log('Portfolio website loaded successfully!');
