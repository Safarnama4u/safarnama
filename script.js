const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchNote = document.getElementById('searchNote');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function searchMessage(term) {
  const clean = term.trim();

  if (!clean) {
    searchNote.textContent = 'Try: waterfall, mountain, fort, beach';
    return;
  }

  searchNote.textContent =
    `Safarnama search is ready for “${clean}”. Destination search will be connected as we add the guides.`;
}

searchBtn.addEventListener('click', () => {
  searchMessage(searchInput.value);
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchMessage(searchInput.value);
  }
});

document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const term = card.dataset.search;
    searchInput.value = term;
    searchMessage(term);
    document.getElementById('destinations').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
