/**
 * Created by GL552JX on 11/8/2016.
 */

setInterval(getTime, 1000);

function getTime() {
    var dayObj = new Date();
    var currentMonth = document.getElementById('currentMonth');
    var currentYear = document.getElementById('currentYear');
    var currentHour = document.getElementById('currentHour');
    var myDates = document.getElementsByClassName('days')[0].childNodes;

    for (var i = 0; i < myDates.length; i++) {
        if (myDates[i].id == dayObj.getDate()) {
            myDates[i].setAttribute('class', 'active');
        }
    }

    switch (dayObj.getMonth()) {
        case 0:
            currentMonth.innerHTML = 'January';
            break;
        case 1:
            currentMonth.innerHTML = 'February';
            break;
        case 2:
            currentMonth.innerHTML = 'March';
            break;
        case 3:
            currentMonth.innerHTML = 'April';
            break;
        case 4:
            currentMonth.innerHTML = 'May';
            break;
        case 5:
            currentMonth.innerHTML = 'June';
            break;
        case 6:
            currentMonth.innerHTML = 'July';
            break;
        case 7:
            currentMonth.innerHTML = 'August';
            break;
        case 8:
            currentMonth.innerHTML = 'September';
            break;
        case 9:
            currentMonth.innerHTML = 'October';
            break;
        case 10:
            currentMonth.innerHTML = 'November';
            break;
        case 11:
            currentMonth.innerHTML = 'December';
            break;
    }
    currentYear.innerHTML = dayObj.getFullYear();
    currentHour.innerHTML = dayObj.toLocaleTimeString();
}

