
<h1><a href='index.html'>HOME</a></h1>

<h2>Successfully sent thank you for your interest I will get back to you as soon as possible!</h2>

<h3>Name:<?=" ". $_POST["name"]?></h3><br>  

<h3>Email:<?=" " . $_POST["email"]?></h3>

<h3>Comment:<?=" " .$_POST['comment']?></h3>



    <?php
    /// create connection
if(! empty($_POST)){
$user = 'joe773_root';
$pass = '';
$db = 'joe773_frompportfoliodb';
$conn = new mysqli('localhost', $user, $pass, $db);
if(mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno(). ') ' . mysqli_connect_error());
}  

    ///insert into the database  
$sql = "INSERT INTO contactmeportfolio( name, email, comment)
VALUES(
    '{$conn->real_escape_string($_POST['name'])}',
 '{$conn->real_escape_string($_POST['email'])}',
 '{$conn->real_escape_string($_POST['comment'])}' 
 )";
if($conn->query($sql)){
    echo "Success! Row ID: {$conn->insert_id}";
}else{
    die("Eror: {$conn->errno} : {$conn->error}");
}
$conn->close();
}


    ///// send to email on submission
 $name= $_POST['name'];
    $email= $_POST['email'];
    $comment=$_POST['comment'];

    $to='joe_773@yahoo.com';
    $subject='Form Sub from portfolio site';
    $message="Name:  ".$name."\n". "From:  ".$email."\n\n" .$comment;
    $success= mail($to, $subject, $message);


?>
