/**
 * Created by GL552JX on 08-Nov-16.
 */

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.addEventListener('click', function () {
    modal.style.display = 'block';
}, true);

span.addEventListener('click', function () {
    modal.style.display = 'none';
}, true);

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};