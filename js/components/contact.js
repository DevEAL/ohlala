Vue.component("Contact", {
  template: // html
  `
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12 contact">
        <p class="title">FORMULARIO<br/><span>CONTACTO</span></p>
        <p class="parrafo">NO DUDES EN CONTACTARNOS<br/> PARA MAYOR INFORMACIÓN <br/> O PREGUNTAS.</p>
      </div>
      <div class="col-lg-6 col-sm-12 formulario">
        <form action="http://localhost:8080/ohlala/Api/Contact.php" method="POST" enctype="multipart/form-data">
          <div class="form-group">
            <label for="NombreMarca">NOMBRE*</label>
            <input type="text" class="form-control" name="Name" required>
          </div>
          <div class="form-group">
            <label for="NombreMarca">CORREO ELECTÓNICO*</label>
            <input type="text" class="form-control" name="Email" required>
          </div>
          <div class="form-group">
            <label for="NombreMarca">TELÉFONO / CELULAR</label>
            <input type="text" class="form-control" name="Phone">
          </div>
          <div class="form-group">
            <label for="">MENSAJE*</label>
            <textarea class="form-control" name="Menssage" rows="3" required></textarea>
          </div>
          <div>
            <input type="submit" class="btn boton mb-2" value="Enviar">
          </div>
        </form>
      </div>
    </div>
  </div>
  `
})