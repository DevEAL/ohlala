<?php

class CrearHTML{
  public static function Html($body, $id){
    $HTMLStart =
      '<html>
        <head>
          <meta charset=utf-8"/>
        </head>
      <body>';
    $HTMLBody =
    '
      <div class="bg-primary">
        <h2>INSCRIPCIÓN NÚMERO '.$id.'</h2>
      </div>
      <div>
        <div>
          <h3>DATOS PRINCIPALES</h3>
        </div>
        <div>
          <p>NOMBRE DE LA MARCA: <span>'.$body['NombreMarca'].'</span></p>
          <p>NOMBRE RESPONSABLE: <span>'.$body['NombreResponsable'].'</span></p>
          <p>CÉDULA/NIT: <span>'.$body['Cedula_Nit'].'</span></p>
          <p>CONTACTO: <span>'.$body['Telefono'].'</span></p>
          <p>CORREO: <span>'.$body['Correo'].'</span></p>
          <p>CIUDAD: <span>'.$body['IdCiudad'].'</span></p>
          <p>CATEGORÍA: <span>'.$body['IdCategoria'].'</span></p>
          <p>SE ENTERÓ POR: <spam>'.$body['IdMedio'].'</span></spam>
        </div>
      </div>
      <div>
        <div>
          <h3>DETALLES</h3>
        </div>
        <div>
          <p>PÁGINA WEB: <span>'.$body['LinkMarca'].'</span></p>
          <p>LINK REDES SOCIALES: <span>'.$body['LinkMarca1'].'</span></p>
          <p>DESCRIPCIÓN DE LA MARCA</p>
          <p>'.$body['Descripcion'].'</p>
          <p>¿CÓMO SE RELACIONA SU MARCA Y/PRODUCTOS CON LA TEMÁTICA DE LA EDICIÓN ORNAMENTAL?</p>
          <p>'.$body['DescripcionMarca'].'</p>
          <p>CON QUÉ PRODUCTOS (RELACIONADOS CON LA TEMÁTICA) PARTICIPARÍA EN EL EVENTO?</p>
          <p>'.$body['ProductosRelacionados'].'</p>
          <p>PRODUCTO DE MAYOR VALOR: <span>'.$body['ProductoMayorValor'].'</span></p>
          <p>PRODUCTO DE MENOR VALOR: <span>'.$body['ProductoMenorValor'].'</span></p>
        </div>
      </div>
    ';
    $HTMLFinish =
    '
        </body>
      </html>
    ';

    $HTML = $HTMLStart . $HTMLBody . $HTMLFinish;

    return $HTML;
  }
}

?>