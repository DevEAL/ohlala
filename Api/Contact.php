<?php

  include_once 'Models/utils/setmail.php';

  $Nombre = $_POST['Name'];
  $Correo = $_POST['Email'];
  $cel = $_POST['Phone'] != '' ? $_POST['Phone'] : 'Sin Celular Registrado';
  $Mensaje = $_POST['Menssage'];

  $Contenido = "<p>Nombre: <span>{$Nombre}</span></p><p>Correo: <span>{$Correo}</span></p><p>Teléfono: <span>{$Celular}</span></p> <p>Mensaje: <span>{$Mensaje}</span></p> ";
  print_r($Contenido);
  $asunto = "Solicitud de Contacto";
  $email = SendMail::EnviarCorreo($asunto, $Contenido);

  header("Location:/confirm.html#/");
?>