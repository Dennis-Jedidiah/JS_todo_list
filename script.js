const input_bar = document.querySelector('#input_bar');
const list_display = document.querySelector('#entered_list_items');
document.addEventListener('DOMContentLoaded', disableFormRefresh());

function disableFormRefresh() {
  const list_form = document.getElementById('list_form');
  list_form.addEventListener('submit', (e) => e.preventDefault());
}

function sendInputValue() {
  if (input_bar.value != '') {
    const list_text = input_bar.value;
    list_item = createListItem(list_text);
    console.log(list_item);
    list_display.appendChild(list_item);
  } else {
    alert('Please type in something!');
  }
  input_bar.value = '';
}

function addItemToList(list_item) {
}

function createListItem(htmlcode) {
  let container = document.createElement('span');
  let content = document.createElement('div');
  let delete_button = document.createElement('button');

  container.appendChild(content);
  container.appendChild(delete_button);
  container.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'p-0', 'bg-transparent');
  delete_button.innerHTML = 'Delete';
  delete_button.type = 'button';
  delete_button.classList.add('btn', 'text-dark');
  content.innerHTML = htmlcode;
  content.classList.add('bg-transparent', 'flex-grow-1', 'p-2', 'text-break', 'text-dark');
  content.addEventListener('click', (e)=>strikeout(e));
  delete_button.addEventListener('click', (e)=>e.target.parentElement.remove());
  return container;
}

function strikeout(e) {
  if (e.target.classList.contains('text-decoration-line-through')) {
    e.target.classList.remove('text-decoration-line-through');
  } else {
    e.target.classList.add('text-decoration-line-through');
  }
}
