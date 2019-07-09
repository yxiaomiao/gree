<?php
include "public.php";
$result=mysql_query("select * from piclist");
$data=array();
for($i=0;$i<mysql_num_rows($result);$i++){
$data[$i]=mysql_fetch_assoc($result);
}
echo json_encode($data);