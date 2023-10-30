import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product=product;
    
    this.elem = createElement(`
      <div class="card">
        <div class="card__top">
            <img class="card__image" alt="product">
            <span class="card__price"></span>
        </div>
        <div class="card__body">
            <div class="card__title"></div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    </div>
  `  )

    this.elem.querySelector(".card__price").innerHTML='€'+this.product.price.toFixed(2);

    let path ="/assets/images/products/";
    this.elem.querySelector(".card__image").setAttribute('src',path+this.product.image);
    
    this.elem.querySelector(".card__title").innerHTML = this.product.name;

    this.elem.onclick = (event) => this.onClick(event);
  }

  onClick(event) {
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    }));
  }
 
}

