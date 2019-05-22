console.log('Ready to go!');

function toggleClass(element, className){
  if (!element || !className){
      return;
  }
  var classString = element.className, nameIndex = classString.indexOf(className);
  if (nameIndex == -1) {
      classString += ' ' + className;
  }
  else {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
  }
  element.className = classString;
}

function menuToggle() {
  toggleClass(document.getElementById('slide-container'), 'opened');
  toggleClass(document.getElementById('overlay'), 'u-show');
}

function submenu_women() {
  toggleClass(document.getElementById('submenu_women'), 'collapse');
}

function submenu_men() {
  toggleClass(document.getElementById('submenu_men'), 'collapse');
}
function submenu_collections() {
  toggleClass(document.getElementById('submenu_collections'), 'collapse');
}


document.getElementById('Anchor').addEventListener('click', menuToggle, false);

const overlay = document.getElementById('overlay');
overlay.addEventListener('click', menuToggle, false);

const submenuWomen = document.getElementById('menu_women');
document.getElementById('menu_women').addEventListener('click', submenu_women, false);

const submenuMen = document.getElementById('menu_men');
submenuMen.addEventListener('click', submenu_men, false);

const submenuCollections = document.getElementById('menu_collections');
submenuCollections.addEventListener('click', submenu_collections, false);