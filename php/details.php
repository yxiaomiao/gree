<?php
include "public.php";
 $sid=$_GET['sid'];
$result=mysql_query("select * from piclist where picid=$sid");
$data=array();
for($i=0;$i<mysql_num_rows($result);$i++){
    $data[$i]=mysql_fetch_assoc($result);
}
 echo json_encode($data);