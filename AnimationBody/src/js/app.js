import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

//animation

let bodyAnimation = () => {
    const tlMessageBtn = gsap.timeline({ defaults: {duration: 1}, repeat: -1});
    tlMessageBtn.to('.img__body', {  y: 10})
        .to('.img__body', { y: 0});
    return tlMessageBtn;
  
}
const tl = gsap.timeline({defaults: {duration: 1}});
tl.add(bodyAnimation);