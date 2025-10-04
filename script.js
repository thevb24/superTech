// --- AOS Init ---
AOS.init({ duration: 800, once: true, offset: 80 });

// --- GSAP Hero Reveal ---
window.addEventListener('load', () => {
  gsap.from('.navbar', { y: -60, opacity: 0, duration: 0.6, ease: 'power2.out' });
  gsap.from('.hero-inner > *', { y: 20, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.2 });
});

// --- Filtering ---
const pills = document.querySelectorAll('.filter-pill');
const grid = document.getElementById('productGrid');

pills.forEach(pill => {
  pill.addEventListener('click', e => {
    pills.forEach(x => x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    const filter = e.currentTarget.dataset.filter;
    const cards = Array.from(grid.children);
    cards.forEach(card => {
      const show = filter === 'all' || card.getAttribute('data-cat') === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// --- Contact form ---
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const valid = name.value.trim() && email.validity.valid && phone.value.trim() && message.value.trim();
  if (!valid) {
    alert('Please fill all fields correctly.');
    return;
  }
  document.getElementById('formAlert').classList.remove('d-none');
  form.reset();
});
