<?php

  include_once 'Models/utils/setmail.php';

  $Nombre = $_POST['Name'];
  $Correo = $_POST['Email'];
  $Celular = $_POST['Phone'];
  $Mensaje = $_POST['Menssage'];

  $Contenido = "<p>Nombre: <span>{$Nombre}</span></p><p>Correo: <span>{$Correo}</span></p><p>Teléfono: <span>{$Celular}</span></p> <p>Mensaje: <span>{$Mensaje}</span></p> ";
  $asunto = "Solicitud de Contacto";
  $email = SendMail::EnviarCorreo($asunto, $Contenido);

  header("Location:/confirm.html#/");
?>