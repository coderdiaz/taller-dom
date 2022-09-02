const lista = document.getElementById('lista-dinamica');
const arrayItem = ['item 1', 'item 2', 'item 3'];
const fragment = document.createDocumentFragment();

arrayItem.forEach((item) => {
  // creamos li
  const li = document.createElement('li');
  // agregamos clase a li
  li.classList.add('list');
  // creamos b
  const b = document.createElement('b');
  // agregamos texto a b
  b.textContent = 'Nombre: ';
  // creamos span
  const span = document.createElement('span');
  // agregamos clase a span
  span.classList.add('text-danger');
  // agremos texto a span
  span.textContent = item;
  // agregamos nodo hijos a li
  li.appendChild(b);
  li.appendChild(span);
  // agregamos li al fragmente
  fragment.appendChild(li);
});

lista.appendChild(fragment);
