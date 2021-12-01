<?php
    $teste = true
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site PHP</title>
    <link rel="stylesheet" href="./styles/main-styles.css">
</head>
<body> 
    <?php


        function exibeCidade($cidade){
            define("CITY", $cidade);
            echo CITY;
        }

        exibeCidade("texto");
    ?>
</body>
</html>