import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`<div class="modal">

      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">

          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>

    </div>`)
  }

  escEvent(event) {
    if (event.code == 'Escape') {
      this.close();
    }
  }

  open() {
      document.body.append(this.elem);
      document.body.classList.add('is-modal-open');

      this.elem.onclick = (event) => {
        if(event.target.closest('.modal__close')){
            this.close();
        }
      };
  
      document.addEventListener('keydown', (event) => this.escEvent(event));
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').innerHTML=title;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.escEvent);
    this.elem.remove();
  }
}
