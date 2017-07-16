/**
 * Created by GL552JX on 10-Nov-16.
 */

var ul = document.getElementById('myUl');
var li = document.getElementsByTagName('li');
var close = document.getElementsByClassName('close');
var addBtn = document.getElementsByClassName('addBtn')[0];
var i;

addClose();

function newList() {
    var inputValue = document.getElementById('myInput').value;
    if (inputValue == '') {
        alert('Please write something...');
    } else {
        var newLi = document.createElement('li');
        var newText = document.createTextNode(inputValue);
        newLi.appendChild(newText);
        ul.appendChild(newLi);
        addClose();
    }
}

function addClose() {
    for (i = 0; i < li.length; i++) {
        var span = document.createElement('span');
        var txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        li[i].appendChild(span);
        li[i].onclick = function () {
            this.classList.toggle('checked');
        }
    }
    closeList();
}

function closeList() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.style.display = 'none';
        }
    }
}

addBtn.addEventListener('click', newList, false);


