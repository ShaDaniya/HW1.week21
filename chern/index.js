function onSearch() {
    const gitUser = document.getElementById('userSearch').value;
    fetch("https://api.github.com/users/" + gitUser
)
    .then(response => response.json())
    .then(user => {
        document.getElementById('avatar').src = user.avatar_url;
        document.getElementById('userName').innerText = user.name;
    })
    .catch(error => console.log(error));
}

const dog = `{
    "breed": "Beagle",
    "size": "large",
    "color": "orange",
    "age": 6
}`

let response = await fetch('localhost/pets/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: dog
  });
  
  let result = await response.json();
  alert(result.message);