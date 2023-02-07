const button = document.getElementById('button-random-color');
// eslint-disable-next-line no-use-before-define
button.addEventListener('click', generateRandom);
function generateRandom() {
  const colorcaixa = document.querySelectorAll('.color');
  colorcaixa[0].style.backgroundColor = 'black';
  for (let index = 1; index < colorcaixa.length; index += 1) {
    // eslint-disable-next-line no-use-before-define
    colorcaixa[index].style.backgroundColor = getRandomColor();
  }
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//---------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
function generateColorPalette() {
  const colorPalette = [];
  for (let i = 0; i < 5; i += 1) {
    colorPalette.push(getRandomColor());
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
  return colorPalette;
}

// eslint-disable-next-line no-unused-vars, sonarjs/no-identical-functions
function getColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let savedColorPalette = JSON.parse(localStorage.getItem('colorPalette'));
if (!savedColorPalette) {
  savedColorPalette = generateColorPalette();
}
//----------------------------------------------------------------------
// eslint-disable-next-line no-unused-vars
const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelBoard.appendChild(pixel);
}
