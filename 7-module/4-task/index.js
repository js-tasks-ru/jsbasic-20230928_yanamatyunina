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
     
    this.elem.querySelector(".slider__steps").querySelector("span").classList.add("slider__step-active");

    this.elem.ondragstart = (event) => {
      event.preventDefault();
      this.setValue();
    };
    this.elem.addEventListener("click", this.sliderClick);
    this.elem.addEventListener("pointerdown", this.pointerDown);
    
  }

  sliderClick = (e) => {
    let value = this.elem.querySelector(".slider__value");
    let progress = this.elem.querySelector(".slider__progress");
    let thumb = this.elem.querySelector(".slider__thumb");

    let left = e.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;

    let approximateValue = Math.round(leftRelative * this.segments);
    if (approximateValue >= this.steps) approximateValue = this.segments;
    if (approximateValue <= 0) approximateValue = 0;

    let valuePercents = (approximateValue / this.segments) * 100;

    this.value = approximateValue;
    value.innerText = approximateValue;

    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;

    this.setValue();
  }

  pointerDown = () => {
    document.addEventListener("pointermove", this.pointerMove);
    document.addEventListener("pointerup", this.pointerUp, {
      once: true,
    });
  
  }

  pointerMove = (e) => {
    let value = this.elem.querySelector(".slider__value");
    let progress = this.elem.querySelector(".slider__progress");
    let thumb = this.elem.querySelector(".slider__thumb");

    this.elem.classList.add("slider_dragging");

    let left = e.clientX - this.elem.getBoundingClientRect().left;
    if (e.clientX <= this.elem.getBoundingClientRect().left) {
      left = 0;
    }
    if (e.clientX >= this.elem.getBoundingClientRect().right) {
      left = this.elem.offsetWidth;
    }

    let leftRelative = left / this.elem.offsetWidth;
    let approximateValue = Math.round(leftRelative * this.segments);

    if (approximateValue >= this.steps) approximateValue = this.segments;
    if (approximateValue <= 0) approximateValue = 0;

    let valuePercents = leftRelative * 100;

    this.value = approximateValue;
    value.innerText = approximateValue;

    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;
    this.setValue();
  }

  pointerUp = () => {
    let progress = this.elem.querySelector(".slider__progress");
    let thumb = this.elem.querySelector(".slider__thumb");

    if (this.elem.querySelector('.slider__step-active')) {
      this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
    }
    if(console.log(this.elem.querySelector('.slider__steps').children[this.value])) {
      this.elem.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active');
    }

    thumb.style.left = `${(this.value / this.segments) * 100}%`;
    progress.style.width = `${(this.value / this.segments) * 100}%`;

    this.elem.classList.remove("slider_dragging");
    document.removeEventListener("pointermove", this.pointerMove);
    this.setValue();
  }

  setValue() {
    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  }

}
