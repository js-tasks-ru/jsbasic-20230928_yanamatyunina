import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    

    this.elem =createElement(` <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner"></nav>

    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`);

    for(let i=0 ; i<this.categories.length ; i++) {
      this.category = createElement(`<a href="#" class="ribbon__item" data-id=
      '${categories[i].id}'>${categories[i].name}</a>`);
      
      this.elem.querySelector(".ribbon__inner").append(this.category);
    }

    this.ribbonInner = this.elem.querySelector(".ribbon__inner");
    this.elem.querySelector(".ribbon__arrow_right").onclick = () => this.handler_right();
    this.elem.querySelector(".ribbon__arrow_left").onclick = () => this.handler_left();
    this.ribbonInner.onscroll = () => this.updateButtons();

    this.elem.onclick = (event) => {
      let item = event.target.closest('a');
      if (item!=null) {
        let oldItem = this.elem.querySelector(".ribbon__item_active");
        if (oldItem) {
          oldItem.classList.remove('ribbon__item_active');
        }

        item.classList.add('ribbon__item_active');
        this.value = item.dataset.id;

        this.elem.dispatchEvent(
          new CustomEvent('ribbon-select', {
            detail: this.value,
            bubbles: true,
          })
        );

        event.preventDefault();
      }
    };
  }

  handler_right() {
    this.ribbonInner.scrollBy(350, 0);
    this.updateButtons();
  }

  handler_left() {
    this.ribbonInner.scrollBy(-350, 0);
    this.updateButtons();
  }

  updateButtons() {
    if (this.ribbonInner.scrollLeft > 0) {
      this.elem.querySelector(".ribbon__arrow_left").classList.add('ribbon__arrow_visible');
    } else {
      this.elem.querySelector(".ribbon__arrow_left").classList.remove('ribbon__arrow_visible');
    }

    let scrollRight = this.ribbonInner.scrollWidth - (this.ribbonInner.scrollLeft + this.ribbonInner.clientWidth);
    if (scrollRight > 0) {
      this.elem.querySelector(".ribbon__arrow_right").classList.add('ribbon__arrow_visible');
    } else {
      this.elem.querySelector(".ribbon__arrow_right").classList.remove('ribbon__arrow_visible');
    }
  }

  
}
