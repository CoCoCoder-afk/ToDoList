let form = document.querySelector("#form"),
    heading = form.querySelector("#inputHeading"),
    text = form.querySelector("#inputText"),
    list = document.querySelector("#list");

function submitForm(event) {
  event.preventDefault();
  let smth = `<div class = "list__item item">
  <span class = "item__heading">
    ${heading.value}
  </span>
  <button onclick = "removeItem(this)" class = "item__button">Remove</button>
  <br>
  <span class = "item__text">
    ${text.value}
  </span>
</div>`;
    list.insertAdjacentHTML( 'afterbegin', smth );
}

function removeItem(thisItem) {
  thisItem.parentNode.remove();
}

window.removeItem = removeItem;

form.addEventListener("submit", submitForm);