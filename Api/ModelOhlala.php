<?php
  include_once 'db.php';
  include_once 'setmail.php';

  class ModelOhlala extends bd{
    function Insert ($body) {
      try {
        $db = $this->connect()->prepare('INSERT INTO oh_Incripción (idIncripción, NombreMarca, Cedula/Nit, Telefono, Correo, IdCiudad, IdCategoria, Descripcion, DescripcionMarca, ProductosRelacionados, ProductoMayorValor, ProductoMenorValor, IdMedio)
        VALUES(:idIncripción, :NombreMarca, :Cedula/Nit, :Telefono, :Correo, :IdCiudad, :IdCategoria, :Descripcion, :DescripcionMarca, :ProductosRelacionados, :ProductoMayorValor, :ProductoMenorValor, :IdMedio');
        $db->execute($body);

        $id = $this->connect()->lastInsertId();
        $asunto = 'Inscripción';
        SendMai::EnviarCorreo($asunto, $body);

        return true;
      } catch (PDOException $e) {
        echo $e->getMessage();
        return false;
      }
    }
  }
?>