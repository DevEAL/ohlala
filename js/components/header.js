Vue.component("headers", {
  template: // html
  `
  <div>
    <v-app-bar>
      <v-row cols="12">
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <v-tabs>
            <v-tab to="/">Inicio</v-tab>
            <v-tab to="/announcement">Convocatoria</v-tab>
            <v-tab to="/contact">Contacto</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
  `
})