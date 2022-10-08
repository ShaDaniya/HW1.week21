// const saveButton = document.getElementById('save');
// //const form = document.getElementById('form');

// saveButton.onclick = function (event) {
//     event.preventDefault();

//     fetch("https://httpbin.org/post",
//     {
//         method: 'POST',
//         body: new FormData(form),
//         // headers: {
//         //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
//         // },
//     })
//     .then(response => response.json())
//     .then(user => {
//         console.log(user);
//     })
//     .catch(error => console.log(error));
// }

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
};