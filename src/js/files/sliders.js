/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
   Navigation,
   Pagination,
   Thumbs
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector('.top__slider')) { // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.top__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 30,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.top__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"


         // Брейкпоинты
         /*
         breakpoints: {
         	320: {
         		slidesPerView: 1,
         		spaceBetween: 0,
         		autoHeight: true,
         	},
         	768: {
         		slidesPerView: 2,
         		spaceBetween: 20,
         	},
         	992: {
         		slidesPerView: 3,
         		spaceBetween: 20,
         	},
         	1268: {
         		slidesPerView: 4,
         		spaceBetween: 30,
         	},
         },
         */
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.somes-nous__slider')) { // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.somes-nous__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         observer: true,
         observeParents: true,
         slidesPerView: 'auto',
         spaceBetween: 30,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"


         // Брейкпоинты

         breakpoints: {
            320: {
               spaceBetween: 20,
               centeredSlides: true,

            },
            768: {
               centeredSlides: false,

            },
            992: {

               spaceBetween: 30,
            },
            1268: {

            },
         },

         // События
         on: {

         }
      });
   }

   if (document.querySelector('.shop__slider')) {
      mySwiper = new Swiper('.shop__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination, Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 'auto',
         spaceBetween: 30,
         speed: 800,
         initialSlide: 1,
         pagination: {
            el: '.shop__pagination',
            clickable: true,
         },
         navigation: {
            nextEl: '.shop__next',
            prevEl: '.shop__prev',
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               spaceBetween: 20,
               centeredSlides: true,

            },
            768: {
               centeredSlides: false,
            },
            500: {
               spaceBetween: 30,
            },
         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.best-spare__slider')) {
      mySwiper = new Swiper('.best-spare__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination, Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 'auto',
         spaceBetween: 30,
         speed: 800,
         initialSlide: 0,
         pagination: {
            el: '.best-spare__pagination',
            clickable: true,
         },
         navigation: {
            nextEl: '.best-spare__next',
            prevEl: '.best-spare__prev',
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               spaceBetween: 12,
               centeredSlides: true,
               initialSlide: 1,
            },
            560: {},
            768: {
               spaceBetween: 30,
               initialSlide: 0,
               centeredSlides: false,
            },

         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.help__slider')) {
      mySwiper = new Swiper('.help__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination, Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         speed: 800,
         initialSlide: 1,
         pagination: {
            el: '.help__pagination',
            clickable: true,
         },
         navigation: {
            nextEl: '.help__next',
            prevEl: '.help__prev',
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               spaceBetween: 12,
               centeredSlides: true,
               slidesPerView: 1,

            },
            560: {
               slidesPerView: 2,
            },
            768: {
               spaceBetween: 30,
               slidesPerView: 3,
               centeredSlides: false,
            },

         },
         // События
         on: {

         }
      });
   }
   let thumb;
   if (document.querySelector('.product-thumb__slider')) {
      thumb = new Swiper('.product-thumb__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination, Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 17,
         speed: 800,
         direction: 'vertical',
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               spaceBetween: 8,

            },
            479: {
               spaceBetween: 27,
            },
            500: {

            },
         },
      });
   }
   if (document.querySelector('.product__slider')) {
      mySwiper = new Swiper('.product__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination, Navigation, Thumbs],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 100,
         speed: 800,
         loop: true,
         thumbs: {
            swiper: thumb,
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты

         // События
         on: {

         }
      });
   }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});
const breakpoint = window.matchMedia('(min-width:767px)');
// keep track of swiper instances to destroy later
let mySwiper = [];
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function () {
   // if larger viewport and multi-row layout needed
   if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) {
         return disableSwiper();
      }
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
   } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
      console.log(mySwiper.length);
      console.log(mySwiper);
   }
};
const disableSwiper = function () {
   console.log(mySwiper.length);
   if (mySwiper !== undefined && mySwiper.length > 0) {
      mySwiper.forEach(element => {
         element.destroy(true, true);
      });
   }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function () {

   if (document.querySelector('.social__slider')) {
      mySwiper[0] = new Swiper('.social__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 15,
         speed: 800,
         loop: true,
         pagination: {
            el: '.social__pagination',
            clickable: true,
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,

            },
            470: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }

   if (document.querySelector('.new__slider')) {
      mySwiper[1] = new Swiper('.new__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 15,
         speed: 800,
         loop: true,
         pagination: {
            el: '.new__pagination',
            clickable: true,
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 10,

            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.video-manual__slider2')) {
      mySwiper[2] = new Swiper('.video-manual__slider1', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая

         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 12,
         speed: 800,
         loop: true,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.best__slider')) {
      mySwiper[3] = new Swiper('.best__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 12,
         speed: 800,
         loop: true,
         pagination: {
            el: '.best__pagination'
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.video-manual__slider1')) {
      mySwiper[4] = new Swiper('.video-manual__slider2', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая

         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 12,
         speed: 800,
         loop: true,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();