const movieGenre = new URLSearchParams(window.location.search).get('movieGenre');
const movieId = new URLSearchParams(window.location.search).get('movieId');
const baseUrl = "https://striveschool-api.herokuapp.com/api/movies/";


const addMovie = async (event) => {
    event.preventDefault()
    const newMovie = {
        name : document.getElementById('name').value,
        description : document.getElementById('description').value,
        brand : document.getElementById('category').value,
        imageUrl: document.getElementById('imageUrl').value,
    };

    try{
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzYxMjE4MzcsImV4cCI6MTYzNzMzMTQzN30.QLbId9jbee7d2TAL3VM-9UKUi1OWG5i6Cg9izkgUtCg"
             },
            body: JSON.stringify(newMovie),
        });

        if(response.ok) {
            const res = await response.json()
            alert("Movie added successfully with an id: " + res._id)
        }
    }
        catch (error) {
            alert(error)
        }
    }

    window.onload = () =>{
        const form = document.querySelector('form')
        form.onsubmit = addMovie;
        movieDetails()
    };

    const movieDetails = async () => {

        const response = await fetch(baseUrl + movieId, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
            },
        })
        const movieData = await response.json()
        console.log(movieData)


 
    document.getElementById("name").value = movieData.name
    document.getElementById("description").value = movieData.description
    document.getElementById("category").value = movieData.brand
    document.getElementById("imageUrl").value = movieData.imageUrl

    return movieData
}

