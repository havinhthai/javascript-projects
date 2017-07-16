/**
 * Created by PC on 16/07/2017.
 */

const myForm = document.getElementById('myForm');
const input = document.getElementsByClassName('form-control')[0];
const myAlert = document.getElementsByClassName('alert')[0];
myAlert.style.display = 'none';

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    try {
        if (input.value === '') {
            throw new Error('Please type something');
        } else {
            eval(input.value);
        }
    } catch (err) {
        if (err) {
            myAlert.textContent = err.message;
            myAlert.style.display = 'block';
            setTimeout(function () {
                myAlert.style.display = 'none';
            }, 3000);
        }
    } finally {
        input.value = '';
    }
});

