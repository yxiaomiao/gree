<?php
header('content-type:text/html;charset=utf-8');
// echo $_GET['username'];
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
$conn=mysql_connect(HOST,USERNAME,PASSWORD);
mysql_query('SET NAMES UTF8');
$sel=mysql_select_db("gree");