<?php
/**
 * Created by PhpStorm.
 * User: Dell
 * Date: 04/05/2018
 * Time: 10:03
 */

header("content-type: text/plain");
$toto1 = isset($_GET['parametre1']) ? $_GET['parametre1'] : "";
$toto2 = isset($_GET['parametre2']) ? $_GET['parametre2'] : "";

if ($toto1 != "" && $toto2 !="") {
    echo "yes";
}

else {
    echo "boulet";
}