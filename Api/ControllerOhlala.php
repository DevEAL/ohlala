<?php
  include_once 'ModelOhlala.php';
  include_once 'utils.php';

  class ControllerOhlala {
    private $error;
    private $imagen;
    function Insert($body) {

      $model= new  ModelOhlala();

      $response = $model->Insert($body);

      if ($response) {
        return utils::exito("Registro Exitoso");
      } else {
        return utils::error("Error de Insercion");
      }
    }

  }
?>