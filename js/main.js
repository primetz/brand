let container = document.querySelector('.products-wrap');

container.onmouseover = container.onmouseout = handler;

function handler(evt) {
    if (evt.type === 'mouseover' && evt.target.className === 'products-item-button' && evt.relatedTarget !== null) {
        evt.relatedTarget.style.filter = 'brightness(45%)';
    } else if (evt.type === 'mouseout' && evt.relatedTarget !== "products-item-link" && evt.relatedTarget !== null) {
        evt.relatedTarget.style.filter = '';
    }
}