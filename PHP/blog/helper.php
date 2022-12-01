<?php

function dd($data)
{
    echo '<pre>';
    print_r($data);
    echo '</pre>';
    die();
}

function app_path($path) {
    return APP_PATH . $path;
}

function redirect($url)
{
    header("Location: " . app_path($url));
    die();
}


  

?>