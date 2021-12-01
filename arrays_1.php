<?php

$carros = array('BMW' => "X1", "VolksWagem" => "Polo" );
//exibe em tela o array inteiro (apenas para testes)
var_dump($carros);
// saida: array(2) { ["BMW"]=> string(2) "X1" ["VolksWagem"]=> string(4) "Polo" }

// semelhante ao console.log()
print_r($carros);
//saida Array ( [BMW] => X1 [VolksWagem] => Polo ) 
echo "<br>";

// igual ao console.log() porém em caso de arrays
// não exibe o conteúdo, apenas o tipo de dado (Array)
print($carros);
printf($strings);

// MÉTODOS COMUNS

// Criar um array vazio:
$arrayVazio = array();

// Inserir um item no array, sem especificar o index:
$arrayVazio[] = "Item um";
// saida: Array ( [0] => Item um ) 

//Inserir um item, especificando um index:
$arrayVazio["index_1"] = "valor_index_1";
echo "<br>";
print_r($arrayVazio);
// saída: Array ( [0] => Item um [index_1] => valor_index_1 ) 
/*
    Diferente do Js, o separado dos índices é a nomenclatura
    de [ ] e pode-se ter indexes de diferentes tipos
*/

