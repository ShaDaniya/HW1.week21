function onSearch() {
    let gifName = document.getElementById('gifSearch').value;
    
    fetch('https://api.giphy.com/v1/gifs/search?api_key=sJR2fapLXebx0an7Q7gsrV3wnV4cQgDA&q=' + gifName + '&limit=5&offset=0&rating=g&lang=en')
        .then(response => response.json())
        .then(gif => {
            //наверное то, что ниже можно вывести циклом, но я пока не сообразила, как
            document.getElementById('firstGif').src = gif.data[0].images.preview_gif.url;
            document.getElementById('secondGif').src = gif.data[1].images.preview_gif.url;
            document.getElementById('thirdGif').src = gif.data[2].images.preview_gif.url;
            document.getElementById('fourthGif').src = gif.data[3].images.preview_gif.url;
            document.getElementById('fifthGif').src = gif.data[4].images.preview_gif.url;
        })
        .catch(error => console.log(error));
}