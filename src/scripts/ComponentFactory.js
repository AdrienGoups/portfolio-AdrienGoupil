import Youtube from './components/Youtube';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Scrolly from './components/Scrolly';
import Tabs from './components/Tabs';
import Form from './components/Form';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Youtube,
      Carousel,
      Header,
      Scrolly,
      Tabs,
      Form,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        console.log(componentName);
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
