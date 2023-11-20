const { createApp } = Vue;

createApp({
    data() {
        return {
            user: "Utente Anonimo",
            userEmail: ""
        }
    },
    methods: {
        generaEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
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