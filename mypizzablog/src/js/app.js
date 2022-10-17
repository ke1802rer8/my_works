import * as flsFunction from "./modules/functions.js";
import * as flsFunctions from"./modules/scripts.js";

flsFunction.isWebp();
flsFunctions.myFunction();

//Open window-----------------------------------------------------
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');

let unlock = true;

const timeout = 800;

if( popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
    for(let index = 0; index < popupCloseIcon.length; index++){
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup){
    if(curentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive){
            popupClose(popupActive, false);

        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e){
            if(!e.target.closest('.popup__content')){
                popupClose(e.target.closest('.popup'));
            }
        });
    }
} 

function popupClose(popupActive, doUnlock = true){
    if(unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnLock();
        }
    }
}

//Sliders-----------------------------------


const swiperr = new Swiper('.image-slider',{
//Стрелки

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

            
});
const swiper = new Swiperr('.review__blockk',{
//Стрелки

navigation: {
        nextEl: '.swiper-button-nextt',
        prevEl: '.swiper-button-prevv'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    spaceBetween: 30,
    
    slideToClickedSlide: true,    
});
