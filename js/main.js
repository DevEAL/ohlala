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
// Constantes de rutas
const router = new VueRouter({
  routers: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/announcement',
      component: announcement
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
// declaro la instancia Vue

var app = new Vue({
  router,
  el: '#app',
  vuetify: new Vuetify(),
}).$mount('#app')