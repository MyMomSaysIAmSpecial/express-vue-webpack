import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const vue = new Vue({
    el: 'ul',
    data: {
        todos: []
    },
    methods: {
        doMagic: function (event) {
            this.$http.get('http://192.168.33.33:9615/').then(response => {
                this.todos = response.body;
                console.log(response.body);
            }, response => {
                // error callback
            });
        }
    }
});

vue.doMagic();