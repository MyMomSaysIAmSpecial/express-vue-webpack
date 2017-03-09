import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const vue = new Vue({
    el: 'ol',
    data: {
        todos: []
    },
    methods: {
        doMagic: function (event) {
            this.$http.get('http://192.168.33.33:9615/').then(response => {
                this.todos = response.body;
            }, response => {
                // error callback
            });
        }
    }
});

vue.doMagic();