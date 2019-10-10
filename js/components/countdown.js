Vue.component("countdowns", {
  template: // html
  `
  <div class="container-fluid counter">
    <div class="row">
      
      <div class="col-lg-6 counter-box">
        <h4 class="faltan">Faltan</h4>
        <div id="getting-started"></div>
        <div class="time">
          <span>Dias</span><span>Horas</span><span>Minutos</span><span>Segundos</span>
        </div>
        <router-link to="/inscription" class="btn-inscribe">Inscribete </router-link>
      </div>
      <div class="pink-line"></div>
      <div class="col-lg-6 description-box">
        <h5 class="edicion">Edición</h5>
        <h3 class="ornamental">Ornamental</h3>
        <h4 class="noviembre">Noviembre</h4>
        <h4 class="date">16 y 17 <span class="line">|</span> <span class="year">2019</span></h4>
      </div>
    </div>
  </div>
  `
})
