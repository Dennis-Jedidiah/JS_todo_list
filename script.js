let todo_list = [];
const input_bar = document.querySelector('#input_bar');
const list_display = document.querySelector('#entered_list_items');
document.addEventListener('DOMContentLoaded', disableFormRefresh());

function disableFormRefresh() {
  const list_form = document.getElementById('list_form');
  list_form.addEventListener('submit', (e) => e.preventDefault());
}
function sendInputValue() {
  if (input_bar.value != '') {
    const list_item = {
      id: todo_list.length,
      text: input_bar.value,
      is_completed: false,
    };
    todo_list.push(list_item);
    addItemToList(list_item.text);
  } else {
    alert('Please type in something!');
  }
}
function addItemToList(list_item) {
  list_display.appendChild(createListItem(`<li>${list_item}</li>`));
  console.log(todo_list);
  console.log(list_display.innerHTML);
}
function createListItem(htmlcode) {
  let fragment = document.createDocumentFragment();
  let content = document.createElement('div');
  content.innerHTML = htmlcode;
  if (content.firstChild) {
    fragment.appendChild(content.firstChild);
  }
  return fragment;
}

console.log();