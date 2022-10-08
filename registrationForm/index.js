btnRegistration = document.getElementById('successRegistration');

let errors = [];
function checkValidity(input) {
    const validity = input.validity;
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    document.getElementById('password').innerHTML = "";
    
    if (validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено');}
    if (validity.patternMismatch) {errors.push('Неверный формат заполнения поля ' + input.placeholder); }
    if (validity.rangeOverflow) { errors.push('Максимальное значение не может быть больше, чем 90'); }
    if (validity.rangeUnderflow) {errors.push('Минимальное значение не может быть меньше, чем 18'); }
    //!!!ВОТ ТУТ ВОПРОС!!!по проверкам ниже не поняла, как сделать, чтобы сообщение выводилось только 1 раз, а не для каждого инпута (я поняла, почему ошибки по этим проверкам несколько раз, потому что в функции в скобках стоит input - function checkValidity(input), но найти, как это исправить, я не успела
    if (password.value.length <= 7) {
        errors.push('Ваш пароль слишком короткий, задайте пароль не менее 8-ми символов');
    }
    if (password.value !== confirmPassword.value) {
        errors.push('Введенные пароли не совпадают')
    }
    }


function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorMessages').innerHTML = errors.join('; <br>');

}

btnRegistration.addEventListener('click', checkAll);
btnRegistration.onclick = function (event) {
    event.preventDefault();

    //формируем объект
    let user = {
        name: document.getElementById('firstName').value,
        surname: document.getElementById('lastName').value,
        birthday: document.getElementById('birthdayDate').value,
        age: document.getElementById('age').value,
        email: document.getElementById('emailAddress').value,
        phone: document.getElementById('phoneNumber').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    }
    //console.log(user);
    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}



function colorMeName() {
    document.getElementById('firstName').style.backgroundColor = '#DCDCDC';
}

function colorMeBackName() {
    document.getElementById('firstName').style.backgroundColor = 'white';
}

function colorMeSurname() {
    document.getElementById('lastName').style.backgroundColor = '#DCDCDC';
}

function colorMeBackSurname() {
    document.getElementById('lastName').style.backgroundColor = 'white';
}

function changeBackground() {
    if(document.getElementById('chooseColor').value == "green")
    document.getElementById('bgColor').style.backgroundColor = '#CCFFCC';

    else if(document.getElementById('chooseColor').value == "blue")
    document.getElementById('bgColor').style.backgroundColor = '#AFEEEE';

    else if(document.getElementById('chooseColor').value == "pink")
    document.getElementById('bgColor').style.backgroundColor = '#FFC0CB';

else {
    document.getElementById('bgColor').style.backgroundColor = 'white';
}
}

