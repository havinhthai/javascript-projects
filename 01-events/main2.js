/**
 * Created by PC on 08/07/2017.
 */
const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
div.style.background = 'red';
div.style.padding = '15px';

const span = document.createElement('span');
span.appendChild(document.createTextNode('Change Color'));
span.style.background = 'green';
span.style.padding = '10px';

div.addEventListener('click', function () {
    this.style.background = '#ff6600';
});

span.addEventListener('click', function (e) {
    e.stopPropagation();
    e.target.style.background = 'blue';
});

div.appendChild(span);
body.appendChild(div);