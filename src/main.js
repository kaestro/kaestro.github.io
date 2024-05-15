import Vue from 'vue'
import App from './App.vue'
import CategoryList from './CategoryList.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import MainContent from './MainContent.vue'
import RecentPosts from './RecentPosts.vue'

Vue.component('app-header', Header)
Vue.component('main-content', MainContent)
Vue.component('app-footer', Footer)
Vue.component('recent-posts', RecentPosts)
Vue.component('category-list', CategoryList)

new Vue({
    render: h => h(App),
}).$mount('#app')
