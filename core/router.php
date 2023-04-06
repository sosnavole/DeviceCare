<?php

namespace Core;

class Router {
    private $controller = 'HomeController';
    private $method = 'index';
    private $params = [];

    public function __construct() {
        $url = $this->parseUrl();
        $controllerFile = __DIR__ . '/../app/controllers/HomeController.php';

        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            $controllerClass = "App\\Controllers\\" . $this->controller;
            $this->controller = new $controllerClass;
            $this->controller->handleRequest($url);
        }
    }

    private function parseUrl() {
        if (isset($_GET['url'])) {
            $url = $_GET['url'];
            $url = rtrim($url, '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            return $url;
        }
        return '';
    }
}
