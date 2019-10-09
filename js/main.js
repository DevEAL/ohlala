// constantes de rutas
const Home = {
  template: '#home'
}
const Contact = {
  template: '#contact'
}
const announcement = {
  template: '#announcement'
}
const inscription = {
  template: '#inscription'
}

const routes = [
  { path: '/', component: Home },
  { path: '/announcement', component: announcement },
  { path: '/Contact', component: Contact },
  { path: '/inscription', component: inscription}
]

// Constantes de rutas
const router = new VueRouter({
  routes // short for `routes: routes`
})
// declaro la instancia Vue

var app = new Vue({
  router,
  el: '#app',
    data: {
    },
vuetify: new Vuetify(),
}).$mount('#app')