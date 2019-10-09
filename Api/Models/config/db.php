<?php

class bd{
    private $host;
    private $db;
    private $user;
    private $password;
    private $charset;

    public function __construct(){
        $this->host     = '127.0.0.1';
        $this->db       = 'ohlala';
        $this->user     = 'root';
        $this->password = "";
        //$this->password = "6#vWHD_$";
        $this->charset  = 'utf8mb4';
    }

    //mysql -e "USE todolistdb; select*from todolist" --user=azure --password=6#vWHD_$ --port=49175 --bind-address=52.176.6.0

    function connect(){
        try{
            $mysqlConnect = "mysql:host=$this->host;dbname=$this->db";
            $dbConnecion = new PDO($mysqlConnect, $this->user, $this->password);
            $dbConnecion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $dbConnecion;

        }catch(PDOException $e){
            print_r('Error connection: ' . $e->getMessage());
        }
    }
}






?>