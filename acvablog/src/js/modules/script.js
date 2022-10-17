
export function myFunction() {  
    window.onclick = function(event) {
        document.getElementById("dropdown").classList.toggle("show");
        if (!event.target.matches('.btn-bars')) {
            var dropdowns = document.getElementsByClassName("header__dropdown");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

export function sliders() {
   
    const swiper = new Swiper('.review__display-mini', {
        //Стрелки

            

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
            slidesPerView: 1,
            centeredSlides: true,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,
            
            slideToClickedSlide: true,
            
        
        });
    
        const swiperr = new Swiper('.review__display-big', {
        //Стрелки

            

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
            slidesPerView: 2,
            centeredSlides: true,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,
            
            slideToClickedSlide: true,
            
        
        });

    
}
//