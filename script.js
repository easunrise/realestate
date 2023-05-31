'use strict';

//NAV LINK FIX
const navLinks = document.querySelectorAll('.navigation__link');
const navCheckbox = document.querySelector('.navigation__checkbox');

navLinks.forEach(btn => {
  btn.addEventListener('click', e => {
    navCheckbox.checked = !navCheckbox.checked;
  });
});
