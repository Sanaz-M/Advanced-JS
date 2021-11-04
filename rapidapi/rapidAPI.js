let album = [];

const searchApi = (artist) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + artist, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6dd0f092dfmshc7c788985801fa3p1b5331jsncbb8c36c49bb",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })

  .then(respons => respons.json())
  .then(body => {
      console.log(body) 
      if (body.data) {
         const newObj = { title: artist, albums: body.data };
         album.push(newObj);
         console.log(album);
        } else {
        alert(error)
        }
  })

.catch((error) => {
  console.log(error);
});
}


