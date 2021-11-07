const newUrl = new URLSearchParams(window.location.search)
const productId = newUrl.get("id")

const url = "https://striveschool-api.herokuapp.com/api/product/" + productId;

const productDetails = async () => {

        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
            },
        })
        const productData = await response.json()
        console.log(productData)

        const productDetails = document.getElementById("product-detail")

        productDetails.innerHTML = `
        <img src="${productData.imageUrl}" alt="details image" width="200px" height="200px">
                <h4 class="mb-2" style="line-height: 1;">${productData.name}</h4>
                    <p>${productData.description}</p>
                    <h6 class="bg-light py-3 pl-2">Server Details</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pl-2"><strong>id:</strong> ${productData._id}</li>
                        <li class="list-group-item pl-2"><strong>price:</strong> ${productData.price}€</li>
                        <li class="list-group-item pl-2"><strong>createdAt:</strong> ${new Date(productData.createdAt).toLocaleDateString()}</li>
                        <li class="list-group-item pl-2"><strong>updatedAt:</strong> ${new Date(productData.updatedAt).toLocaleDateString()}</li>
                    </ul>
                `

    return productData
}
    productDetails();

    const jumpToditPage = () => {
        window.location.assign('M3-D8.html?productId=' + productId)
    }
