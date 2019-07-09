<?php
include 'public.php';
$tel=$_GET['tel'];
$result=mysql_query("select * from usertable where tel='$tel'");
$rows=mysql_num_rows($result);
echo $rows;
 if(isset($_POST['submit'])){
   $tel=$_POST['telphone'];
   $pass=sha1($_POST['password']);
 mysql_query("insert into usertable(tel,password)values('$tel','$pass')");
 header('location:http://10.31.158.60:8080/gree/gree/src/index.html');
 }