// Your code here
const table = document.querySelector('table');
const rowButton = document.querySelector('#addRow');
const select = document.querySelector('select');
let color = 'red';

rowButton.addEventListener('click', makeRow);
table.addEventListener('click', colorize);
select.addEventListener('change', (event) => {
  color = event.target.value;
});

function makeRow() {
  const row = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  };
  table.appendChild(row);
};

function colorize(event) {
  const target = event.target;
  if (target.className != color && target.tagName === 'TD') {
    target.className = color;
  } else {
    target.className = '';
  };
};
