
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');

let unlock = true;
// Задержка для защиты от двойного открытия формы


if (popupLinks.length > 0) {
    popupLinks.forEach((el) => {
    // for (var index = 0; index < popupLinks.length; index++) {
        // popupLinks = popupLinks[index];
        el.addEventListener('click', function (e) {
        // popupLinks[index].addEventListener('click', function (e) {
            
            // const popupName = popupLinks.getAttribute('href');
            const curentPopup = document.querySelector(".popup");
            popupOpen(curentPopup);
            e.preventDefault();
        });
    });
}
let popupCloseIcon = document.querySelectorAll('.popup-close');
    
if (popupCloseIcon.length > 0) {
    popupCloseIcon.forEach((item) => {
    // for (let index=0; index < popupCloseIcon.length; index++) {
        // const el = popupCloseIcon[index];
        item.addEventListener('click', function (e) {
            popupClose(item.closest('.popup'));
            e.preventDefault();
        });
    });
}

function popupOpen (curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup .open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup-content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}
// блокируем скролл
// function bodyLock() {
//     // считаем ширину скролла
//     let lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';
   
    
//     if (lockPaddingValue.length > 0) {
//         // for (let index = 0; index < lockPadding.length; index++) {
//             // const el = lockPadding[index];
//             lockPaddingValue.forEach((item) => {
//             item.style.marginRight = lockPaddingValue;
            
//         });
    
    
//     body.style.marginRight = lockPaddingValue;
    
//     body.classList.add('lock');
//     fixBlocks.forEach((el) => {
//         el.style.marginRight = lockPaddingValue;
//     });

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     },  timeout);
// }
// }
let bodyLock = function () {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let pagePosition = window.scrollY;
    fixBlocks.forEach((el) => {
          el.style.paddingRight = paddingOffset;
      });
      body.style.paddingRight = paddingOffset;
      body.classList.add('lock');
      body.dataset.position = pagePosition;
      body.style.top = -pagePosition + 'px';
  }
  
// function bodyUnlock() {
//     setTimeout(function () {
//         if (lockPadding.length > 0) { 
//             for (let index = 0; index < lockPadding.length; index++) {
//                 // const el = lockPadding[index];
//                 lockPadding[index].style.marginRight = '0px';
//             }
//         }
//         body.style.marginRight = '0px';
//         body.classList.remove('lock');
//         fixBlocks.forEach((el) => {
//             el.style.marginRight = '0px';
//         });
//     }, timeout);

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     },  timeout);
    
// }
let bodyUnlock = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('lock');
  fixBlocks.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	body.style.paddingRight = '0px';
	window.scroll({top: pagePosition, left: 0});
	body.removeAttribute('data-position');
}
// отслеживаем нажатие клавиш для закрытия формы по Esc
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
    // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMathesSelector;
    }
})();
