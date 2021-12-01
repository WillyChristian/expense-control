<?php
// array do Js

$arrayTeste = ["Jose", "Maria", "João"];
print_r($arrayTeste[0]);
/*--------------------------------------*/


// forEach não precisa de um controlador de fluxo 
foreach ($arrayTeste as $valorDoItemDoArray ) {
    echo "<br>"; 

    echo $valorDoItemDoArray;
}

$arrayComChaveValor = [
    "item A" => [
        "item A-1" => "valor item A-1",
        "item A-2" => "valor item A-2",
        "item A-3" => "valor item A-3",
    ],
    "item B" => [
        "item B-1" => "valor item B-1",
        "item B-2" => "valor item B-2",
        "item B-3" => "valor item B-3",
    ],

];

foreach ($arrayComChaveValor as $chave => $valor) {
    echo "<br>";
    foreach ($valor as $subChave => $valorSubChave) {
        echo $subChave.": ". $valorSubChave;
        echo "<hr>";
    };
}

