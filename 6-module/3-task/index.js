import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  
  constructor(slides) {
    this.slides = slides;
    this.count = 1;
    this.translate = 0;

    this.elem =createElement(`<div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div> `);

    for(let i=0 ; i<this.slides.length ; i++) {
      this.slide = createElement(`<div class="carousel__slide" data-id='${slides[i].id}'>
        <img src="/assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide"/>
        <div class="carousel__caption">
            <span class="carousel__price">€${slides[i].price.toFixed(2)}</span>
            <div class="carousel__title">${slides[i].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);
      
      this.elem.querySelector(".carousel__inner").append(this.slide);
    }
     
    this.right_arrow = this.elem.querySelector(".carousel__arrow_right");
    this.left_arrow = this.elem.querySelector(".carousel__arrow_left");
    this.img = this.elem.querySelector(".carousel__img");
    this.carousel = this.elem.querySelector(".carousel__inner");

    this.update_buttons();

    this.elem.onclick = ({target}) => {
      let button = target.closest('.carousel__button');
      if (button) {
        let id = target.closest('[data-id]').dataset.id;
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }

      if (target.closest('.carousel__arrow_right')) {
        this.handler_right();
      }

      if (target.closest('.carousel__arrow_left')) {
        this.handler_left();
      }
    };
    
  }

  update_buttons() {
    if(this.count==1) {
      this.left_arrow.style.display = 'none';
    } else {
      this.left_arrow.style.display = '';
    }
    if(this.count==this.slides.length) {
      this.right_arrow.style.display = 'none';
    } else {
      this.right_arrow.style.display = '';
    }
  }


  handler_right() {
    this.translate += this.img.offsetWidth;
    this.carousel.style.transform = 'translateX(-'+this.translate+"px)";
    this.count++;
    this.update_buttons();
  }
  
  handler_left() {
    this.translate -= this.img.offsetWidth;
    this.carousel.style.transform = 'translateX(-'+this.translate+'px)';
    this.count--;
    this.update_buttons();
  }
  
}
