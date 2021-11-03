
const insertProduct = async () => {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/product', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
        },
        body: JSON.stringify({
            name: "app test 1",
            description: "somthing longer",
            brand: "nokia",
            imageUrl: "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
            price: 100
        })
    })
    const body = await response.json()
    console.log(body)
}

const allProducts = async () => {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/product', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
        },
    })
    const body = await response.json()

    let productCards = document.getElementById('product-section')
    productCards.innerHTML =``

}

allProducts();

 
