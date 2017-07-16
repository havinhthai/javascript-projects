/**
 * Created by GL552JX on 08-Nov-16.
 */

var showImg = document.getElementById('img01');
var caption = document.getElementById('caption');
var imgs = document.getElementsByClassName('myImg');
var modal = document.getElementById('myModal');
var close = document.getElementsByClassName('close')[0];
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function () {
        modal.style.display = 'block';
        showImg.src = this.src;
        caption.innerHTML = this.alt;
        return false;
    }, true);
}

close.onclick = function () {
    modal.style.display = 'none';
};
