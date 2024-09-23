export default class Header {
  constructor(element) {
    this.element = element;
    this.lastScrollPosition = 0;
    this.scrollPosition = 0;
    this.html = document.documentElement;

    this.options = {
      threshold: 0.1,
    };
    this.init();
    this.initNavMobile();
  }

  init() {

    this.setOptions();

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  setOptions() {
    // Ici, on va lire les attributs data propres à
    // l'instance (this.element) et on va modifier
    // l'objet d'options au besoin
  }

  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirections();
  }

  setHeaderState() {
    if (this.scrollPosition > document.scrollingElement.scrollHeight * this.options.threshold) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  setDirections() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      //scroll vers le bas
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      //scroll vers le haut
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
