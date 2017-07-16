/**
 * Created by GL552JX on 10-Nov-16.
 */

var button = document.getElementsByClassName('accordion');
var div = document.getElementsByClassName('panel');

for (var i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle('show');
    }
}

