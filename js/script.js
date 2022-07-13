const app = new Vue (
    {
        el: '#root',

        data: {
            email: '',
        },

        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.email = response.data.response;
            });
        },
    }
);