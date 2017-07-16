/**
 * Created by GL552JX on 10-Nov-16.
 */

function openCity(evt, cityName) {
    var i;

    var tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    var tablink = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

document.getElementById("defaultOpen").click();