const container = document.getElementById('container');
for (let i = 1; i <= 25; i += 1) {
  const blocke = document.createElement('div');
  blocke.classList.add('blocke');
  blocke.textContent = i;
  container.appendChild(blocke);
}
