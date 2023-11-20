const { createApp } = Vue;

createApp({
    data() {
        return {
            userEmail: []
        }
    },
    methods: {
        generaEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                console.log(resp.data.response);
                this.userEmail = resp.data.response;
                console.log(this.userEmail);
            });
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            console.log("Ricevuto: ", resp.data);
        });      
    }
}).mount('#app')