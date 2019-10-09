<?php
  class Subir {
    public static function Documento($name, $archivo) {
      $carpeta = "Doc/";

      opendir($carpeta);

      $destino = $carpeta.$name;

      copy($archivo, $destino);

      $nombre = $name;
    }
  }
?>