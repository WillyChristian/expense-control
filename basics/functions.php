
<?php


    function exibeCidade($cidade){
        define("CITY", $cidade);
        echo CITY;
    }

    exibeCidade("texto");
