let li = document.createElement('li');
let text = document.createTextNode('I am text node');

li.append(text);

document.querySelector('ul.this').replaceChild(li, document.querySelector('li#fui'));

let h1 = document.createElement('h3');

h1.innerHTML = '<b>This is created node </b>'

document.querySelector('ul.this').replaceChild(h1, document.querySelector('li#lui'));
