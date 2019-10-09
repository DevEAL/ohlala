<?php
  include_once 'db.php';
  include_once 'setmail.php';

  class ModelOhlala extends bd{
    function Insert ($body) {

      $sql="INSERT INTO oh_Incripcion (NombreMarca,NombreResponsable, Cedula_Nit, Telefono, Correo, IdCiudad, IdCategoria, LinkMarca, Descripcion, DescripcionMarca, ProductosRelacionados, ProductoMayorValor, ProductoMenorValor, IdMedio)
      VALUES( '{$body['NombreMarca']}','{$body['NombreResponsable']}', '{$body['Cedula_Nit']}','{$body['Telefono']}','{$body['Correo']}', '{$body['IdCiudad']}', '{$body['IdCategoria']}','{$body['LinkMarca']}', '{$body['Descripcion']}', '{$body['DescripcionMarca']}', '{$body['ProductosRelacionados']}', '{$body['ProductoMayorValor']}',' {$body['ProductoMenorValor']}', {$body['IdMedio']})";

      try {
        $db = new bd();
        $db = $db->connect();
        $sth = $db->prepare($sql);
        $sth->execute();
        $id = $db->lastInsertId();

        $asunto = 'Inscripción';
        // SendMail::EnviarCorreo($asunto, $body);

        return true;
      } catch (PDOException $e) {
        echo $e->getMessage();
        return false;
      }
    }
  }
?>