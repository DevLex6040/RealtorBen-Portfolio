document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.house-cards, .services-card, .my-values-say-section, .experience-cards');
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = (i % 2) * 90 + 'ms'; io.observe(el); });
});

document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.navlinks-container');
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('navlinks');
  if (!bar || !btn || !menu) return;
  const onScroll = () => bar.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  btn.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', (e) => { if (!bar.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 768) setOpen(false); });
});
