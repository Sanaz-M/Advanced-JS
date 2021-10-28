// Book model:
// asin: "1940026091"
// category: "scifi"
// img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"
// price: 7.81
// title: "Pandemic (The Extinction Files, Book 1)"
// Template literal example:
// `<div>Title: ${books[i].title}</div>`


let books = [];


window.onload = () =>{
    fetch("https://striveschool-api.herokuapp.com/books")

    .then((response) =>{
        return response.json()
    })
    .then((arrayOfBooks) => {
        books = arrayOfBooks;

        const booksInfo = document.getElementById('books-container');
        for (let bookIndex=0; bookIndex<arrayOfBooks.length; bookIndex++){
            booksInfo.innerHTML +=  `<div class="col-lg-2 col-md-3 col-sm-6"> <div class="card mx-1 mb-4">
            <img src="${arrayOfBooks[bookIndex].img}" height=270px"  class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${arrayOfBooks[bookIndex].title}</h5>
              <p class="card-text">${arrayOfBooks[bookIndex].asin}<br>Category: ${arrayOfBooks[bookIndex].category} </p>
              <div class="buttons-add-skip">
              <button class="btn btn-success">Add</button>
              <button class="btn btn-dark">skip</button>
              </div>
           </div>
           </div>
           </div>`          
        }
    });
    const addToCart = () => {
        let shoppingCart = document.getElementById('shoppingCart')
        shoppingCart.innerHTML = `<div class='shoping-list'><ul><li><p>${arrayOfBooks[bookIndex].title}</p></li><ul></div>`
        console.log(books[index])
    };

    let addTo = document.querySelector('btn-success')
    addTo.addEventListener('click', addToCart);
    
}