import './styles/styles.scss';
import { createPopper } from '@popperjs/core';
import { slideToggle } from './libs/slide';
import { FIRST_SUB_MENUS_BTN, INNER_SUB_MENUS_BTN } from './libs/constants';
import Poppers from './libs/poppers';

const PoppersInstance = new Poppers();

// const togglePopper = (target) => {
//   if (window.getComputedStyle(target).visibility === 'hidden')
//     target.style.visibility = 'visible';
//   else target.style.visibility = 'hidden';
// };

// const subMenuPoppers = [];

// const updatePoppers = () => {
//   subMenuPoppers.forEach((popperEl) => {
//     popperEl.state.elements.popper.style.display = 'none';
//     popperEl.update();
//   });
// };

// const closePoppers = () => {
//   subMenuPoppers.forEach((popperEl) => {
//     // popperEl.state.elements.popper.style.display = 'none';
//     popperEl.state.elements.popper.style.visibility = 'hidden';
//   });
// };

const sidebarElem = document.getElementById('sidebar');

document.getElementById('btn-collapse').addEventListener('click', () => {
  // if (parentElement.classList.contains('open')) {
  sidebarElem.classList.toggle('collapsed');
  PoppersInstance.closePoppers();
  // closePoppers();
  setTimeout(() => {
    PoppersInstance.updatePoppers();
    // updatePoppers();
  }, 300);

  // }
});

//----------------------------------------

// const subMenusEl = document.querySelectorAll(
//   '.menu > ul > .menu-item.sub-menu'
// );

// subMenusEl.forEach((element) => {
//   const popperInstance = createPopper(element, element.lastElementChild, {
//     placement: 'right',
//     strategy: 'fixed',
//     // resize: true,
//     modifiers: [
//       {
//         name: 'computeStyles',
//         options: {
//           adaptive: false,
//         },
//       },
//       {
//         name: 'flip',
//         options: {
//           fallbackPlacements: ['left', 'right'],
//         },
//       },
//     ],
//   });

//   const clicker = (event) => {
//     if (
//       sidebarElem.classList.contains('collapsed') &&
//       !element.lastElementChild.contains(event.target) &&
//       !element.contains(event.target)
//     ) {
//       popperInstance.state.elements.popper.style.visibility = 'hidden';
//       // slideUp(popperInstance.state.elements.popper);
//     }
//   };

//   document.addEventListener('click', clicker, false);

//   subMenuPoppers.push(popperInstance);
// });

//---------------------------------------

// const subMenus = document.querySelectorAll('.menu-item.sub-menu > a');

// subMenus.forEach((item) => {
//   item.addEventListener('click', () => {
//     // const parentElement = item.parentElement;
//     // const menuList = item.nextElementSibling;

//     if (sidebarElem.classList.contains('collapsed'))
//       togglePopper(item.nextElementSibling);
//     else slideToggle(item.nextElementSibling);
//   });
// });

const defaultOpenMenus = document.querySelectorAll('.menu-item.sub-menu.open');

defaultOpenMenus.forEach((element) => {
  // const subMenuList = element.querySelector(':scope > .sub-menu-list')
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

console.log('app running');
