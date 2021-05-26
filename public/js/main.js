'use strict';

let productCardButtons = document.querySelectorAll('.products-item-button');

productCardButtons.forEach(item => {
    item.addEventListener('mouseenter', function () {
        item.parentNode.querySelector('.products-item-photo').style.filter = 'brightness(45%)';
    });

    item.addEventListener('mouseleave', function () {
        item.parentNode.querySelector('.products-item-photo').style.filter = '';
    });
});

let cartBtn = document.querySelector('.cart-btn');
let accountBtn = document.querySelector('.account-btn');

// cartBtn.onclick = function () {
//     if (window.location.origin === 'https://stanislav-rodikov.github.io') {
//         document.location = document.location.origin + '/brand/pages/cart.html';
//     } else {
//         document.location = document.location.origin + '/pages/cart.html';
//     }
// }

accountBtn.onclick = function () {
    if (window.location.origin === 'https://stanislav-rodikov.github.io') {
        document.location = document.location.origin + '/brand/pages/registration.html';
    } else {
        document.location = document.location.origin + '/pages/registration.html';
    }
}