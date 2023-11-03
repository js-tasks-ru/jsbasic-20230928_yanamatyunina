import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps=steps;
    this.segments = this.steps - 1;

    this.elem = createElement(`<div class="slider">
      <div class="slider__thumb" style="left: 50%;">
        <span class="slider__value">2</span>
      </div>
      <div class="slider__progress" style="width: 50%;"></div>
      <div class="slider__steps">
      </div>
    </div>`)

    for(let i=0 ; i<this.steps ; i++) {
      this.span = createElement(`<span></span>`);
      this.elem.querySelector(".slider__steps").append(this.span);
    }
   
    this.elem.addEventListener("click", this.sliderClick);
    this.setValue(value);
    
  }
  setValue(value) {
    this.value = value;
    let percentValue = (value / this.segments) * 100;

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    thumb.style.left = `${percentValue}%`;
    progress.style.width = `${percentValue}%`;

    this.elem.querySelector('.slider__value').innerHTML = value;

    if (this.elem.querySelector('.slider__step-active')) {
      this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
    }
    this.elem.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active');
  }

  sliderClick = event => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let approximateValue = leftRelative * this.segments;
    this.setValue(Math.round(approximateValue));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }
}
