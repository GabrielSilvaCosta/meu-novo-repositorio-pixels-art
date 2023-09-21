/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */

// atividade 4.
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

// questao 5
const paletas = document.querySelectorAll('#color-palette .color');

const localStorage = () => {
  const colorPalette = {
    1: paletas[1].style.backgroundColor,
    2: paletas[2].style.backgroundColor,
    3: paletas[3].style.backgroundColor,
    4: paletas[4].style.backgroundColor,
  };
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
};

const restore = () => {
  const paletas = document.getElementsByClassName('color');
  const restaure = JSON.parse(localStorage.getItem('colorPalette'));
  if (restaure) {
    for (let index = 1; index < paletas.length; index += 1) {
      paletas[index].style.backgroundColor = restaure[index];
    }
  }
};
//----------------------------------------------------------------------
// atividade 6
const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelBoard.appendChild(pixel);
}
//-------------------------------------------------------------------------
const black = document.querySelector('.black');
black.classList.add('selected');
//----------------------------------------------------------------------
// atividade 9
const selectColor = () => {
  const coloresPalette = document.querySelectorAll('.color');
  for (let index = 0; index < coloresPalette.length; index += 1) {
    coloresPalette[index].addEventListener('click', (event) => {
      for (let i = 0; i < coloresPalette.length; i += 1) {
        coloresPalette[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};
//-------------------------------------------------------------------------------------
// 10 atividade
const px = document.querySelectorAll('.pixel');
if (document.getElementsByClassName('selected')[0].style.backgroundColor.value === undefined) {
  for (let i = 0; i < 4; i += 1) {
    const colorido = document.getElementsByClassName('color')[i];
    const seletor = window.getComputedStyle(colorido);
    colorido.style.backgroundColor = seletor.getPropertyValue('background-color');
  }
}
for (const index of px) {
  index.addEventListener('click', (event) => {
    const element = document.getElementsByClassName('selected')[0];
    const createColor = element.style.backgroundColor;
    console.log(element.style.backgroundColor);
    event.target.style.backgroundColor = createColor;
    //
  });
}

//---------------------------------------------------------------------------------
// atividade 11.

const clearBoardButton = document.querySelector('#clear-board');
const clearB = document.querySelectorAll('.pixel');
clearBoardButton.addEventListener('click', () => {
  clearB.forEach((pixel) => {
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
});
selectColor();
//------------------------------------------------------------------------------------
