const app = new Vue (
    {
        el: '#root',

        data: {

            emails: [],

        },

        created() {

            // Creo un ciclo for per mostrare 10 email nell'array generate randomicamente con API
            for(let i=0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                    console.log(this.emails);
                });
            };           
         
        },
    }
);