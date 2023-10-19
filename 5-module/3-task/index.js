function initCarousel() {

  let count = 1;
  let translate = 0;
  let n=4;

  let right_arrow = document.querySelector(".carousel__arrow_right");
  let left_arrow = document.querySelector(".carousel__arrow_left");
  let img = document.querySelector(".carousel__img");
  let carousel = document.querySelector(".carousel__inner");

  update_buttons();
  
  right_arrow.addEventListener("click", handler_right); 
  left_arrow.addEventListener("click", handler_left); 
  
  function handler_right() {
    translate += img.offsetWidth;
    carousel.style.transform = 'translateX(-'+translate+"px)";
    count++;
    update_buttons();
  };
  
  function handler_left() {
    translate -= img.offsetWidth;
    carousel.style.transform = 'translateX(-'+translate+'px)';
    count--;
    update_buttons();
  };
  
  function update_buttons() {
  
    if(count==1) {
      left_arrow.style.display = 'none';
    } else {
      left_arrow.style.display = '';
    }
    if(count==n) {
      right_arrow.style.display = 'none';
    } else {
      right_arrow.style.display = '';
    }
}
}