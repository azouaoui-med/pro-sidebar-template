import './styles/styles.scss';
import { slideToggle } from './libs/slide';
import { FIRST_SUB_MENUS_BTN, INNER_SUB_MENUS_BTN } from './libs/constants';
import Poppers from './libs/poppers';

const PoppersInstance = new Poppers();

const sidebarElem = document.getElementById('sidebar');

document.getElementById('btn-collapse').addEventListener('click', () => {
  sidebarElem.classList.toggle('collapsed');
  PoppersInstance.closePoppers();
  if (sidebarElem.classList.contains('collapsed'))
    FIRST_SUB_MENUS_BTN.forEach((element) => {
      element.parentElement.classList.remove('open');
    });

  setTimeout(() => {
    PoppersInstance.updatePoppers();
  }, 300);
});

document.getElementById('btn-toggle').addEventListener('click', () => {
  sidebarElem.classList.toggle('toggled');
});

document.getElementById('overlay').addEventListener('click', () => {
  sidebarElem.classList.toggle('toggled');
});

const defaultOpenMenus = document.querySelectorAll('.menu-item.sub-menu.open');

defaultOpenMenus.forEach((element) => {
  element.lastElementChild.style.display = 'block';
});

FIRST_SUB_MENUS_BTN.forEach((element) => {
  element.addEventListener('click', () => {
    if (sidebarElem.classList.contains('collapsed'))
      PoppersInstance.togglePopper(element.nextElementSibling);
    else slideToggle(element.nextElementSibling);
  });
});

INNER_SUB_MENUS_BTN.forEach((element) => {
  element.addEventListener('click', () => {
    slideToggle(element.nextElementSibling);
  });
});
