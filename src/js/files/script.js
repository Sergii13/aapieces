// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";
import {
   _slideUp
} from "./functions.js";
import {
   _slideDown
} from "./functions.js";
import {
   _slideToggle
} from "./functions.js";
if (window.innerWidth > 768) {
   document.addEventListener('click', function (e) {
      let target;
      if (!e.target.closest('.menu') && document.documentElement.classList.contains('menu-open')) {
         console.log('click');
         document.documentElement.classList.remove('menu-open');

      }
   })
}

let textareaItems = document.querySelectorAll('[data-count]');
if (textareaItems.length > 0) {
   textareaItems.forEach(i => {
      i.addEventListener('input', function () {
         let textInput = i.parentElement.querySelector('[data-count-text]');
         if (textInput) {
            textInput.innerHTML = i.value.length + '/' + '1000';
         }
      })
   });
}
document.addEventListener('click', function (e) {
   let target;
   if (e.target.closest('.card__heart')) {
      target = e.target.closest('.card__heart');
   }
   if (target) {
      target.classList.toggle('active');
   }
})

let infoBlock = document.querySelector('[data-info]');

if (infoBlock) {
   let hideInfo = infoBlock.querySelector('[data-info-block]');
   if (!infoBlock.classList.contains('open')) {
      _slideUp(hideInfo, 500);
   }
   infoBlock.addEventListener('click', function (e) {
      let target;
      if (e.target.closest('[data-info-open]')) {
         infoBlock.classList.add('open');
         if (hideInfo) {
            _slideDown(hideInfo, 500);
         }
      } else if (e.target.closest('[data-info-toggle]')) {
         infoBlock.classList.toggle('open');
         if (hideInfo) {
            _slideToggle(hideInfo, 500);
         }
      }
   })
}