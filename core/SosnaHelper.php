<?php

class SosnaHelper {
    public static function asset($path) {
        $basePath = '/public';

        return $basePath . '/' . trim($path, '/');
    }

    public static function css($filename) {
        return self::asset('css/' . $filename . '.css');
    }

    public static function js($filename) {
        return self::asset('js/' . $filename . '.js');
    }

    public static function img($filename) {
        return self::asset('img/' . $filename . '');
    }

    public static function cssimg($filename) {
        return self::asset('img/' . $filename . '.jpg');
    }
}