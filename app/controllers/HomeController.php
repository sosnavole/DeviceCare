<?php

// App/Controllers/HomeController.php

// App/Controllers/HomeController.php

namespace App\Controllers;

use Core\Controller;

class HomeController extends Controller {
    public function index() {
        $this->view('home/index');
    }

    public function about() {
        $this->view('about/index');
    }

    public function error() {
        $this->view('error/index');
    }

    public function contact() {
        $this->view('contact/index');
    }

    public function tisk() {
        $this->view('tisk/index');
    }

    public function faq() {
        $this->view('faq/index');
    }

    public function kalkulacka() {
        $this->view('kalkulacka/index');
    }

    public function framework() {
        $this->view('framework  /index');
    }

    public function iphone13() {
        $this->view('iphone/iphone13/index');
    }

    public function iphone12() {
        $this->view('iphone/iphone12/index');
    }

    public function iphone11() {
        $this->view('iphone/iphone11/index');
    }

    public function iphonex() {
        $this->view('iphone/iphonex/index');
    }

    public function iphonexs() {
        $this->view('iphone/iphonexs/index');
    }

    public function iphonexr() {
        $this->view('iphone/iphonexr/index');
    }

    public function iphone8() {
        $this->view('iphone/iphone8/index');
    }

    public function iphone8plus() {
        $this->view('iphone/iphone8plus/index');
    }

    public function iphone7() {
        $this->view('iphone/iphone7/index');
    }


    public function handleRequest($url) {
        $segments = explode('/', $url);
        $method = isset($segments[0]) ? $segments[0] : '';
    
        if (empty($method)) {
            $this->index();
        } elseif (method_exists($this, $method)) {
            $this->$method();
        } else {
            $this->error();
        }
    }
}
