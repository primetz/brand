(()=>{"use strict";new Vue({el:"#app",data:{imgFolder:"img/"},methods:{getJson(t){return fetch(t).then((t=>t.json())).catch((t=>{this.$refs.error.errorMessage=t,this.$refs.errorToFetch=!0}))},postJson(t,r){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((t=>t.json())).catch((t=>{this.$refs.error.errorMessage=t,this.$refs.errorToFetch=!0}))},putJson(t,r){return fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((t=>t.json())).catch((t=>{this.$refs.error.errorMessage=t,this.$refs.errorToFetch=!0}))},deleteJson(t,r){return fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((t=>t.json())).catch((t=>{this.$refs.error.errorMessage=t,this.$refs.errorToFetch=!0}))}},components:{products:{components:{product:{props:["product"],template:'<div class="products-item">\n                   <a href="pages/product.html" class="products-item-link">\n                        <img :src="$root.imgFolder + product.product_img" :alt="product.product_name" width="360" height="420"\n                             class="products-item-photo">\n                        <div class="products-item-text-wrapper">\n                            <h3 class="products-item-title">{{ product.product_name }}</h3>\n                            <p class="products-item-text">{{ product.product_description }}</p>\n                            <span class="products-item-price">&dollar;{{ product.price}}</span>\n                        </div>\n                   </a>\n                   <button @click="$root.$refs.cart.addProduct(product)" class="products-item-button">\n                       <svg width="26" height="24" viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z"/>\n                        </svg>\n                       Add to Cart\n                   </button>\n               </div>'}},data:()=>({goods:[],filtered:[]}),methods:{filterGoods(t){let r=new RegExp(t,"i");this.goods=this.filtered.filter((t=>r.test(t.product_name)))}},mounted(){this.$root.getJson("/api/products").then((t=>{for(let r of t)this.$data.goods.push(r),this.$data.filtered.push(r)}))},template:'<div class="products-wrap">\n                   <product v-for="item in goods" :key="item.id_product" :product="item"></product>\n               </div>'},cart:{components:{cartItem:{props:["product"],template:'<li class="cart-menu__item">\n                   <img :src="$root.imgFolder + product.product_img" height="105">\n                   <div class="cart-menu__prod-info">\n                       <h3>{{ product.product_name }}</h3>\n                       <ul class="cart-menu__sub">\n                           <li>Price:&nbsp;\n                               <span>&dollar;{{ product.price * product.quantity }}</span>\n                           </li>\n                           <li>Color:&nbsp;\n                               <span>Red</span>\n                           </li>\n                           <li>Size:&nbsp;\n                               <span>xl</span>\n                           </li>\n                           <li>Quantity:\n                               <span>{{ product.quantity }}</span>\n                               <button @click="$parent.addProduct(product)" class="cart-menu__quantity">&plus;</button>\n                               <button @click="$parent.removeProduct(product)" class="cart-menu__quantity">&minus;</button>\n                           </li>\n                       </ul>\n                   </div>\n               </li>'}},data:()=>({showCart:!1,products:[]}),methods:{addProduct(t){const r=this.products.find((r=>r.id_product===t.id_product));if(r)this.$root.putJson(`/api/cart/${r.id_product}`,{quantity:1}).then((t=>{1===t.result&&r.quantity++}));else{const r=Object.assign({quantity:1},t);this.$root.postJson("/api/cart",r).then((t=>{1===t.result&&this.products.push(r)}))}},removeProduct(t){const r=this.products.find((r=>r.id_product===t.id_product));r&&r.quantity>1?this.$root.putJson(`/api/cart/${r.id_product}`,{quantity:-1}).then((t=>{1===t.result&&r.quantity--})):this.$root.deleteJson(`/api/cart/${r.id_product}`,t).then((r=>{1===r.result&&this.products.splice(this.products.indexOf(t),1)}))},getTotal(){return{price:this.products.reduce(((t,r)=>t+r.price*r.quantity),0),quantity:this.products.reduce(((t,r)=>t+r.quantity),0)}}},mounted(){this.$root.getJson("/api/cart").then((t=>{for(let r of t.contents)this.products.push(r)}))},template:'<div class="cart-menu-wrp">\n                   <button @click="showCart = !showCart" :data-count="getTotal().quantity" class="page-header-btn cart-btn">\n                       <svg class="page-header-btn-icon" width="32" height="29" viewBox="0 0 32 29"\n                         xmlns="http://www.w3.org/2000/svg">\n                        <path d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z"/>\n                    </svg>\n                   </button>\n                   <div v-show="showCart" class="cart-menu">\n                       <span v-show="!products.length" class="cart-menu__no-data">No products in the cart</span>\n                       <div v-show="products.length" class="cart-menu__total">\n                           <span class="total-price">Total price: {{ getTotal().price }}</span>\n                           <span class="total-quantity">Total amount: {{ getTotal().quantity }}</span>\n                       </div>\n                       <ul class="cart-menu__list">\n                           <cart-item v-for="product in products" :key="product.id_product" :product="product"></cart-item>\n                       </ul>\n                   </div>\n               </div>'},filter_products:{data:()=>({filter:""}),template:'<form @submit.prevent="$root.$refs.products.filterGoods(filter)" action="#" class="page-header-search-box">\n                   <label for="search-btn" class="page-header-search-control">\n                       <svg width="27" height="28" viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22463 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71814 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z"/>\n                    </svg>\n                   </label>\n                   <input v-model="filter" type="search" id="search-btn" placeholder="Site search" class="page-header-search-input" tabindex="2">\n               </form>'},error:{data:()=>({errorToFetch:!1,errorMessage:""}),template:'<div v-show="errorToFetch" class="error">\n                   <span class="error__message">{{ errorMessage }}</span>\n                   <button @click="errorToFetch=!errorToFetch" class="error__close">&times;</button>\n               </div>'}}})})();