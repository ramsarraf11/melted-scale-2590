let cartItem = JSON.parse(localStorage.getItem("cartProd")) || [];

let cart_btn = document.querySelectorAll(".cart-btn");

Array.from(cart_btn).map((elem) => {
    elem.addEventListener('click', (e) => {
        let img = e.target.parentElement.parentElement.children[0].src;
        let prodName = e.target.parentElement.parentElement.parentElement.children[2].children[0].innerText;
        let price = e.target.parentElement.parentElement.parentElement.children[2].children[1].innerText.split(" ")[0];
        price = price.substring(1);
        let id = e.target.parentElement.parentElement.parentElement.id;
        let obj = { img, prodName, price, id, quant: 1 };
        let isPresent = false;
        if (localStorage.getItem('cartProd') != null) {
            cartItem.map((item) => {
                if (item.id == id) {
                    item.quant++;
                    localStorage.setItem('cartProd', JSON.stringify(cartItem));
                    isPresent = true;
                }
            })
        }
        if (!isPresent) {
            cartItem.push(obj);
            localStorage.setItem('cartProd', JSON.stringify(cartItem));
        }
    })
})