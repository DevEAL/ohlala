<?php

  include_once 'ControllerOhlala.php';
  include_once 'utils.php';
  include_once 'subir.php';

  $Controller = new ControllerOhlala ();

  if(isset($_POST['NombreMarca'])) {

    $body = array( "NombreMarca" =>  $_POST['NombreMarca'],
      "NombreResponsable" =>  $_POST['NombreResponsable'],
      "Cedula_Nit" =>  $_POST['Cedula_Nit'],
      "Telefono" =>  $_POST['Telefono'],
      "Correo" =>  $_POST['Correo'],
      "IdCiudad" =>  $_POST['IdCiudad'],
      "IdCategoria" =>  $_POST['IdCategoria'],
      "LinkMarca" =>  $_POST['LinkMarca'].";".$_POST['LinkMarca1'],
      "Descripcion" =>  $_POST['Descripcion'],
      "DescripcionMarca" =>  $_POST['DescripcionMarca'],
      "ProductosRelacionados" =>  $_POST['ProductosRelacionados'],
      "ProductoMayorValor" =>  $_POST['ProductoMayorValor'],
      "ProductoMenorValor" =>  $_POST['ProductoMenorValor'],
      "IdMedio" =>  $_POST['IdMedio']
    );

    print_r($body);

    // $response= $Controller->Insert($body);

    if (isset($_FILES['portafolio'])) {
      $name = $_FILES['portafolio']['name'];
      $archivo = $_FILES['portafolio']['tmp_name'];

      Subir::Documento($name, $archivo);
    }
  }

?>