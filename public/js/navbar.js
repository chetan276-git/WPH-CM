const menu1 = document.querySelector('.menu');
const menuSection = menu1.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
let subMenu1;

menuSection.addEventListener('click', (e) => {
  if (!menu1.classList.contains('active')) {
    return;
  }
  if (e.target.closest('.menu-item-has-children')) {
    const hasChildren = e.target.closest('.menu-item-has-children');
    showSubMenu(hasChildren);
  }
  if (e.target.closest('.menu-item-has-child-children')) {
    const hasChildrenChild = e.target.closest('.menu-item-has-child-children');
    showSubMenuChild(hasChildrenChild);
  }
});

menuArrow.addEventListener('click', () => {
  hideSubMenu();
});

menuToggle.addEventListener('click', () => {
  toggleMenu();
});

menuClosed.addEventListener('click', () => {
  toggleMenu();
});

menuOverlay.addEventListener('click', () => {
  toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
  menu1.classList.toggle('active');
  menuOverlay.classList.toggle('active');
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector('.menu-subs');
  subMenu.classList.add('active');
  subMenu.style.animation = 'slideLeft 0.5s ease forwards';
  const menuTitle =
    hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
  menu1.querySelector('.menu-mobile-title').innerHTML = menuTitle;
  menu1.querySelector('.menu-mobile-header').classList.add('active');
}

function showSubMenuChild(child) {
  subMenu1 = child.querySelector('.menu-child-sub');
  subMenu1.classList.add('active');
  subMenu1.style.animation = 'slideLeft 0.5s ease forwards';
  const menuTitle =
    child.querySelector('i').parentNode.childNodes[0].textContent;
  menu1.querySelector('.menu-mobile-title').innerHTML = menuTitle;
  menu1.querySelector('.menu-mobile-header').classList.add('active');
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
  subMenu.style.animation = 'slideRight 0.5s ease forwards';
  subMenu1.style.animation = 'slideRight 0.5s ease forwards';
  setTimeout(() => {
    subMenu.classList.remove('active');
    subMenu1.classList.remove('active');
  }, 300);

  menu1.querySelector('.menu-mobile-title').innerHTML = '';
  menu1.querySelector('.menu-mobile-header').classList.remove('active');
}

// Windows Screen Resizes Function
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu1.classList.contains('active')) {
      toggleMenu();
    }
  }
};
