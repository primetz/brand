const cartItem = {
    props: ['product'],
    template: `<li class="cart-menu__item">
                   <img :src="$root.imgFolder + product.product_img" height="105">
                   <div class="cart-menu__prod-info">
                       <h3>{{ product.product_name }}</h3>
                       <ul class="cart-menu__sub">
                           <li>Price:&nbsp;
                               <span>&dollar;{{ product.price * product.quantity }}</span>
                           </li>
                           <li>Color:&nbsp;
                               <span>Red</span>
                           </li>
                           <li>Size:&nbsp;
                               <span>xl</span>
                           </li>
                           <li>Quantity:
                               <span>{{ product.quantity }}</span>
                               <button @click="$parent.addProduct(product)" class="cart-menu__quantity">&plus;</button>
                               <button @click="$parent.removeProduct(product)" class="cart-menu__quantity">&minus;</button>
                           </li>
                       </ul>
                   </div>
               </li>`
};

export default cartItem;