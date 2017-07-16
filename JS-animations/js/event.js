/**
 * Created by GL552JX on 09-Nov-16.
 */

function move() {
    var bird = document.getElementById('myAnimation');
    var btnUp = document.getElementById('goUp');
    var btnDown = document.getElementById('goDown');
    var btnLeft = document.getElementById('goLeft');
    var btnRight = document.getElementById('goRight');
    var error = document.getElementById('myError');

    var posTop = 0;
    var posLeft = 0;

    /*---------------- Go Up ---------------*/
    btnUp.onclick = function () {
        if (posTop > 0) {
            posTop -= 20;
            bird.style.top = posTop + 'px';
            checkWin();
        } else {
            error.innerHTML = 'You can\'t up anymore!';
        }
        console.log('Up:' + posTop);
    };

    /*---------------- Go Down ---------------*/
    btnDown.onclick = function () {
        if (posTop < 330) {
            posTop += 20;
            bird.style.top = posTop + 'px';
            checkWin();
        } else {
            error.innerHTML = 'You can\'t down anymore!';
        }
        console.log('Down:' + posTop);
    };

    /*---------------- Go Left ---------------*/
    btnLeft.onclick = function () {
        if (posLeft > 0) {
            posLeft -= 20;
            bird.style.left = posLeft + 'px';
            if (!bird.className) {
                bird.className += 'rotateBack';
            }
            checkWin();
        } else {
            error.innerHTML = 'You can\'t left anymore!';
        }
        console.log('Left: ' + posLeft);
    };

    /*---------------- Go Right ---------------*/
    btnRight.onclick = function () {
        if (posLeft < 330) {
            posLeft += 20;
            bird.style.left = posLeft + 'px';
            if (bird.className) {
                bird.className = bird.className.replace('rotateBack', '');
            }
            checkWin();
        } else {
            error.innerHTML = 'You can\'t right anymore!';
        }
        console.log('Right: ' + posLeft);
    };

    function checkWin() {
        if (bird.style.top == 320 + 'px' && bird.style.left == 140 + 'px') {
            error.innerHTML = '<h2 style="color: green;">Congratulations!</h2>';
        }
    }
}