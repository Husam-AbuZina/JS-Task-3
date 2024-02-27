async function getProducts() {

    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const apiData = data.products;

    const result = apiData.map( function(ele) {

        return `
        <h2>${ele.title}</h2>
        <img src="${ele.thumbnail}"/>
        <p> ${ele.price} $ </p>
        `
    }).join('');

    document.querySelector(".apiData").innerHTML = result;
}

getProducts();