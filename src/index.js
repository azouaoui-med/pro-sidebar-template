import './styles/styles.scss';
import { slideToggle } from './libs/slide';
import {
  FIRST_SUB_MENUS_BTN,
  INNER_SUB_MENUS_BTN,
  SIDEBAR_EL,
} from './libs/constants';
import Poppers from './libs/poppers';

const PoppersInstance = new Poppers();

/**
 * sidebar collapse handler
 */
document.getElementById('btn-collapse').addEventListener('click', () => {
  SIDEBAR_EL.classList.toggle('collapsed');
  PoppersInstance.closePoppers();
  if (SIDEBAR_EL.classList.contains('collapsed'))
    FIRST_SUB_MENUS_BTN.forEach((element) => {
      element.parentElement.classList.remove('open');
    });

  setTimeout(() => {
    PoppersInstance.updatePoppers();
  }, 300);
});

/**
 * sidebar toggle handler (on break point )
 */
document.getElementById('btn-toggle').addEventListener('click', () => {
  SIDEBAR_EL.classList.toggle('toggled');
  setTimeout(() => {
    PoppersInstance.updatePoppers();
  }, 300);
});

/**
 * toggle sidebar on overlay click
 */
document.getElementById('overlay').addEventListener('click', () => {
  SIDEBAR_EL.classList.toggle('toggled');
});

const defaultOpenMenus = document.querySelectorAll('.menu-item.sub-menu.open');

defaultOpenMenus.forEach((element) => {
  element.lastElementChild.style.display = 'block';
});

/**
 * handle top level submenu click
 */
FIRST_SUB_MENUS_BTN.forEach((element) => {
  element.addEventListener('click', () => {
    if (SIDEBAR_EL.classList.contains('collapsed'))
      PoppersInstance.togglePopper(element.nextElementSibling);
    else slideToggle(element.nextElementSibling);
  });
});

/**
 * handle inner submenu click
 */
INNER_SUB_MENUS_BTN.forEach((element) => {
  element.addEventListener('click', () => {
    slideToggle(element.nextElementSibling);
  });
});
