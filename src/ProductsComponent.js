import product from "./ProductsItemComponent";

const products = {
    components: {
        product
    },
    data() {
        return {
            goods: [],
            filtered: []
        };
    },
    methods: {
        filterGoods(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.goods = this.filtered.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$root.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.goods.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    template: `<div class="products-wrap">
                   <product v-for="item in goods" :key="item.id_product" :product="item"></product>
               </div>`
};

export default products;