const app = new Vue (
    {
        el: '#root',

        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then (function (response){
                const result = response.data;
                console.log(result);
            });
        },
    }
);