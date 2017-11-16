import Vue from 'Vue'
import favList from './components/favlist'

new Vue({
    el: '#app',
    components: {
        favList
    },
    render: h => h(favList)
})