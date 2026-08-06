/**
 * Matias Furlani Portfolio — enhanced interactivity
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initNavObservers();
  initScrollReveal();
  initTypewriter();
  initTechCarousel();
  initClock();
  initYear();
  initContactForm();
});

/* ------------------------------------------------------------------
   Theme toggle (persisted + system preference)
   ------------------------------------------------------------------ */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const moon = document.getElementById('icon-moon');
  const sun = document.getElementById('icon-sun');
  const root = document.documentElement;

  if (toggle) {
    const syncIcons = () => {
      const isDark = root.dataset.theme === 'dark';
      if (moon) moon.style.display = isDark ? 'none' : '';
      if (sun) sun.style.display = isDark ? '' : 'none';
    };
    syncIcons();

    toggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncIcons();
    });
  }
}

/* ------------------------------------------------------------------
   Mobile menu
   ------------------------------------------------------------------ */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  const close = () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ------------------------------------------------------------------
   Active link highlight
   ------------------------------------------------------------------ */
function initNavObservers() {
  const secs = document.querySelectorAll('section[id]');
  const nav = document.querySelectorAll('.navbar__link');
  if (!secs.length || !nav.length) return;

  const linkByHref = {};
  nav.forEach(l => {
    const href = l.getAttribute('href');
    if (href && href.startsWith('#')) linkByHref[href] = l;
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = '#' + e.target.id;
      nav.forEach(l => l.classList.remove('navbar__link--active'));
      if (linkByHref[id]) linkByHref[id].classList.add('navbar__link--active');
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  secs.forEach(s => io.observe(s));
}

/* ------------------------------------------------------------------
   Scroll reveal
   ------------------------------------------------------------------ */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

/* ------------------------------------------------------------------
   Typewriter
   ------------------------------------------------------------------ */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const logo = document.querySelector('.hero__logo');

  const phrases = [
    'Matias Furlani',
    'Desarrollador Backend'
  ];

  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { el.textContent = phrases[0]; return; }

  const setLogoUp = up => { if (logo) logo.classList.toggle('is-up', up); };

  let pIndex = 0, cIndex = 0, deleting = false;

  const tick = () => {
    const cur = phrases[pIndex];
    let delay = 85;

    if (!deleting) {
      cIndex++;
      delay = 85;
      if (cIndex === cur.length) { delay = 2200; deleting = true; setLogoUp(true); }
    } else {
      cIndex--;
      delay = 40;
      if (cIndex === 0) {
        setLogoUp(false);
        pIndex = (pIndex + 1) % phrases.length;
        deleting = false;
        delay = 350;
      }
    }

    el.textContent = cur.slice(0, cIndex);
    setTimeout(tick, delay);
  };
  tick();
}

/* ------------------------------------------------------------------
   Clock + year
   ------------------------------------------------------------------ */
function initTechCarousel() {
  const track = document.querySelector('.tech-carousel__track');
  if (!track || !track.children.length) return;

  const items = Array.from(track.children);

  // Duplicate the set once to enable a seamless infinite marquee.
  if (track.dataset.duplicated !== '1') {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
    track.dataset.duplicated = '1';
  }

  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { track.classList.remove('is-animating'); return; }

  track.classList.add('is-animating');

  const wrap = track.parentElement;
  const stop = () => track.classList.add('is-paused');
  const start = () => track.classList.remove('is-paused');
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { track.style.animationPlayState = 'paused'; }
    else { track.style.animationPlayState = ''; }
  });
}

/* ------------------------------------------------------------------
   Clock + year
   ------------------------------------------------------------------ */
function initClock() {
  const clock = document.getElementById('display-time');
  if (!clock) return;
  const pad = n => String(n).padStart(2, '0');
  const update = () => {
    const d = new Date();
    clock.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  update();
  setInterval(update, 10000);
}

function initYear() {
  const y = document.getElementById('current-year');
  if (y) y.textContent = new Date().getFullYear();
}

/* ------------------------------------------------------------------
   Contact form — validation + real submission via mailto
   ------------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const res = document.getElementById('response-message');
  if (!form || !res) return;

  const show = (ok, msg) => {
    res.textContent = msg;
    res.className = 'response-message ' + (ok ? 'response-message--success' : 'response-message--error');
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      show(false, 'Por favor completá todos los campos.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      show(false, 'Ingresá un correo electrónico válido.');
      return;
    }

    const subject = 'Mensaje desde el portafolio — ' + name;
    const body = 'Nombre: ' + name + '\nCorreo: ' + email + '\n\n' + message;
    const href = 'mailto:matiasfurlani99@gmail.com?subject='
      + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Abriendo tu correo…'; }
    window.location.href = href;

    setTimeout(() => {
      show(true, 'Se abrió tu cliente de correo con el mensaje listo. Solo falta enviarlo.');
      if (btn) { btn.disabled = false; btn.textContent = 'Enviar mensaje'; }
    }, 900);
  });
}