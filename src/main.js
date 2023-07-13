'use strict';

let accountBtn = document.querySelector('.account-btn');

accountBtn.onclick = function () {
    if (window.location.origin === 'https://stanislav-rodikov.github.io') {
        document.location = document.location.origin + '/brand/pages/registration.html';
    } else {
        document.location = document.location.origin + '/pages/registration.html';
    }
}