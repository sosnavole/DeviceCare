<?php
require_once __DIR__ . '/core/controller.php';
require_once __DIR__ . '/core/router.php';
require_once __DIR__ . '/core/SosnaHelper.php';
require_once __DIR__ . '/core/SosnaMaster.php';
require_once __DIR__ . '/app/controllers/HomeController.php';


// Add the autoloader function
spl_autoload_register(function ($class) {
    $classPath = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
    $classPath = __DIR__ . '/' . $classPath;

    if (file_exists($classPath)) {
        require_once $classPath;
    }
});

// Instantiate the Router class
use Core\Router;
$router = new Router();
