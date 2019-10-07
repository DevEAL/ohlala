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
  router: [
    {
      path: '/',
      component: home
    },
    {
      path: '/announcement',
      component: announcement
    },
    {
      path: '/contact',
      component: contact
    }
  ]
})
// declaro la instancia Vue

var app = new Vue({
  router,
  el: '#app',
  data() {
    return {

    }
  },
  vuetify: new Vuetify(),
}).$mount('#app')