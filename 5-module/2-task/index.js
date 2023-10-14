function toggleText() {
  let elem = document.querySelector(".toggle-text-button");
  elem.onclick = function() {
    var text = document.getElementById('text');
    text.hidden = !text.hidden;
  };

}
