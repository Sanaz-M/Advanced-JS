const url = 'https://striveschool-api.herokuapp.com/api/product/';

const newUrl = new URLSearchParams(window.location.search)
const productId = newUrl.get("productId")

const insertProduct = async (event) => {
    event.preventDefault()
    const newProduct = {
        name : document.getElementById('name').value,
        description : document.getElementById('description').value,
        brand : document.getElementById('brand').value,
        imageUrl: document.getElementById('imageUrl').value,
        price : document.getElementById('price').value,
    };

    try{
        const response = await fetch(url, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
            },
            body: JSON.stringify(newProduct),
        });

        if(response.ok) {
            const res = await response.json()
            alert("Product created successfully with an id: " + res._id)
        }
    }
        catch (error) {
            alert(error)
        }
    }

    window.onload = () =>{
        const form = document.querySelector('form')
        form.onsubmit = insertProduct;
        productDetails()

        if(productId){
            document.getElementById('submit-btn').innerText = "Update Product";
        }
        else{
            document.getElementById('submit-btn').innerText = "Add Product";
        }
    };

    const productDetails = async () => {

        const response = await fetch(url + productId, {
            method : "PUT",
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
        
       
       
    document.getElementById("name").value = productData.name
    document.getElementById("description").value = productData.description
    document.getElementById("brand").value = productData.brand
    document.getElementById("price").value = productData.price
    document.getElementById("imageUrl").value = productData.imageUrl

    return productData
}