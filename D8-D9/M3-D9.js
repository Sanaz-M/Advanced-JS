const url = 'https://striveschool-api.herokuapp.com/api/product';



const fetchProducts = async () => {

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
            },
        });
        if (response.ok) {
            const res = await response.json()
            return res
        }
        else{
            console.log(error)
        }
    }
    catch (error) {
        console.log(error)
    }
}

const displayProduct = (products) => {

    console.log(products)
    const cards = document.getElementById('productsCards')

    products.forEach(product => {
        cards.innerHTML += `<div class="card mx-2 mb-3" style="width: 150px; height: 300px;">
                                <img src="${product.imageUrl}" class="card-img-top" alt="..." width="100px" height="150px">
                              <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">{${product.description}}</p>
                                <a id="more-details" href="details.html?id=${product._id}">More Details</a>
                              </div>
                            </div>`
    });

}


window.onload = async () => {

    try {

        const products = await fetchProducts()
        displayProduct(products)
         
    }
    catch (error) {
        alert(error)
    }
}