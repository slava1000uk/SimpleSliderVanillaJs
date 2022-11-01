const sliderList = document.querySelector('.slider__list');
let sliderMove = 0;

const rightStep = () => {
  if (sliderMove == -1584) {
    sliderMove = 0;
  } else {
    sliderMove = sliderMove - 264;
  }
}

const leftStep = () => {
  if (sliderMove == 0) {
    sliderMove = -1584;
  } else {
    sliderMove = sliderMove + 264;
  }
}

document.querySelector('.left').addEventListener('click', function () {
  leftStep();
  sliderList.style.left = sliderMove + 'px';
});

document.querySelector('.right').addEventListener('click', function () {
    rightStep();
    sliderList.style.left = sliderMove + 'px';
});