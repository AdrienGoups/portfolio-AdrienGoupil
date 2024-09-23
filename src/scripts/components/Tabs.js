export default class Tabs {
  constructor(element) {
    this.element = element;
    this.init();
  }
  init() {
    const buttons = document.querySelectorAll('.js-tab');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.onClick.bind(this));
    }
  }
  onClick(event) {
    const tabButtonActive = event.currentTarget;

    const tabId = tabButtonActive.dataset.tabId;

    const tabs = document.querySelectorAll('[data-tab-content-id]');
    const tabsButtons = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.classList.remove('is-active');
    }
    for (let i = 0; i < tabsButtons.length; i++) {
      const tabButton = tabsButtons[i];
      tabButton.classList.remove('is-active');
    }

    document
      .querySelector(`[data-tab-content-id='${tabId}']`)
      .classList.add('is-active');
    tabButtonActive.classList.add('is-active');
  }
}
