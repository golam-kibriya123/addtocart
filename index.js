// let addTOCartObject = [];
// const randomPrice = () => {
//     let number = Math.floor(Math.random() * 100);
//     if (number < 10) {
//         number = randomPrice();
//     }
//     return number;
// }



// document.getElementById('add-btn').addEventListener('click', () => {
//     document.getElementById('product-price').innerText = `${randomPrice()}`
//     const productName = document.getElementById('product-name').value;
//     const productPrice = document.getElementById('product-price').innerText;
//     const productQuantity = document.getElementById('product-quantity').value;
//     makeObject(productName, productQuantity, productPrice);
//     randomPrice();




// })
// const makeObject = (name, quantity, price) => {
//     addTOCartObject.push({ name, quantity, price }
//     )
//     let addTOCartObjectString = JSON.stringify(addTOCartObject)
//     setLocalStorage(addTOCartObjectString)
// }
// const setLocalStorage = (addTOCartObjectString) => {
//     if (addTOCartObjectString) {
//         localStorage.setItem('cart', addTOCartObjectString);

//     }
//     else {
//         return addTOCartObjectString
//     }
// }
// const getItem = () => {
//     let storageItem = JSON.parse(localStorage.getItem('cart'));
//     return storageItem;
// }
// console.log(getItem())

const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const productPrice = document.getElementById('product-price');
    const name = productName.value;
    const quantity = productQuantity.value;
    const price = productPrice.innerText;
    console.log(name)
    console.log(price)
    console.log(quantity)
    productName.value = "";
    productQuantity.value = "";

    display(name, quantity, price);
    save(name, quantity, price);

}
let no = 0;
const serial = () => {
    no++
    return no;
}
const display = (name, quantity, price) => {
    const table = document.getElementById('add-to-cart');
    const tableItem = document.createElement('tr');
    tableItem.innerHTML = `
    <td>${serial()}</td>
    <td>${name}</td>
    <td>${quantity}</td>
    <td>$${price}</td>`;
    table.appendChild(tableItem);
}
const get = () => {
    const getFromStor = localStorage.getItem('cart');
    let cart = {};
    if (getFromStor) {
        cart = JSON.parse(getFromStor);
    }
    return cart;

}
const save = (n, q, p) => {
    const cart = get();
    cart[n] = q;
    cart[`${n}price`] = p;
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);

}

document.getElementById('add-btn').addEventListener('click', () => {
    addProduct()
})
