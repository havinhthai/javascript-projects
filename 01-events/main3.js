/**
 * Created by PC on 08/07/2017.
 */
const div = document.createElement('div');
div.style.background = '#FF6600';
div.style.textAlign = 'center';
div.style.padding = '15px';

div.textContent = 'LOGOUT';

const body = document.getElementsByTagName('body')[0];
body.appendChild(div);

div.addEventListener('click', function (e) {
    e.target.textContent = 'LOGGING OUT...';
    setTimeout(function () {
        e.target.textContent = 'LOGOUT';
        alert('You are logged out');
    }, 3000);
});