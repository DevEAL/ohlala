Vue.component("announcement", {
  template: // html
  `
  <div class="container">
    <form action="http://localhost:8080/ohlala/Api/index.php" method="POST" enctype="multipart/form-data">
      <div class="row">
        <div class="col-12 justify-content-center align-center">
          FORMULARIO INSCRIPCIÓN<br/>PARA INSCRIBIRTE COMPLETA EL SIGUIENTE FORMULARIO
        </div>
        <div class="col-6 ">
          <div class="form-group">
            <label for="NombreMarca">NOMBRE DE LA MARCA*</label>
            <input type="text" class="form-control" name="NombreMarca">
          </div>
          <div class="form-group">
            <label for="">NOMBRE RESPONSABLE/RESPONSABLE DE LA MARCA*</label>
            <input type="text" class="form-control" name="NombreResponsable">
          </div>
          <div class="form-group">
            <label for="">CÉDULA/NIT*</label>
            <input type="text" class="form-control" name="Cedula_Nit">
          </div>
          <div class="form-group">
            <label for="">TELÉFONO DE CONTACTO*</label>
            <input type="text" class="form-control" name="Telefono" value="">
          </div>
          <div class="form-group">
            <label for="">CORREO ELECTRÓNICO*</label>
            <input type="text" class="form-control" name="Correo" value="">
          </div>
          <div class="form-group">
            <label for="">CIUDAD*</label>
            <input type="text" class="form-control" name="IdCiudad" value="">
          </div>
          <div class="form-group">
            <label for="">CATEGORÍA*</label>
            <select class="form-control" name="IdCategoria" placeholder="CATEGORÍA">
              <option>CATEGORÍA</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">PARA CONOCER MEJOR SU MARCA. POR FAVOR COMPLETE AL MENOS UNA DE LAS SIGUIENTES OPCIONES*:</label>
          </div>
          <div class="form-group">
            <label for="">PÁGINA WEB</label>
            <input type="text" class="form-control" name="LinkMarca" value="">
          </div>
          <div class="form-group">
            <label for="">PORTAFOLIO DE LA MARCA</label>
            <input type="file" class="form-control-file" name="portafolio">
          </div>
          <div class="form-group">
            <label for="">LINK REDES SOCIALES</label>
            <input type="text" class="form-control" name="LinkMarca1" value="">
          </div>
          <div class="form-group">
            <label for="">DESCRIPCIÓN DE LA MARCA*</label>
            <textarea class="form-control" name="Descripcion" rows="3"></textarea>
          </div>
        </div>
        <div class="col-6 ">
          <div class="form-group">
            <label for="">¿CÓMO SE RELACIONA SU MARCA Y/PRODUCTOS CON LA TEMÁTICA DE LA EDICIÓN ORNAMENTAL?*</label>
            <textarea class="form-control" name="DescripcionMarca" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="">CON QUÉ PRODUCTOS (RELACIONADOS CON LA TEMÁTICA) PARTICIPARÍA EN EL EVENTO?*</label>
            <textarea class="form-control" name="ProductosRelacionados" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="">RANGO DE PRECIOS DE SUS PRODUCTOS</label>
          </div>
          <div class="form-group">
            <label for="">PRODUCTO DE MAYOR VALOR*</label>
            <input type="text" class="form-control" name="ProductoMayorValor" value="">
          </div>
          <div class="form-group">
            <label for="">PRODUCTO DE MENOR VALOR*</label>
            <input type="text" class="form-control" name="ProductoMenorValor" value="">
          </div>
          <div class="form-group">
            <label for="">¿POR QUÉ MEDIO SE ENTERÓ DE LA FERIA?*</label>
            <select type="" class="form-control" name="IdMedio" value="">
              <option>MEDIO</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <input type="submit" class="btn btn-primary mb-2" value="Enviar">
          </div>
        </div>
      </div>
    </form>
  </div>
  `
})