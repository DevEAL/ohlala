Vue.component("announcement", {
  template: // html
  `
  <div class="container">
    <form action="Api/index.php" method="POST" enctype="multipart/form-data">
      <div class="row">
        <div class="col-12 justify-content-center align-center titulo">
          <p class="texto_titulo">FORMULARIO <br/><span class="texto_titulo">INSCRIPCIÓN</span></p>
          <p>PARA INSCRIBIRTE COMPLETA EL <br/>SIGUIENTE FORMULARIO</p>
        </div>
        <div class="col-lg-6 col-sm-12 formulario">
          <div class="form-group">
            <label for="NombreMarca">NOMBRE DE LA MARCA*</label>
            <input type="text" class="form-control" name="NombreMarca" required>
          </div>
          <div class="form-group">
            <label for="">NOMBRE RESPONSABLE/RESPONSABLE DE LA MARCA*</label>
            <input type="text" class="form-control" name="NombreResponsable" required>
          </div>
          <div class="form-group">
            <label for="">CÉDULA/NIT*</label>
            <input type="text" class="form-control" name="Cedula_Nit" required>
          </div>
          <div class="form-group">
            <label for="">TELÉFONO DE CONTACTO*</label>
            <input type="text" class="form-control" name="Telefono" required>
          </div>
          <div class="form-group">
            <label for="">CORREO ELECTRÓNICO*</label>
            <input type="text" class="form-control" name="Correo" required>
          </div>
          <div class="form-group">
            <label for="">CIUDAD*</label>
            <input type="text" class="form-control" name="IdCiudad" required>
          </div>
          <div class="form-group borde">
            <label for="">CATEGORÍA*</label>
            <select class="form-control custom-select" name="IdCategoria" placeholder="CATEGORÍA">
              <option>CATEGORÍA</option>
              <option>Accesorios</option>
              <option>Arte</option>
              <option>Artesanías</option>
              <option>Belleza/Salud</option>
              <option>Decoración/Hogar</option>
              <option>Entretenimiento</option>
              <option>Gastronomía</option>
              <option>Infantil</option>
              <option>Libros/Papelería</option>
              <option>Mascotas</option>
              <option>Moda</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">PARA CONOCER MEJOR SU MARCA. POR FAVOR <br/> COMPLETE AL MENOS UNA DE LAS <br/> SIGUIENTES OPCIONES*:</label>
          </div>
          <div class="form-group">
            <label for="">PÁGINA WEB</label>
            <input type="text" class="form-control" name="LinkMarca" >
          </div>
          <div class="form-group">
            <label for="">PORTAFOLIO DE LA MARCA</label>
            <input type="file" class="form-control-file" name="portafolio">
          </div>
          <div class="form-group borde">
            <label for="">LINK REDES SOCIALES</label>
            <input type="text" class="form-control" name="LinkMarca1" >
          </div>
          <div class="form-group">
            <label for="">DESCRIPCIÓN DE LA MARCA*</label>
            <textarea class="form-control" name="Descripcion" rows="3" placeholder="MAXIMO 500 PALABRAS" required></textarea>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 formulario">
          <div class="form-group">
            <label for="">¿CÓMO SE RELACIONA SU MARCA Y/PRODUCTOS CON LA TEMÁTICA DE LA EDICIÓN ORNAMENTAL?*</label>
            <textarea class="form-control" name="DescripcionMarca" rows="3" placeholder="MAXIMO 300 PALABRAS" required></textarea>
          </div>
          <div class="form-group borde">
            <label for="">CON QUÉ PRODUCTOS (RELACIONADOS CON LA TEMÁTICA) PARTICIPARÍA EN EL EVENTO?*</label>
            <textarea class="form-control" name="ProductosRelacionados" rows="3" placeholder="EJEMPLO: CAMISAS, CHAQUETAS, BUFANDAS, MEDIAS ETC." required></textarea>
          </div>
          <div class="form-group">
            <label for="">RANGO DE PRECIOS DE SUS PRODUCTOS</label>
          </div>
          <div class="form-group">
            <label for="">PRODUCTO DE MAYOR VALOR*</label>
            <input type="text" class="form-control" name="ProductoMayorValor" required>
          </div>
          <div class="form-group borde">
            <label for="">PRODUCTO DE MENOR VALOR*</label>
            <input type="text" class="form-control" name="ProductoMenorValor" required>
          </div>
          <div class="form-group">
            <label for="">¿POR QUÉ MEDIO SE ENTERÓ DE LA FERIA?*</label>
            <select type="" class="form-control custom-select" name="IdMedio" required>
              <option>MEDIO</option>
              <option>Información de un Amigo</option>
              <option>Redes Sociales</option>
              <option>Internet</option>
              <option>Correo</option>
              <option>Otra</option>
            </select>
          </div>
          <div>
            <input type="submit" class="btn boton mb-2" value="Enviar">
          </div>
        </div>
      </div>
    </form>
  </div>
  `
})