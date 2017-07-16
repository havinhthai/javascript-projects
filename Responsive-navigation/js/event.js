/**
 * Created by GL552JX on 11-Nov-16.
 */

var iconBtn = document.getElementsByClassName('icon')[0];
var ul = document.getElementsByTagName('ul')[0];

iconBtn.onclick = function () {
    ul.classList.toggle('responsive');
};