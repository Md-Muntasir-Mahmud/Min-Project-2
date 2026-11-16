// ---------- Product data ----------
const products = [
  { title: 'Spider – Acid Wash',       file: 'spider' },
  { title: 'Porsche 911 GT3R – Black', file: 'porsche-black' },
  { title: 'Sahr',                     file: 'sahr' },
  { title: 'Day One / Never Look Back',file: 'day-one' },
  { title: 'Human',                    file: 'human' },
  { title: 'Porsche 911 GT3R – White', file: 'porsche-white' },
  { title: 'Tokyo Street',             file: 'tokyo-street' },
  { title: 'The Original Brotherhood', file: 'brotherhood' },
];

// Where the ORDER NOW button goes (change this to your Messenger / WhatsApp / Instagram link if you like)
const ORDER_LINK = 'https://www.facebook.com/clovarwear';

// ---------- Build the grid ----------
const grid = document.getElementById('product-grid');

products.forEach((p) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className =
    'group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-neutral-900 ' +
    'transition duration-300 hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand';
  card.setAttribute('aria-label', 'View ' + p.title);
  card.innerHTML = `
    <img src="assets/images/${p.file}-thumb.jpg" alt="${p.title}" loading="lazy"
         class="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
    <div class="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-3 text-left
                transition duration-300 group-hover:translate-y-0">
      <span class="font-display text-xs uppercase tracking-wider text-white sm:text-sm">${p.title}</span>
    </div>`;
  card.addEventListener('click', () => openModal(p));
  grid.appendChild(card);
});

// ---------- Modal ----------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalOrder = document.getElementById('modal-order');
const modalClose = document.getElementById('modal-close');

function openModal(p) {
  modalImg.src = `assets/images/${p.file}.jpg`;
  modalImg.alt = p.title;
  modalTitle.textContent = p.title;
  modalOrder.href = ORDER_LINK;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modalImg.src = '';
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
