const menu = Array.from(document.getElementsByClassName('menu-choices'));
const menuOptions = ['breakfast', 'lunch', 'dinner', 'dessert', 'shake'];

let currMenuOpt = 0;

menu.forEach(option => {option.addEventListener('click', function() {
    showMenuOption(this.innerText.toLowerCase());
  })
})

// Change the display of the menu based on the selection of a new menu choice
function showMenuOption(menuChoice) {
  const originalMenuChoice = menuOptions[currMenuOpt];
  let changeMenuOpt = menuOptions.indexOf(menuChoice);

  //Toggle original menu off and new menu on
  document.getElementById(originalMenuChoice).classList.toggle('hidden');
  document.getElementById(menuChoice).classList.toggle('hidden');
  currMenuOpt = changeMenuOpt;
}
