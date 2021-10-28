window.onload = () =>{
    fetch("https://striveschool-api.herokuapp.com/books")

    .then((response) =>{
        console.log(response)
        return response.json()
    })
    
    .then((body) => {
        console.log(body)
        const booksInfo = document.querySelectorAll('.cards')
        
    })

}