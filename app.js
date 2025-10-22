// Utilidades
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Estado de tema
const root = document.documentElement;
const themeMeta = document.getElementById('theme-color-meta');

function applyTheme(night) {
  root.classList.toggle('is-night', night);
  // Ajustar meta theme-color (Android status bar)
  themeMeta?.setAttribute('content', night ? '#0a1220' : '#3aa0ff');
  localStorage.setItem('theme', night ? 'night' : 'day');
}

// Inicializar tema desde preferencia
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme ? savedTheme === 'night' : true); // empieza en "noche" por estética del héroe

// Toggle de tema
$('#themeToggle')?.addEventListener('click', () => applyTheme(!root.classList.contains('is-night')));

// Estrellas dinámicas
function seedStars(container, count = 120) {
  if (!container) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const n = reduce ? Math.min(40, count) : count;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    const size = (Math.random() * 1.8 + 0.4).toFixed(2);
    s.style.width = `${size}px`;
    s.style.height = `${size}px`;
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 100}%`;
    const d = (Math.random() * 6 + 4).toFixed(2);
    const delay = (Math.random() * 4).toFixed(2);
    s.style.animationDuration = `${d}s`;
    s.style.animationDelay = `${delay}s`;
    container.appendChild(s);
  }
}
seedStars($('.space .stars'));

// Parallax suave por puntero
const viewport = $('#viewport');
let rafId = null;
let targetX = 0, targetY = 0, curX = 0, curY = 0;

function onPointerMove(e) {
  const rect = viewport.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width; // 0..1
  const y = (e.clientY - rect.top) / rect.height; // 0..1
  targetX = (x - 0.5) * 2; // -1..1
  targetY = (y - 0.5) * 2;
  if (!rafId) rafId = requestAnimationFrame(tickParallax);
}

function tickParallax() {
  curX += (targetX - curX) * 0.08;
  curY += (targetY - curY) * 0.08;
  const layers = $$('[data-depth]');
  for (const el of layers) {
    const depth = Number(el.getAttribute('data-depth') || 8);
    const tx = curX * (depth * 0.6);
    const ty = curY * (depth * 0.6);
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  }
  if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
    rafId = requestAnimationFrame(tickParallax);
  } else {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

viewport?.addEventListener('pointermove', onPointerMove, { passive: true });

// Scroll snap: resaltar sección activa en navegación
const sections = $$('.section');
const dots = $$('.nav-dots .dot');
const byId = Object.fromEntries(sections.map(s => [s.id, s]));

function setActiveDot(id) {
  dots.forEach((d, i) => d.classList.toggle('active', sections[i]?.id === id));
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
      setActiveDot(entry.target.id);
    }
  });
}, { root: viewport, threshold: [0.6] });

sections.forEach(s => io.observe(s));

// Enlaces de puntos navegan suavemente
dots.forEach((dot, i) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();
    sections[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Enlace CTA del héroe a proyectos, con offset suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = byId[href.slice(1)];
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Mejora: enfoque al contenedor de scroll para accesibilidad
window.addEventListener('load', () => {
  viewport?.focus({ preventScroll: true });
});

