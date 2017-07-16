/**
 * Created by GL552JX on 09-Nov-16.
 */

var pos = 0;

function runProgress(n) {

    var progress = document.getElementById('myBar');
    var numProgress = document.getElementById('numProgress');

    var myEvent = setInterval(function () {
        if (pos < n) {
            pos++;
            progress.style.width = pos + '%';
            numProgress.innerHTML = progress.style.width;
            if (pos > 50) {
                numProgress.style.color = '#fefefe';
            } else {
                numProgress.style.color = '#333'
            }
            console.log(pos);

        } else {
            clearInterval(myEvent);
        }
    }, 5);
    return false;
}

function inputProgress() {
    var n = document.getElementById('myInput').value;
    if (n <= 100) {
        runProgress(n);
    } else {
        alert('Please input number lessthan 101');
    }
    return false;
}