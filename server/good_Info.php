<?php
    $link = mysqli_connect('127.0.0.1' , 'root' , 'admin123' , 'bk2012' , 3306);
    $sql = "SELECT * FROM `goods`";
    $res = mysqli_query($link,$sql);
    $arr = mysqli_fetch_all($res,MYSQLI_ASSOC);

    echo json_encode($arr);