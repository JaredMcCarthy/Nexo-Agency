let currentLang = "es";
let currentSlide = 0;
let isMobile = window.innerWidth <= 768;

const translations = {
  es: {
    langText: "English",
    heroTitle1: "Creamos Sitios Web Que",
    heroTitle2: "Hacen Crecer Tu Negocio",
    heroSubtitle:
      "Diseño web profesional para pequeñas empresas. Soluciones simples, elegantes y efectivas que te ayudan a destacar en línea.",
    ctaBtn: "Comenzar",
    servicesTitle: "Lo Que Ofrecemos",
    service1Title: "Diseño Web",
    service1Desc:
      "Diseños hermosos y modernos que capturan la esencia de tu marca y atraen a tus clientes.",
    service2Title: "Desarrollo",
    service2Desc:
      "Código limpio y eficiente que asegura que tu sitio web funcione sin problemas y cargue rápidamente.",
    service3Title: "Lanzamiento y Soporte",
    service3Desc:
      "Te ayudaremos a lanzar tu sitio y brindaremos soporte continuo para mantenerlo funcionando perfectamente.",
    whyTitle: "¿Por Qué Elegirnos?",
    whySubtitle:
      "Entendemos a las pequeñas empresas porque somos una. Nuestra misión es hacer que el diseño web profesional sea accesible y asequible.",
    feature1: "Soluciones personalizadas para pequeñas empresas",
    feature2: "Tiempos de entrega rápidos",
    feature3: "Paquetes de precios accesibles",
    feature4: "Diseños responsivos y amigables para móviles",
    feature5: "Optimizado para SEO desde el inicio",
    feature6: "Soporte y mantenimiento continuo",
    statsLabel: "Clientes Felices",
    contactTitle: "Contáctanos",
    nameLabel: "Nombre",
    emailLabel: "Email",
    messageLabel: "Mensaje",
    submitBtn: "Enviar Mensaje",
    locationTitle: "Ubicación",
    phoneTitle: "Teléfono",
    footerText: "© 2025 Nexo. Todos los derechos reservados.",
  },
  en: {
    langText: "Español",
    heroTitle1: "We Create Websites That",
    heroTitle2: "Grow Your Business",
    heroSubtitle:
      "Professional web design for small businesses. Simple, elegant and effective solutions that help you stand out online.",
    ctaBtn: "Get Started",
    servicesTitle: "What We Offer",
    service1Title: "Web Design",
    service1Desc:
      "Beautiful and modern designs that capture the essence of your brand and attract your customers.",
    service2Title: "Development",
    service2Desc:
      "Clean and efficient code that ensures your website runs smoothly and loads quickly.",
    service3Title: "Launch & Support",
    service3Desc:
      "We will help you launch your site and provide ongoing support to keep it running perfectly.",
    whyTitle: "Why Choose Us?",
    whySubtitle:
      "We understand small businesses because we are one. Our mission is to make professional web design accessible and affordable.",
    feature1: "Customized solutions for small businesses",
    feature2: "Fast delivery times",
    feature3: "Affordable pricing packages",
    feature4: "Responsive and mobile-friendly designs",
    feature5: "Optimized for SEO from the start",
    feature6: "Ongoing support and maintenance",
    statsLabel: "Happy Clients",
    contactTitle: "Contact Us",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitBtn: "Send Message",
    locationTitle: "Location",
    phoneTitle: "Phone",
    footerText: "© 2025 Nexo. All rights reserved.",
  },
};

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  updateText();
}

function updateText() {
  const trans = translations[currentLang];
  Object.keys(trans).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = trans[key];
    }
  });
}

function scrollToContact() {
  document
    .getElementById("contactSection")
    .scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(
      currentLang === "es"
        ? "¡Gracias por contactarnos! Te responderemos pronto."
        : "Thank you for contacting us! We will respond soon."
    );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  } else {
    alert(
      currentLang === "es"
        ? "Por favor completa todos los campos."
        : "Please fill in all fields."
    );
  }
}

function checkMobile() {
  isMobile = window.innerWidth <= 768;
  if (isMobile) {
    initCarousel();
  }
}

function initCarousel() {
  const dotsContainer = document.getElementById("serviceDots");
  dotsContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const cards = document.querySelectorAll(".service-card");
  const dots = document.querySelectorAll(".dot");

  cards.forEach((card, index) => {
    card.style.display = index === currentSlide ? "block" : "none";
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function autoSlide() {
  if (isMobile) {
    currentSlide = (currentSlide + 1) % 3;
    updateCarousel();
  }
}

window.addEventListener("resize", checkMobile);
checkMobile();

if (isMobile) {
  setInterval(autoSlide, 3000);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".service-card, .feature-item").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});
