<?php

// separando  o conteúdo com base em um parâmetro
$contexto = "maria tem duas filhas";
$separado = explode(" ", $contexto);
print_r($separado);

// realocando o conteúdo
$juntos = implode(",", $separado);
echo "<br>";
print_r($juntos);

// tamanho da string
$size = strlen($contexto);
echo "<br>";
echo $size;

//Conta quantas palavras
$words = str_word_count($contexto);
echo "<br>";
echo $words;
echo "<br>";

// to uppercase
$myName = "willy";
$toUpper = strtoupper($myName);
echo $toUpper;
echo "<br>";

// to lowercase
$myName = "WILLY";
$toLower = strtolower($myName);
echo $toLower;
echo "<br>";

// slice a string, between two points
$myName = "WILLY";
$slice = substr($myName, 2, 4); //saida: LLY
echo $slice;
echo "<br>";

//shows the character based on the posiotion that was passed
// similar to indexof
$myName = "Meu nome é Jonas";
echo strpos($myName, "o"); //saida: the firt "o" on the phrase
echo "<br>";

//replace some word or letter on a string
$myName = "tem tres tigres no trilho do trem";
$position = str_replace("tigres", "dragões", $myName); //"tem tres dragões no trilho do trem"
echo $position;
echo "<br>";