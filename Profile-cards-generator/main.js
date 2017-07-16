/**
 * Created by PC on 09/07/2017.
 */
(function () {
    const $ = function (selector) {
        return document.querySelector(selector);
    };

    const btnAddUser = $('#btnAddUser');
    btnAddUser.addEventListener('click', function () {
        const name = $('#idName').value;
        const email = $('#idEmail').value;
        const age = $('#idAge').value;

        var newCard = '';
        newCard += '<div class="col-md-3">';
        newCard += '    <div class="profileCard">';
        newCard += '        <div class="cardDelete">X</div>';
        newCard += '        <h2>'+ name + '</h2>';
        newCard += '        <p><strong>Email:</strong> ' + email + '</p>';
        newCard += '        <p><strong>Age:</strong> ' + age + '</p>';
        newCard += '    </div>';
        newCard += '</div>';

        $('#wrapperCards').insertAdjacentHTML('afterbegin', newCard);

        $('#idName').value = '';
        $('#idEmail').value = '';
        $('#idAge').value = '';

        alert('Successfully add User');

        btnDelete();
    });

    function btnDelete() {
        $('.cardDelete').addEventListener('click', function (e) {
            e.target.parentNode.parentNode.remove();
            alert('Successfully Delete User');
        });
    }

    btnDelete();

    $('form').addEventListener('submit', function (e) {
        e.preventDefault();
    })
})();