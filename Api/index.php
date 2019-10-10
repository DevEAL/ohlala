<?php

  include_once 'Models/ControllerOhlala.php';
  include_once 'Models/utils/utils.php';
  include_once 'Models/utils/subir.php';
  include_once 'Models/utils/setmail.php';

  $Controller = new ControllerOhlala ();

    $body = array( "NombreMarca" =>  "{$_POST['NombreMarca']}",
      "NombreResponsable" =>  "{$_POST['NombreResponsable']}",
      "Cedula_Nit" =>  "{$_POST['Cedula_Nit']}",
      "Telefono" =>  "{$_POST['Telefono']}",
      "Correo" =>  "{$_POST['Correo']}",
      "IdCiudad" =>  "{$_POST['IdCiudad']}",
      "IdCategoria" =>  "{$_POST['IdCategoria']}",
      "LinkMarca" =>  "{$_POST['LinkMarca']}",
      "LinkMarca1" => "{$_POST['LinkMarca1']}",
      "LinkMarca2" => "{$_POST['LinkMarca']}".";"."{$_POST['LinkMarca1']}",
      "Descripcion" =>  "{$_POST['Descripcion']}",
      "DescripcionMarca" =>  "{$_POST['DescripcionMarca']}",
      "ProductosRelacionados" =>  "{$_POST['ProductosRelacionados']}",
      "ProductoMayorValor" =>  "{$_POST['ProductoMayorValor']}",
      "ProductoMenorValor" =>  "{$_POST['ProductoMenorValor']}",
      "IdMedio" =>  "{$_POST['IdMedio']}"
    );

    if (isset($_FILES['portafolio'])) {
      $name = $_FILES['portafolio']['name'];
      $archivo = $_FILES['portafolio']['tmp_name'];
      // $body['portafolio'] = "http://localhost:8080/ohlala/Api/Doc/".$name;
      $body['portafolio'] = "http://ohlalashowroom.com/Api/Doc/".$name;

      $subir = Subir::Documento($name, $archivo);

    } else {
      $body['portafolio'] = 'Sin Portafolio';
    }
    $response= $Controller->Insert($body);

    header("Location:/confirm.html#/");

?>