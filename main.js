const { createApp } = Vue;

createApp({
    data() {
        return {
            userEmail: [],
        }
    },
    methods: {
        generaEmail() {
            for (let i = 0; i < 10; i++) {            
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                console.log(resp.data.response);
                let singleEmail = resp.data.response;
                this.userEmail.push(singleEmail);
                // document.getElementById("container").innerHTML  += `${this.userEmail}`
            });
            }
        }
    },
    mounted() {      
    }
}).mount('#app')