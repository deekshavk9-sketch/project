// small helpers: nav toggle + simple search demo
document.addEventListener('DOMContentLoaded', () => {
  // wire all nav toggles to toggle the nav next to them
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      // find sibling nav by id pattern or nearest .nav
      const parent = btn.closest('.header-inner') || document;
      const nav = parent.querySelector('.nav');
      if (nav) nav.classList.toggle('show');
    });
  });

  // simple members search (client-side demo)
  const search = document.getElementById('search');
  if (search) {
    search.addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      const cards = document.querySelectorAll('#members-grid .member-card');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // demo events preview injection (on index)
  const eventsPreview = document.getElementById('events-preview');
  if (eventsPreview && eventsPreview.children.length < 1) {
    const demo = [
      { title:'Annual Alumni Meet — Dec 20, 2025', desc:'Reconnect with batchmates, talks & networking.' },
      { title:'Virtual Panel: Careers in AI — Oct 30, 2025', desc:'Alumni speakers from industry.' }
    ];
    demo.forEach(ev => {
      const a = document.createElement('article');
      a.className = 'event-card';
      a.innerHTML = `<h4>${ev.title}</h4><p>${ev.desc}</p>`;
      eventsPreview.appendChild(a);
    });
  }

  // subscribe form demo
  const form = document.getElementById('subscribe-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thanks! (This demo does not send data — hook it to your backend.)');
      form.reset();
    });
  }
});
