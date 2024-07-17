let frutas = ['maçã', 'laranja', 'uva', 'pessego'];

let ul = document.createElement('ul');

let body = document.getElementsByTagName('body')[0];

body.appendChild(ul);

for (let i in frutas){
    let li = document.createElement('li');
    li.innerHTML = frutas[i];
    ul.appendChild(li);
}