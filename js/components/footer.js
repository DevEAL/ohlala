Vue.component("footers", {
  template: // html
  `
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/announcement">Convocatoria</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacto</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4 social-footer">
          <a class="navbar-social" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a class="navbar-social" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a class="navbar-social" href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
        </div>
        <div class="col-md-4 logo-footer">
          <img src="img/svg/ohlala-logo-w.svg" alt="">
        </div>
      </div>
    </div>
  </footer>
  `
})