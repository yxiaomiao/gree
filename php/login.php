<?php
include "public.php";
if(isset($_POST['tel'])){
   $tel=$_POST['tel'];
   $pass=sha1($_POST['pass']);
   $result=mysql_query("select * from usertable where tel='$tel'");
  $rows=mysql_num_rows($result);
  if($rows>0){
    $resultpass=mysql_query("select * from usertable where tel='$tel' and password='$pass'");
    $rowspass=mysql_num_rows($resultpass);
    if($rowspass>0){
       echo $rowspass;
    }
    else{
        echo 2;
    }
  }
  else{
      echo $rows;
  }
}
