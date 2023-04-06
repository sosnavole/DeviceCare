<?php
spl_autoload_register(function ($class) {
    $classPath = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
    $classPath = __DIR__ . '/../' . $classPath;

    if (file_exists($classPath)) {
        require_once $classPath;
    }
});
