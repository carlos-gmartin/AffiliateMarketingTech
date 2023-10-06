<?php
  $host = "localhost:3306"; 
  $user = "affilia5_carlos"; 
  $password = "1&)-f)j)k6n,"; 
  $dbname = "affilia5_main"; 

  $con = mysqli_connect($host, $user, $password,$dbname);

  if (mysqli_connect_errno()){
    die("Connection error: " . mysqli_connect_error());
  }
  echo "Connected.";

  if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }
  else{
      echo "Success!";

      $name = $_POST['name'];
      $business_name = $_POST['business_name'];
      $email = $_POST['email'];
      $phone = $_POST['phone'];
      $platform = $_POST['platform'];
      $page_url = $_POST['page_url'];
      $contact_method = $_POST['contact_method'];
      $note = $_POST['note'];

      $sql = "INSERT INTO `request`(`name`, `business_name`, `email`, `phone`, `platform`, `page_url`, `contact_method`, `note`) VALUES ('$name','$business_name','$email','$phone','$platform','$page_url','$contact_method','$note')";


      $res = mysqli_query($con, $sql);

      if ($res){
        echo "success!";
      }
      else{
        echo "Error!";
      }
      $con->close();
  }
?>