/**
 * Created by PC on 08/07/2017.
 */
const btn = document.createElement('button');
btn.textContent = 'Don\'t click me';

const body = document.getElementsByTagName('body')[0];
body.appendChild(btn);

// btn.onclick = function () {
//     alert('You was hacked');
// };

btn.addEventListener('click', function () {
    alert('You was hacked');
});