require('./bootstrap');

import Vue from 'vue';
import App from '/home/otwoma/TodoList/resources/js/vue/app.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)


const app = new Vue({
    el:'#app',
    components:{ App }
});

// /home/otwoma/TodoList/resources/js/vue/app.vue