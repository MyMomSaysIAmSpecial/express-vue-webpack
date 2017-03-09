import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
    el: 'p',
    data: {
        name: 'Test user please ignore'
    },
    methods: {
        dorest: function (event) {
            this.$http.get('http://192.168.33.33:9615/').then(response => {
                //console.log(response.body);
                //console.log(response.body.user.name);
                this.name = response.body.user.name;
            }, response => {
                // error callback
            });
        }
    }
});