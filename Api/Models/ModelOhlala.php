<?php
  include_once 'config/db.php';
  include_once 'utils/setmail.php';
  include_once 'utils/CrearHTML.php';

  class ModelOhlala extends bd{
    function Insert ($body) {

      $sql="INSERT INTO oh_Incripcion (NombreMarca,NombreResponsable, Cedula_Nit, Telefono, Correo, IdCiudad, IdCategoria, LinkMarca, Descripcion, DescripcionMarca, ProductosRelacionados, ProductoMayorValor, ProductoMenorValor, IdMedio, portafolio)
      VALUES( '{$body['NombreMarca']}','{$body['NombreResponsable']}', '{$body['Cedula_Nit']}','{$body['Telefono']}','{$body['Correo']}', '{$body['IdCiudad']}', '{$body['IdCategoria']}','{$body['LinkMarca2']}', '{$body['Descripcion']}', '{$body['DescripcionMarca']}', '{$body['ProductosRelacionados']}', '{$body['ProductoMayorValor']}',' {$body['ProductoMenorValor']}', '{$body['IdMedio']}', '{$body['portafolio']}')";

      try {
        $db = new bd();
        $db = $db->connect();
        $sth = $db->prepare($sql);
        $sth->execute();
        $id = $db->lastInsertId();
        $template = CrearHTML::Html($body, $id);
        $asunto = 'Inscripción Número '.$id;
        $email = SendMail::EnviarCorreo($asunto, $template);
        if ($email) {
          return true;
        } else {
          return false;
        }
      } catch (PDOException $e) {
        echo $e->getMessage();
        return false;
      }
    }
  }
?>