const error = {
    data() {
        return {
            errorToFetch: false,
            errorMessage: ''
        };
    },
    template: `<div v-show="errorToFetch" class="error">
                   <span class="error__message">{{ errorMessage }}</span>
                   <button @click="errorToFetch=!errorToFetch" class="error__close">&times;</button>
               </div>`
};

export default error;