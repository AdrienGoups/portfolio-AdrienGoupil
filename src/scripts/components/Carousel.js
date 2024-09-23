import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
      breakpoints: {},
      loop: false,
    };
    this.init();
  }
  init() {
    this.setOptions();
    const swiper = new Swiper(this.element, this.options);
  }

  setOptions() {
    const data = this.element.dataset;
    if ('slides' in data) {
      const slideNb = parseFloat(data.slides);
      this.options.breakpoints = {
        768: {
          slidesPerView: slideNb,
        },
      };
    }
    if ('split' in data) {
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
      };
    }
    if ('autoplay' in data) {
      this.options.autoplay = {
        delay: 5000,
        pauseOnMouseEnter: true,
      };
    }
    if ('loop' in data) {
      this.options.loop = true;
    }
    if ('noSpacing' in data) {
      this.options.spaceBetween = 0;
    }
  }
}
