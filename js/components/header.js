Vue.component("headers", {
  template: // html
  `
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="img/svg/menu-icon.svg" alt="">
          </button>
          <a class="navbar-brand" href="#"><img src="img/svg/ohlala-logo.svg" alt="Logo Ohlala"> </a>
        </div>
        <div class="col-6 sup-nav">
          <a class="navbar-social" href="https://www.facebook.com/ohlalaferiabogota/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a class="navbar-social" href="https://www.instagram.com/ohlalaferia/?hl=es-la" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a class="navbar-social" href="https://wa.me/+5713108658880?text=Saber%20más%20sobre%20Ohlala%20Showroom" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
        </div>
        <div class="col-12">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
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
        </div>
      </div>
    </div>
  </nav>
  `
})
