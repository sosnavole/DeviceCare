<?php

namespace Core;

use PDO;

class Database {
    private static $instance;
    private $connection;

    private function __construct() {
        try {
            $this->connection = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die('Connection failed: ' . $e->getMessage());
        }
    }

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->connection;
    }

    private function __clone() {}
    public function __wakeup() {}
}
