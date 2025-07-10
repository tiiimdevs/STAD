// 3D Tilt Effect for Portfolio Image
document.addEventListener('DOMContentLoaded', () => {
  const tiltContainer = document.querySelector('.tilt-container');
  if (tiltContainer) {
    const tiltImage = tiltContainer.querySelector('img');

    tiltContainer.addEventListener('mousemove', (e) => {
      const bounds = tiltContainer.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      tiltImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    tiltContainer.addEventListener('mouseleave', () => {
      tiltImage.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      tiltImage.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1.01)';
    });
    const burger = document.getElementById("burger-icon");

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) {
    if (window.scrollY > 150) {
      burger.style.opacity = "0";
      burger.style.pointerEvents = "none";
    } else {
      burger.style.opacity = "1";
      burger.style.pointerEvents = "auto";
    }
  }
});

  }
window.addEventListener("scroll", () => {
  const burger = document.getElementById("burger-icon");

  if (window.scrollY > 150) {
    sidebar.classList.remove("hidden");

    if (window.innerWidth > 768) {
      nav.classList.add("nav-slide-left");
    }

    if (burger && window.innerWidth <= 768) {
      burger.style.opacity = "0";
      burger.style.pointerEvents = "none";
    }
  } else {
    sidebar.classList.add("hidden");
    nav.classList.remove("nav-slide-left");

    if (burger && window.innerWidth <= 768) {
      burger.style.opacity = "1";
      burger.style.pointerEvents = "auto";
    }
  }
});

  // Formspree Email Submit + Popup + Paper Plane Animation
  const form = document.querySelector('.contact-form form');
  const popup = document.getElementById('mail-confirmation');
  const sendButton = document.getElementById('send-button');

  if (!form || !popup || !sendButton) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const action = form.getAttribute('action');

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // ✈️ Trigger plane fly-out
        sendButton.classList.add('sent');

        // Change button text
        const buttonText = sendButton.querySelector('.button-text');
        if (buttonText) buttonText.textContent = 'Sent!';

        // Show confirmation popup
        popup.classList.remove('hidden');
        popup.classList.remove('show');
        void popup.offsetWidth;
        popup.classList.add('show');

        // Reset state after delay
        setTimeout(() => {
          popup.classList.remove('show');
          popup.classList.add('hidden');
          sendButton.classList.remove('sent');
          if (buttonText) buttonText.textContent = 'Send Message';
          form.reset();
        }, 3000);
      } else {
        return response.json().then(data => {
          throw new Error(data.error || "Form submission failed.");
        });
      }
    })
    .catch(error => {
      alert("Something went wrong:\n" + error.message);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const frame = document.querySelector(".portrait-frame.interactive");

  if (!frame) return;

  const originalTransform = frame.style.transform;

  frame.addEventListener("mousemove", (e) => {
    const rect = frame.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateX = Math.max(Math.min(deltaY / 30, 5), -5); // limit tilt
    const rotateY = Math.max(Math.min(deltaX / 30, 5), -5);

    frame.style.animation = "none"; // stop swinging while grabbing
    frame.style.transform = `rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
  });

  frame.addEventListener("mouseleave", () => {
    frame.style.transform = "";
    frame.style.animation = "swing 4s ease-in-out infinite";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  const sidebar = document.createElement('div');
  sidebar.classList.add('nav-sidebar', 'hidden');

  sidebar.innerHTML = `
  <a href="#about" title="About">
    <img src="icons/user.png" alt="About" />
    <span class="nav-label" data-i18n="nav_about">About</span>
  </a>
  <a href="#portfolio" title="Portfolio">
    <img src="icons/bag.png" alt="Portfolio" />
    <span class="nav-label" data-i18n="nav_portfolio">Portfolio</span>
  </a>
  <a href="#services" title="Services">
    <img src="icons/cogwheel.png" alt="Services" />
    <span class="nav-label" data-i18n="nav_services">Services</span>
  </a>
  <a href="#contact" title="Contact">
    <img src="icons/chat.png" alt="Contact" />
    <span class="nav-label" data-i18n="nav_contact">Contact</span>
  </a>
`;


  document.body.appendChild(sidebar);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      sidebar.classList.remove("hidden");
      nav.classList.add("nav-slide-left");
    } else {
      sidebar.classList.add("hidden");
      nav.classList.remove("nav-slide-left");
    }
  });
});
;

/* Language*/
// Add to script.js
const translations = {
  en: {
    nav_about: "About Me",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "Studio<br/>Ars Digitalis",
    hero_sub: "Art in Simplicity",
    about_title: "About Me",
    about_text1: "Hello! I'm <span class=\"highlight\">Tim</span>, a passionate <span class=\"highlight-blue\">trader</span> and <span class=\"highlight-blue\">web dev</span> with a love for crafting clean, user-friendly digital experiences. I mainly focus on <span class=\"highlight\">AI Automation</span> and <span class=\"highlight\">SEO</span>, and I'm constantly learning new tools to build better interfaces.",
    about_text2: "When I'm not coding, you'll find me analyzing charts, exploring new music or taking a calm walk in the nature. I believe in <span class=\"highlight\">lifelong learning</span>, <span class=\"highlight\">collaboration</span>, and pushing creative boundaries.",
    portfolio_title: "Portfolio",
    portfolio_sub: "Recent Customer Projects",
    services_title: "Services",
    services_sub: "What I Can Do For You",
    service1_title: "Web Design",
    service1_desc: "Clean, responsive designs tailored to your brand's identity.",
    service2_title: "Branding",
    service2_desc: "Modern visual identity and logo work to define your presence.",
    service3_title: "Development",
    service3_desc: "Custom-built websites with fast, scalable code and animations.",
    contact_title: "Contact",
    contact_desc: "Reach out to me for any web design project or collaboration.",
    location_label: "Location:",
    email_label: "Email:",
    contact_form: "Contact Form",
    form_name: "Your name:",
    form_email: "Your email:",
    form_message: "Your message:",
    send_button: "Send Message",
    message_sent: "Message Sent!",
    footer_rights: "all rights reserved"
  },
  de: {
    nav_about: "Über mich",
    nav_portfolio: "Portfolio",
    nav_services: "Dienstleistungen",
    nav_contact: "Kontakt",
    hero_title: "Studio<br/>Ars Digitalis",
    hero_sub: "Art in Simplicity",
    about_title: "Über mich",
    about_text1: "Hallo! Ich bin <span class=\"highlight\">Tim</span>, ein leidenschaftlicher <span class=\"highlight-blue\">Trader</span> und <span class=\"highlight-blue\">Webentwickler</span> mit Fokus auf klare, benutzerfreundliche digitale Erlebnisse. Mein Fokus liegt auf <span class=\"highlight\">KI-Automatisierung</span> und <span class=\"highlight\">SEO</span> und ich lerne ständig neue Werkzeuge, um bessere Schnittstellen zu entwickeln.",
    about_text2: "Wenn ich nicht gerade codiere, analysiere ich Charts, entdecke neue Musik oder mache einen Spaziergang in der Natur. Ich glaube an <span class=\"highlight\">lebenslanges Lernen</span>, <span class=\"highlight\">Zusammenarbeit</span> und kreatives Wachstum.",
    portfolio_title: "Portfolio",
    portfolio_sub: "Aktuelle Kundenprojekte",
    services_title: "Dienstleistungen",
    services_sub: "Was ich für Sie tun kann",
    service1_title: "Webdesign",
    service1_desc: "Sauberes, responsives Design abgestimmt auf Ihre Marke.",
    service2_title: "Branding",
    service2_desc: "Moderne visuelle Identität und Logos zur Markenstärkung.",
    service3_title: "Entwicklung",
    service3_desc: "Individuelle Websites mit schneller, skalierbarer Programmierung.",
    contact_title: "Kontakt",
    contact_desc: "Kontaktieren Sie mich für Webdesign oder Zusammenarbeit.",
    location_label: "Standort:",
    email_label: "E-Mail:",
    contact_form: "Kontaktformular",
    form_name: "Ihr Name:",
    form_email: "Ihre E-Mail:",
    form_message: "Ihre Nachricht:",
    send_button: "Nachricht senden",
    message_sent: "Nachricht gesendet!",
    footer_rights: "alle Rechte vorbehalten"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

let currentLang = 'en';

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  currentLang = lang;

  const flag = document.getElementById("lang-flag");
  if (flag) {
    flag.src = lang === 'en' ? 'icons/uk.png' : 'icons/ger.png';
    flag.alt = lang === 'en' ? 'English' : 'Deutsch';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById("lang-switch");

  if (langSwitch) {
    langSwitch.addEventListener("click", () => {
      const newLang = currentLang === 'en' ? 'de' : 'en';
      setLanguage(newLang);
    });

    setLanguage(currentLang); // initial load
  }
});



