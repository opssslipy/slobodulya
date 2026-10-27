// Подставляем фото, если файл существует (иначе остаётся цветная заглушка)
document.querySelectorAll('[data-photo]').forEach(el => {
  const img = new Image();
  img.onload = () => { el.style.backgroundImage = `url(${img.src})`; };
  img.src = el.dataset.photo;
});

// Фильтр галереи
const chips = document.querySelectorAll('.chip');
const works = document.querySelectorAll('.work');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    works.forEach(w => w.classList.toggle('hidden', f !== 'all' && w.dataset.cat !== f));
  });
});

// Чат помощи
const chatPanel = document.getElementById('chatPanel');
const chatAnswer = document.getElementById('chatAnswer');
document.getElementById('chatToggle').addEventListener('click', () => { chatPanel.hidden = !chatPanel.hidden; });
document.getElementById('chatClose').addEventListener('click', () => { chatPanel.hidden = true; });
document.querySelectorAll('.quick button').forEach(b => {
  b.addEventListener('click', () => {
    chatAnswer.textContent = b.dataset.answer;
    chatAnswer.hidden = false;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
