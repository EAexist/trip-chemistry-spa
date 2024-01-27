import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

import 'swiper/css';
import 'swiper/css/pagination';

export const SWIPERPROPS_PAGE : SwiperOptions | { className: string } = {
    modules: [ Pagination, Navigation ],
    loop: true,
    // rewind: true,
    speed: 800,
    slidesPerView: 1,
    pagination: {
        // clickable: true,
        el: '.pageSwiper-pagination', 
    },
    navigation: {
        prevEl: `.pageSwiper-prevEl`,
        nextEl: `.pageSwiper-nextEl`,
    },
    autoHeight: true,
    // className: "carousel__swiper",
}

export const SWIPERPROPS_TOPNAV : SwiperOptions | { className: string } = {
    modules: [ Navigation ],
    // loop: true,
    speed: 500,
    slidesPerView: 'auto',
    spaceBetween: 16,
}

export const SWIPERPROPS_CAROUSEL : SwiperOptions | { className: string } = {
    modules: [ Autoplay ],
    // autoplay: {,
    //     delay: autoPlayDelay,
    //     disableOnInteraction: false,
    // }}
    // loop: true,
    speed: 500,
    slidesPerView: 'auto',
    spaceBetween: 8,
    centerInsufficientSlides: true,
    // centeredSlides: true,
}

export const SWIPERPROPS_FOODCARDCAROUSEL : SwiperOptions | { className: string } = {
    modules: [ EffectCoverflow ],
    effect: 'coverflow',
    coverflowEffect:{
        rotate: 0,
        // scale: 0.9,
        depth: 350,
        stretch: -16,
    },
    // slidesPerView: 3,
    slidesPerView: 'auto',
    // spaceBetween: ,
    speed: 500,
    allowTouchMove: false,
    centeredSlides: true,
}