'use strict';

const app = new Vue({
    el: '#app',
    data: {
        imgFolder: 'img/',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => {
                    return result.json();
                })
                .catch(error => {
                    this.$refs.error.errorMessage = error;
                    this.$refs.errorToFetch = true;
                });
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.errorMessage = error;
                    this.$refs.errorToFetch = true;
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.errorMessage = error;
                    this.$refs.errorToFetch = true;
                });
        },
        deleteJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.errorMessage = error;
                    this.$refs.errorToFetch = true;
                })
        }
    },
    components: {
        products,
        cart,
        filter_products,
        error
    }
});