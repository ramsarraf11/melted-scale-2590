let container = document.getElementById('cart-container');
let getProd = JSON.parse(localStorage.getItem('cartProd')) || [];
renderItems(getProd)
function renderItems(arr) {
    container.innerHTML = arr.map((item, index) => {
        return `<div class="box" id="${item.id}">
         <div class="image">
           <img src="${item.img}" alt="" />
           <div class="icons">
             <button id=${index}  class="remove">Remove</button>
           </div>
         </div>
         <div class="content">
           <h3>${item.prodName}</h3>
           <span>${item.quant}</span>
           <div class="price">${item.price}</div>
         </div>
       </div>`
    }).join(" ");
}

function remove(index) {
    getProd.splice(index, 1);
    localStorage.setItem('cartProd', JSON.stringify(getProd));
}

let removeBtns = document.querySelectorAll('.remove');
Array.from(removeBtns).map((item) => {
    item.addEventListener('click', (e) => {
        let index = e.target.id;
        remove(index);
        renderItems(getProd);
        window.location.reload();
    })
})
calculatePrice();
function calculatePrice() {
    let price = getProd.reduce((acc, item) => {
        return acc + Number(item.price) * Number(item.quant);
    }, 0)
    document.querySelector("#cart-total").innerText = `$${price}`;
}