// Book model:
// asin: "1940026091"
// category: "scifi"
// img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"
// price: 7.81
// title: "Pandemic (The Extinction Files, Book 1)"
// Template literal example:
// `<div>Title: ${books[i].title}</div>`

// let node = document.createElement("div");
            // node.classList.add("card col-2");
            // let cardImag= document.createElement('img');
            // cardImag.src = body[i].img
            // node.appendChild('img'); 

window.onload = () =>{
    fetch("https://striveschool-api.herokuapp.com/books")

    .then((response) =>{
        return response.json()
    })
    .then((arrayOfBooks) => {
        const booksInfo = document.getElementById('books-container');
        for (let bookIndex=0; bookIndex<arrayOfBooks.length; bookIndex++){
            booksInfo.innerHTML +=  `<div class="col-3"> <div class="card m-3">
            <img src="${arrayOfBooks[bookIndex].img}"   class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${arrayOfBooks[bookIndex].title}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
           </div>
           </div>`            
        }
    })

}