import Vue from 'Vue'
import login from '../login/index'

new Vue({
    el: '#app',
    components: {
        login
    },
    render: h => h(login)
})