let productCardButton = document.querySelectorAll('.products-item-button');

productCardButton.forEach(item => {
    item.onmouseenter = item.onmouseleave = function (evt) {
        if (evt.target.tagName === 'BUTTON' && evt.relatedTarget.tagName === 'IMG') {
            evt.relatedTarget.style.filter = 'brightness(45%)';
        }
    }
    item.onmouseleave = item.onmouseleave = function (evt) {
        evt.relatedTarget.style.filter = '';
    }
});

let cartBtn = document.querySelector('.cart-btn');
let accountBtn = document.querySelector('.account-btn');

cartBtn.onclick = function () {
    if (window.location.origin === 'https://stanislav-rodikov.github.io') {
        document.location = document.location.origin + '/brand/pages/cart.html';
    } else {
        document.location = document.location.origin + '/pages/cart.html';
    }
}

accountBtn.onclick = function () {
    if (window.location.origin === 'https://stanislav-rodikov.github.io') {
        document.location = document.location.origin + '/brand/pages/registration.html';
    } else {
        document.location = document.location.origin + '/pages/registration.html';
    }
}