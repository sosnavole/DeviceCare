<?php

namespace Core;

use Core\Database;

class Controller {
    protected function model($model) {
        require_once __DIR__ . '/../app/models/' . $model . '.php';
        return new $model;
    }

    protected function view($view, $data = []) {
        $viewPath = __DIR__ . '/../app/views/' . $view . '.sosna';
        $layoutPath = __DIR__ . '/../app/views/layout.sosna';
    
        if (file_exists($layoutPath)) {
            ob_start();
            include $viewPath;
            $viewContent = ob_get_clean();
    
            ob_start();
            include $layoutPath;
            $layoutContent = ob_get_clean();
    
            $layoutContent = str_replace('[kontent]', $viewContent, $layoutContent);
            echo $this->render($layoutContent);
        } else {
            include $viewPath;
        }
    }
    
    

    protected function render($content) {
        $content = $this->nahradaAssetTagu($content);
        $content = $this->dbConnectTag($content);
    
        return $content;
    }
    
    private function dbConnectTag($content) {
        return preg_replace_callback(
            '/\[db-connect\]/',
            function () {
                ob_start();
                require_once 'core/Database.php';
                try {
                    $db = Database::getInstance();
                    $conn = $db->getConnection();
                } catch (PDOException $e) {
                    echo "Error: " . $e->getMessage();
                }
                return ob_get_clean();
            },
            $content
        );
    }
       

    
    private function nahradaAssetTagu($content) {
        $content = preg_replace_callback(
            '/\[css\((.*?)\)\]/',
            function ($souhlas) {
                return '<link rel="stylesheet" type="text/css" href="' . \SosnaHelper::css($souhlas[1]) . '">';
            },
            $content
        );
    
        $content = preg_replace_callback(
            '/\[js\((.*?)\)\]/',
            function ($souhlas) {
                return '<script src="' . \SosnaHelper::js($souhlas[1]) . '"></script>';
            },
            $content
        );

        $content = preg_replace_callback(
            '/\[img\((.*?)\)\]/',
            function ($souhlas) {
                return '"' . \SosnaHelper::img($souhlas[1]) . '"';
            },
            $content
        );

        $content = preg_replace_callback(
            '/cssimg\[(.*?)\]/',
            function ($souhlas) {
                return 'url("' . \SosnaHelper::cssimg($souhlas[1]) . '")';
            },
            $content
        );

        $content = $this->dbConnectTag($content);

        return $content;
    }
}

