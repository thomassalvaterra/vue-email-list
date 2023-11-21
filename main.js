const { createApp } = Vue;

createApp({
    data() {
        return {
            userEmail: [],
        }
    },
    methods: {
        generaEmail() {

            this.userEmail = [];

            for (let i = 0; i < 10; i++) {            
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    let singleEmail = resp.data.response;
                    if(this.userEmail.length < 10) {
                        this.userEmail.push(singleEmail);
                    }    
                });
            }           
        }
    },
    mounted() {      
    }
}).mount('#app')