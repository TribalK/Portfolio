const menu = Array.from(document.getElementsByClassName('menu-choices'));
let currMenuOpt = 1;
let changeMenuOpt = 0;

document.querySelector('#menu1').addEventListener('click', getBreakfast);
document.querySelector('#menu2').addEventListener('click', getLunch);
document.querySelector('#menu3').addEventListener('click', getDinner);
document.querySelector('#menu4').addEventListener('click', getDessert);
document.querySelector('#menu5').addEventListener('click', getShake);

function getBreakfast() {
  changeMenuOpt = 1;
  showMenuOption();
}

function getLunch() {
  changeMenuOpt = 2;
  showMenuOption();
}

function getDinner() {
  changeMenuOpt = 3;
  showMenuOption();
}

function getDessert() {
  changeMenuOpt = 4;
  showMenuOption();
}

function getShake() {
  changeMenuOpt = 5;
  showMenuOption();
}

function showMenuOption() {

}
