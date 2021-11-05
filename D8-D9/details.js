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


    
        // const productData = () => {

        //     const eachProductDetail ={
        //     name : document.getElementById('name').value,
        //     description : document.getElementById('description').value,
        //     brand : document.getElementById('brand').value,
        //     imageUrl: document.getElementById('imageUrl').value,
        //     price : document.getElementById('price').value,
        //     id : document.getElementById('_id').value,
        //     createdAt : document.getElementById('createdAt').value,
        //     updatedAt : document.getElementById('updatedAt').value,
        // };
        
        const productDetails = document.getElementById("product-detail")

        productDetails.innerHTML = `
                <h2 class="mb-2" style="line-height: 1;">${productData.name}</h1>
                <p class="text-monospace mb-3">${new Date().toLocaleString()}</p>
                    <p>${productData.description}</p>
                    <h6 class="bg-light py-3 pl-2">Server Details</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pl-2"><strong>id:</strong> ${productData._id}</li>
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
