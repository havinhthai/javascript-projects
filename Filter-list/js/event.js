/**
 * Created by GL552JX on 09-Nov-16.
 */

searchName();

function searchName() {
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();
    var li = document.getElementById('myUl').getElementsByTagName('li');
    var a;

    for (var i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) != -1 ) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

    input.addEventListener('keyup', searchName, true);
}

/*function slideDown() {
    var li = document.getElementById('myUl').getElementsByTagName('li');
    var div;

    for (var i = 0; i < li.length; i++) {
        div = li[i].getElementsByTagName('div')[0];
        div.style.display = 'block';
    }

    for (var j = 0; j < li.length; j++) {
        li[j].addEventListener('click', slideDown, true);
    }
}*/
